// @flow
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"

import CircosSeqDisplay from "./CircosSeqDisplay"
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
const chrMap = (chr, id) => chr.data.filter(i => i.attributes.name === id)
const geneMap = (genes, id) =>
  genes.data.filter(
    item => chrNameMapper(item.attributes.block_id) === chrNameMapper(id),
  )
const spatialMap = (genes, id) =>
  genes.data.filter(
    item => chrNameMapper(item.attributes.block_id) === chrNameMapper(id),
  )
const seqMap = (sequence, id) =>
  sequence.data.filter(item => item.attributes.chromosome === chrNameMapper(id))

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

const CircosSeqContainer = (props: Props) => {
  const {
    birdseye: { chromosomes, genes, sequence, spatial },
    classes,
    match,
  } = props

  const data = genes.data && sequence.data && spatial.data

  if (!data) {
    return <CircosLoader currentTab={1} />
  }

  return (
    <div className={classes.root}>
      <BirdsEyeTabList currentTab={1} />
      <TypographyWrapper>
        <CircosSeqDisplay
          chr={chrMap(chromosomes, match.params.id)[0]}
          genes={geneMap(genes, match.params.id)}
          sequence={seqMap(sequence, match.params.id)}
          spatial={spatialMap(spatial, match.params.id)}
        />
      </TypographyWrapper>
    </div>
  )
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

const ConnectedCircosContainer = connect(
  mapStateToProps,
  null,
)(withStyles(styles)(withRouter(CircosSeqContainer)))

export default withDataFetching(
  fetchChromosomeData,
  "birdseye",
  CircosLoader,
  ErrorPage,
)(ConnectedCircosContainer)
