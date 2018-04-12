// @flow
import React from "react"
import Grid from "material-ui/Grid"
import Orders from "features/Charts/Orders"
import BrowserUsage from "features/Charts/BrowserUsage"
import LatestTweets from "features/SocialMedia/LatestTweets"
import data from "common/data/data"

const AnalyticsDashboard = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={6} lg={6}>
        <Orders data={data.charts.orders} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <BrowserUsage data={data.charts.browsers} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <LatestTweets />
      </Grid>
    </Grid>
  )
}

export default AnalyticsDashboard
