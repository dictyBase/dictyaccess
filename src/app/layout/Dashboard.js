import React from "react"
import Grid from "material-ui/Grid"
import LatestGenes from "features/Tables/LatestGenes"

const Dashboard = () => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={5}>
        <LatestGenes />
      </Grid>
      <Grid item xs={2}>
        &nbsp;
      </Grid>
      <Grid item xs={5}>
        <LatestGenes />
      </Grid>
    </Grid>
  )
}

export default Dashboard
