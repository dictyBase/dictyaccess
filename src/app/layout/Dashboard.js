import React from "react"
import Grid from "material-ui/Grid"
import InfoBox from "common/components/InfoBox"
import LatestGenes from "features/Tables/LatestGenes"
import MostUsedGenes from "features/Tables/MostUsedGenes"
import Orders from "features/Charts/Orders"
import Poll from "@material-ui/icons/Poll"
import Public from "@material-ui/icons/Public"
import Whatshot from "@material-ui/icons/Whatshot"
import data from "common/data/data"

const Dashboard = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm={4} lg={4}>
        <InfoBox Icon={Poll} color="#90caf9" title="Strains" value="1927" />
      </Grid>
      <Grid item xs={12} sm={4} lg={4}>
        <InfoBox Icon={Public} color="#b2fef7" title="Plasmids" value="882" />
      </Grid>
      <Grid item xs={12} sm={4} lg={4}>
        <InfoBox
          Icon={Whatshot}
          color="#ffcccb"
          title="Antibodies"
          value="12"
        />
      </Grid>
      <Grid item xs={0} lg={4}>
        <Orders data={data.charts.orders} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <LatestGenes />
      </Grid>
      <Grid item xs={12} lg={4}>
        <MostUsedGenes />
      </Grid>
    </Grid>
  )
}

export default Dashboard
