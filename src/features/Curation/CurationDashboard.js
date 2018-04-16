// @flow
import React from "react"
import Grid from "material-ui/Grid"
import CuratedPapers from "features/Curation/Charts/CuratedPapers"
// import LatestNews from "features/Curation/News/LatestNews"
import red from "material-ui/colors/red"
import data from "common/data/data"

/**
 * This is the layout component for the Curation dashboard.
 */

const CurationDashboard = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={6} lg={6}>
        <CuratedPapers data={data.charts.orders} color={red[600]} />
      </Grid>
      {/* <Grid item xs={12} sm={6} lg={6}>
        <LatestNews data={data.news} />
      </Grid> */}
    </Grid>
  )
}

export default CurationDashboard
