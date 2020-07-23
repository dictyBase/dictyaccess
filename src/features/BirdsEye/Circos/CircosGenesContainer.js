// @flow
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"

import CircosGenesDisplay from "features/BirdsEye/Circos/CircosGenesDisplay"
import CircosLoader from "./CircosLoader"
import BirdsEyeTabList from "features/BirdsEye/BirdsEyeTabList"
import TypographyWrapper from "common/components/TypographyWrapper"
import ErrorPage from "common/components/ErrorPage"
import withDataFetching from "common/components/withDataFetching"
import chrNameMapper from "features/BirdsEye/Circos/utils/chrNameMapper"
import { fetchChromosomeData } from "app/actions/birdsEyeActions"

const styles = (theme: Object) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
})

// functions to filter data for individual chromosome
const chrMap = (chr, id) => chr.data.filter((i) => i.attributes.name === id)
const geneMap = (genes, id) =>
  genes.data.filter(
    (item) => chrNameMapper(item.attributes.block_id) === chrNameMapper(id),
  )

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
 * This is the Circos container. It fetches the desired data via HOC then passes
 * them as props to the appropriate display component.
 */

const CircosGenesContainer = (props: Props) => {
  const {
    birdseye: { chromosomes, genes, pseudogenes },
    classes,
    match,
  } = props

  const data = genes.data && pseudogenes.data

  if (!data) {
    return <CircosLoader currentTab={0} />
  }

  return (
    <div className={classes.root}>
      <BirdsEyeTabList currentTab={0} />
      <TypographyWrapper>
        <CircosGenesDisplay
          chr={chrMap(chromosomes, match.params.id)[0]}
          genes={geneMap(genes, match.params.id)}
          pseudogenes={geneMap(pseudogenes, match.params.id)}
        />
      </TypographyWrapper>
    </div>
  )
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

const ConnectedCircosGenesContainer = connect(
  mapStateToProps,
  null,
)(withStyles(styles)(withRouter(CircosGenesContainer)))

export default withDataFetching(
  fetchChromosomeData,
  "birdseye",
  CircosLoader,
  ErrorPage,
)(ConnectedCircosGenesContainer)
