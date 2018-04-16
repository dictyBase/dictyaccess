// @flow
import React from "react"
import Grid from "material-ui/Grid"
import MostUsedGenes from "features/Genomes/Tables/MostUsedGenes"
import GenesList from "features/Genomes/Tables/GenesList"
import ProteinsList from "features/Genomes/Tables/ProteinsList"
import GenomeCounts from "features/Genomes/Charts/GenomeCounts"
import data from "common/data/data"
import orange from "material-ui/colors/orange"

const GenomeDashboard = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={6} lg={6}>
        <MostUsedGenes data={data.tables.mostUsedGenes} color={orange} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <GenomeCounts data={data.charts.genomeCounts} color={orange} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <GenesList data={data.tables.genesList} color={orange} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <ProteinsList data={data.tables.proteinsList} color={orange} />
      </Grid>
    </Grid>
  )
}

export default GenomeDashboard
