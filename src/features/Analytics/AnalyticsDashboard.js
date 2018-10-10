// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import ComingSoon from "features/ComingSoon"
import BrowserUsage from "features/Analytics/Charts/BrowserUsage"
import blue from "@material-ui/core/colors/blue"
import data from "common/data/data"

/**
 * This is the layout component for the Analytics dashboard. It uses Material-UI's grid system for width and responsiveness.
 */

const AnalyticsDashboard = () => (
  <Grid container spacing={16}>
    <Grid item xs={12} sm={6} lg={6}>
      <BrowserUsage data={data.charts.browsers} color={blue[600]} />
    </Grid>
    <Grid item xs={12}>
      <ComingSoon />
    </Grid>
  </Grid>
)

export default AnalyticsDashboard
