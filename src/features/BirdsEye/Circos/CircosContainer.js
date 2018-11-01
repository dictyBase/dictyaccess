// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"

import CircosDisplay from "features/BirdsEye/Circos/CircosDisplay"
import CircosLoader from "./CircosLoader"
import BirdsEyeTabList from "features/BirdsEye/BirdsEyeTabList"
import TypographyWrapper from "common/components/TypographyWrapper"
import ErrorPage from "common/components/ErrorPage"
import chrNameMapper from "features/BirdsEye/Circos/utils/chrNameMapper"
import chrNameExtender from "./utils/chrNameExtender"
import { fetchChromosomeData } from "app/actions/birdsEyeActions"

const styles = (theme: Object) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
})

const chrMap = (chr, id) => chr.data.filter(i => i.attributes.name === id)
const geneMap = (gene, id) =>
  gene.data.filter(item => item.attributes.block_id === chrNameMapper(id))

type Props = {
  /** Material-UI classes */
  classes: Object,
  /** React Router match object */
  match: Object,
  /** The birdseye slice of state */
  birdseye: Object,
  /** Action to fetch chromosome data */
  fetchChromosomeData: Function,
}

/**
 * This is the Circos container. It fetches the desired data then passes them as props to CircosDisplay.
 */

class CircosContainer extends Component<Props> {
  componentDidMount() {
    const { fetchChromosomeData } = this.props

    fetchChromosomeData()
  }

  // turn into HOC!

  render() {
    const {
      birdseye: { isFetching, error, currentTab, chromosomes, genes },
      classes,
      match,
    } = this.props

    const description = `Circos visualization for canonical gene models of D.discoideum ${chrNameExtender(
      match.params.id,
    )}. The blue and red tracks represents genes from negative and positive strands respectively.`

    if (error) {
      return <ErrorPage />
    }

    if (isFetching) {
      return <CircosLoader />
    }

    return (
      <div className={classes.root}>
        <BirdsEyeTabList />
        {currentTab === 0 && (
          <TypographyWrapper>
            {/* refactor this!!! */}
            {chromosomes.data &&
              genes.data && (
                <CircosDisplay
                  chr={chrMap(chromosomes, match.params.id)[0]}
                  genes={geneMap(genes, match.params.id)}
                  description={description}
                />
              )}
          </TypographyWrapper>
        )}
        {currentTab === 1 && (
          <TypographyWrapper>
            <center>Work in progress</center>
          </TypographyWrapper>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

export default connect(
  mapStateToProps,
  { fetchChromosomeData },
)(withStyles(styles)(withRouter(CircosContainer)))
