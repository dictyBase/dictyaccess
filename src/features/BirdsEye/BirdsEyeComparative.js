// @flow
import React from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import BirdsEyeTabList from "./BirdsEyeTabList"
// import DataSetLinks from "features/BirdsEye/Global/DataSets/DataSetLinks"

const styles = (theme) => ({
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
 * This is the Comparative tab display for the Bird's Eye dashboard.
 */

const BirdsEyeComparative = (props: Props) => {
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
          <center>Work in progress</center>
          <br />
          <br />
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

export default connect(
  mapStateToProps,
  null,
)(withStyles(styles)(BirdsEyeComparative))
