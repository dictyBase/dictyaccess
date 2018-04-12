// @flow
import React from "react"
import Grid from "material-ui/Grid"
import LatestGenes from "features/Tables/LatestGenes"
import MostUsedGenes from "features/Tables/MostUsedGenes"
import data from "common/data/data"

const GenomeDashboard = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={6} lg={6}>
        <LatestGenes data={data.tables.latestGenes} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <MostUsedGenes data={data.tables.mostUsedGenes} />
      </Grid>
    </Grid>
  )
}

export default GenomeDashboard
