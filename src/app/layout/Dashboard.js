import React from "react"
import Grid from "material-ui/Grid"
import InfoBox from "common/components/InfoBox"
import LatestGenes from "features/Tables/LatestGenes"
import MostUsedGenes from "features/Tables/MostUsedGenes"
import Poll from "@material-ui/icons/Poll"
import Public from "@material-ui/icons/Public"
import Whatshot from "@material-ui/icons/Whatshot"
import { pink, cyan, purple } from "material-ui/colors"

const Dashboard = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={4}>
        <InfoBox Icon={Poll} color={pink[600]} title="Strains" value="1927" />
      </Grid>
      <Grid item xs={4}>
        <InfoBox Icon={Public} color={cyan[600]} title="Plasmids" value="882" />
      </Grid>
      <Grid item xs={4}>
        <InfoBox
          Icon={Whatshot}
          color={purple[400]}
          title="Antibodies"
          value="12"
        />
      </Grid>
      <Grid item xs={5}>
        <LatestGenes />
      </Grid>
      <Grid item xs={2}>
        &nbsp;
      </Grid>
      <Grid item xs={5}>
        <MostUsedGenes />
      </Grid>
    </Grid>
  )
}

export default Dashboard
