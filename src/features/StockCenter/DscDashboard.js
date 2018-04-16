// @flow
import React from "react"
import Grid from "material-ui/Grid"
import InfoBox from "common/components/InfoBox"
import Orders from "features/StockCenter/Charts/Orders"
import StrainsList from "features/StockCenter/Tables/StrainsList"
import PlasmidsList from "features/StockCenter/Tables/PlasmidsList"
// import LatestAnnotations from "features/Tables/LatestAnnotations"
import LatestStrains from "features/StockCenter/Lists/LatestStrains"
import LatestPlasmids from "features/StockCenter/Lists/LatestPlasmids"
import Poll from "@material-ui/icons/Poll"
import Public from "@material-ui/icons/Public"
import Whatshot from "@material-ui/icons/Whatshot"
import data from "common/data/data"

const DscDashboard = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={7} lg={3}>
        <InfoBox Icon={Poll} color="#90caf9" title="Strains" value="1927" />
      </Grid>
      <Grid item xs={12} sm={7} lg={3}>
        <InfoBox Icon={Public} color="#b2fef7" title="Plasmids" value="882" />
      </Grid>
      <Grid item xs={12} sm={7} lg={3}>
        <InfoBox
          Icon={Whatshot}
          color="#ffcccb"
          title="Antibodies"
          value="12"
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <StrainsList data={data.tables.latestGenes} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <PlasmidsList data={data.tables.mostUsedGenes} />
      </Grid>
      <Grid item xs={12} sm={3} lg={3}>
        <LatestStrains data={data.tables.latestGenes} />
      </Grid>
      <Grid item xs={12} sm={3} lg={3}>
        <LatestPlasmids data={data.tables.latestGenes} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <Orders data={data.charts.orders} />
      </Grid>
      {/* <Grid item xs={12} sm={6} lg={6}>
        <LatestAnnotations data={data.annotations} />
      </Grid> */}
    </Grid>
  )
}

export default DscDashboard
