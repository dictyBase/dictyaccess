// @flow
import React from "react"
import Grid from "material-ui/Grid"
import BrowserUsage from "features/Analytics/Charts/BrowserUsage"
import blue from "material-ui/colors/blue"
import data from "common/data/data"

/**
 * This is the layout component for the Analytics dashboard.
 */

const AnalyticsDashboard = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={6} lg={6}>
        <BrowserUsage data={data.charts.browsers} color={blue[600]} />
      </Grid>
    </Grid>
  )
}

export default AnalyticsDashboard
