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
 * This is the layout component for the Curation dashboard.
 */

const CurationDashboard = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={12} lg={12}>
        <CuratedPapers data={data.charts.orders} color={red[600]} />
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
      <Grid item xs={12} sm={12} lg={12}>
        <PapersByYear data={data.charts.papersByYear} color={red[700]} />
      </Grid>
    </Grid>
  )
}

export default CurationDashboard
