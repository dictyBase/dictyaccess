import React from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ImageHorizontalGrid from "common/components/ImageHorizontalGrid"
// import DataSetLinks from "features/BirdsEye/DataSetLinks"
import BirdsEyeTabList from "./BirdsEyeTabList"
import { chrSpatialExpression } from "common/data/chrSpatialExpression"

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  dataSet: {
    textAlign: "center",
  },
})

// const models = [
//   {
//     name: "Spatial Expression Models",
//     route: "/birdseye/spatial-expression",
//   },
// ]

/**
 * This is the Spatial Expression tab display for the Bird's Eye dashboard.
 */

const BirdsEyeSpatialExpression = (props) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <BirdsEyeTabList currentTab={1} />
      <Grid container spacing={1}>
        <Grid item xs={12} className={classes.dataSet}>
          {/* <DataSetLinks models={models} /> */}
          <h2>Gene Models with Spatial Expressions</h2>
        </Grid>
        <Grid item xs={12}>
          <center>
            <ImageHorizontalGrid imageData={chrSpatialExpression} />
          </center>
        </Grid>
      </Grid>
      <br /> <br />
    </div>
  )
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

export default connect(
  mapStateToProps,
  null,
)(withStyles(styles)(BirdsEyeSpatialExpression))
