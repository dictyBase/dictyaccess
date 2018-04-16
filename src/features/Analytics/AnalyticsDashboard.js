// @flow
import React from "react"
import Grid from "material-ui/Grid"
import BrowserUsage from "features/Analytics/Charts/BrowserUsage"
import data from "common/data/data"

const AnalyticsDashboard = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={6} lg={6}>
        <BrowserUsage data={data.charts.browsers} />
      </Grid>
    </Grid>
  )
}

export default AnalyticsDashboard
