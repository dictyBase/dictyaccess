// @flow
import React from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import BirdsEyeTabList from "./BirdsEyeTabList"
import ImageHorizontalGrid from "common/components/ImageHorizontalGrid"
import DataSetLinks from "features/BirdsEye/DataSetLinks"
import { chrGeneModels } from "common/data/chrGeneModels"

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
})

const models = [
  {
    name: "Gene Models",
    route: "/birdseye/genes",
  },
]

type Props = {
  /** Material-UI classes */
  classes: Object,
  /** The birdseye slice of state */
  birdseye: Object,
}

/**
 * This is the main Bird's Eye Dashboard component.
 * It renders at /birdseye
 */

const BirdsEyeDashboard = (props: Props) => {
  const {
    // birdseye: { currentTab },
    classes,
  } = props

  return (
    <div className={classes.root}>
      <BirdsEyeTabList />
      <Grid container spacing={16}>
        <Grid item xs={2}>
          <DataSetLinks models={models} />
        </Grid>
        <Grid item xs={10}>
          <ImageHorizontalGrid imageData={chrGeneModels} />
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

export default connect(
  mapStateToProps,
  null,
)(withStyles(styles)(BirdsEyeDashboard))
