// @flow
import React from "react"
import Grid from "material-ui/Grid"
import InfoBox from "common/components/InfoBox"
import LatestGenes from "features/Tables/LatestGenes"
import MostUsedGenes from "features/Tables/MostUsedGenes"
import Orders from "features/Charts/Orders"
import BrowserUsage from "features/Charts/BrowserUsage"
import LatestTweets from "features/SocialMedia/LatestTweets"
import LatestNews from "features/News/LatestNews"
import Poll from "@material-ui/icons/Poll"
import Public from "@material-ui/icons/Public"
import Whatshot from "@material-ui/icons/Whatshot"
import data from "common/data/data"

const GenomeDashboard = () => {
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
      <Grid item xs={12} sm={6} lg={6}>
        <LatestGenes data={data.tables.latestGenes} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <MostUsedGenes data={data.tables.mostUsedGenes} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <Orders data={data.charts.orders} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <BrowserUsage data={data.charts.browsers} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <LatestNews data={data.news} />
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <LatestTweets />
      </Grid>
    </Grid>
  )
}

export default GenomeDashboard
