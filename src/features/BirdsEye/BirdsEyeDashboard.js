import React from "react"
import { Helmet } from "react-helmet"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import BirdsEyeTabList from "./BirdsEyeTabList"
import ImageHorizontalGrid from "common/components/ImageHorizontalGrid"
// import DataSetLinks from "features/BirdsEye/DataSetLinks"
import { chrGeneModels } from "common/data/chrGeneModels"

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
//     name: "Gene Models",
//     route: "/birdseye/genes",
//   },
// ]

/**
 * This is the main Bird's Eye Dashboard component.
 * It renders at /birdseye
 */

const BirdsEyeDashboard = (props) => {
  const {
    // birdseye: { currentTab },
    classes,
  } = props

  return (
    <div className={classes.root}>
      <Helmet>
        <title>DictyAccess Bird's Eye Dashboard - dictyBase</title>
        <meta
          name="description"
          content="Bird's Eye Dashboard for Gene Models at dictyBase"
        />
      </Helmet>
      <BirdsEyeTabList currentTab={0} />
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.dataSet}>
          {/* <DataSetLinks models={models} /> */}
          <h2>Gene Models</h2>
        </Grid>
        <Grid item xs={12}>
          <ImageHorizontalGrid imageData={chrGeneModels} />
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
)(withStyles(styles)(BirdsEyeDashboard))
