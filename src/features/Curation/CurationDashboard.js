// @flow
import React from "react"
import Grid from "material-ui/Grid"
import CuratedPapers from "features/Curation/Charts/CuratedPapers"
import PapersByYear from "features/Curation/Charts/PapersByYear"
import LatestNews from "features/Curation/News/LatestNews"
import LatestPaperAnnotations from "features/Curation/Lists/LatestPaperAnnotations"
import red from "material-ui/colors/red"
import data from "common/data/data"

/**
 * This is the layout component for the Curation dashboard. It uses Material-UI's grid system for width and responsiveness.
 */

const CurationDashboard = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={6} lg={6}>
        <CuratedPapers data={data.charts.orders} color={red[600]} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <PapersByYear data={data.charts.papersByYear} color={red[700]} />
      </Grid>
      <Grid item xs={12} sm={8} lg={8}>
        <LatestNews data={data.news} color={red[900]} />
      </Grid>
      <Grid item xs={12} sm={4} lg={4}>
        <LatestPaperAnnotations
          data={data.annotations.papers}
          color={red[800]}
        />
      </Grid>
    </Grid>
  )
}

export default CurationDashboard
