// @flow
import React from "react"
import Grid from "material-ui/Grid"
import CuratedPapers from "features/Charts/CuratedPapers"
import LatestNews from "features/News/LatestNews"
import data from "common/data/data"

const CurationDashboard = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={6} lg={6}>
        <CuratedPapers data={data.charts.orders} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <LatestNews data={data.news} />
      </Grid>
    </Grid>
  )
}

export default CurationDashboard
