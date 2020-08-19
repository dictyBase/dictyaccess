import React from "react"
import Grid from "@material-ui/core/Grid"
import ComingSoon from "features/ComingSoon"

/**
 * This is the layout component for the Phylogeny dashboard. It uses Material-UI's grid system for width and responsiveness.
 */

const PhylogenyDashboard = () => (
  <Grid container spacing={16}>
    <Grid item xs={12}>
      <ComingSoon />
    </Grid>
  </Grid>
)

export default PhylogenyDashboard
