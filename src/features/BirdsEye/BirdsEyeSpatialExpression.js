// @flow
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import BirdsEyeTabList from "./BirdsEyeTabList"
// import DataSetLinks from "features/BirdsEye/Global/DataSets/DataSetLinks"

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
})

type Props = {
  /** Material-UI classes */
  classes: Object,
  /** The birdseye slice of state */
  birdseye: Object,
}

/**
 * This is the Spatial Expression tab display for the Bird's Eye dashboard.
 */

const BirdsEyeSpatialExpression = (props: Props) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <BirdsEyeTabList />
      <Grid container spacing={16}>
        {/* <Grid item xs={2}>
          <DataSetLinks />
        </Grid> */}
        <Grid item xs={12}>
          <br />
          <br />
          <center>
            Thumbnails coming soon...
            <br />
            <br />
            Check mockups here:
            <br />
            <br />
            <Link to="/birdseye/spatial-expression/1">chr1</Link>
            <br />
            <Link to="/birdseye/spatial-expression/2">chr2</Link>
            <br />
            <Link to="/birdseye/spatial-expression/3">chr3</Link>
            <br />
            <Link to="/birdseye/spatial-expression/4">chr4</Link>
            <br />
            <Link to="/birdseye/spatial-expression/5">chr5</Link>
            <br />
            <Link to="/birdseye/spatial-expression/6">chr6</Link>
          </center>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

export default connect(
  mapStateToProps,
  null,
)(withStyles(styles)(BirdsEyeSpatialExpression))
