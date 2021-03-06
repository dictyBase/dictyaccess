import React from "react"
import Grid from "@material-ui/core/Grid"
import ComingSoon from "features/ComingSoon"
// import CuratedPapers from "./Charts/CuratedPapers"
// import PapersByYear from "./Charts/PapersByYear"
// import LatestPaperAnnotations from "./Lists/LatestPaperAnnotations"
// import red from "@material-ui/core/colors/red"
// import data from "common/data/data"

/**
 * This is the layout component for the Curation dashboard. It uses Material-UI's grid system for width and responsiveness.
 */

const AnnotationsDashboard = () => (
  <Grid container spacing={16}>
    {/* <Grid item xs={12} sm={6} lg={6}>
      <CuratedPapers data={data.charts.orders} color={red[600]} />
    </Grid>
    <Grid item xs={12} sm={6} lg={6}>
      <PapersByYear data={data.charts.papersByYear} color={red[700]} />
    </Grid>
    <Grid item xs={12} sm={4} lg={4}>
      <LatestPaperAnnotations data={data.annotations.papers} color={red[800]} />
    </Grid> */}
    <Grid item xs={12}>
      <ComingSoon />
    </Grid>
  </Grid>
)

export default AnnotationsDashboard
