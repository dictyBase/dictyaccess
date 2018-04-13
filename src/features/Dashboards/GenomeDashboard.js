// @flow
import React from "react"
import Grid from "material-ui/Grid"
import MostUsedGenes from "features/Tables/MostUsedGenes"
import GenesList from "features/Tables/GenesList"
import ProteinsList from "features/Tables/ProteinsList"
import GenomeCounts from "features/Charts/GenomeCounts"
import data from "common/data/data"

const GenomeDashboard = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={6} lg={6}>
        <MostUsedGenes data={data.tables.mostUsedGenes} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <GenomeCounts data={data.charts.genomeCounts} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <GenesList data={data.tables.genesList} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <ProteinsList data={data.tables.proteinsList} />
      </Grid>
    </Grid>
  )
}

export default GenomeDashboard
