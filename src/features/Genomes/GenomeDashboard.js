// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import ComingSoon from "features/ComingSoon"
// import MostUsedGenes from "features/Genomes/Tables/MostUsedGenes"
// import GenesList from "features/Genomes/Tables/GenesList"
// import ProteinsList from "features/Genomes/Tables/ProteinsList"
// import GenomeCounts from "features/Genomes/Charts/GenomeCounts"
// import GeneFeatures from "features/Genomes/Charts/GeneFeatures"
// import data from "common/data/data"
// import orange from "@material-ui/core/colors/orange"

/**
 * This is the layout component for the Genomes dashboard. It uses Material-UI's grid system for width and responsiveness.
 */

const GenomeDashboard = () => (
  <Grid container spacing={16}>
    {/* <Grid item xs={12} sm={6} lg={6}>
        <MostUsedGenes data={data.tables.mostUsedGenes} color={orange[600]} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <GenomeCounts data={data.charts.genomeCounts} color={orange[700]} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <GeneFeatures data={data.charts.geneFeatures} color={orange[900]} />
      </Grid>
      <Grid item xs={12} sm={3} lg={3}>
        <GenesList data={data.tables.genesList} color={orange[800]} />
      </Grid>
      <Grid item xs={12} sm={3} lg={3}>
        <ProteinsList data={data.tables.proteinsList} color={orange[400]} />
      </Grid> */}
    <Grid item xs={12}>
      <ComingSoon />
    </Grid>
  </Grid>
)

export default GenomeDashboard
