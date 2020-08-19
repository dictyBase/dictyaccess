import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"

import BirdsEyeTabList from "features/BirdsEye/BirdsEyeTabList"
import TypographyWrapper from "common/components/TypographyWrapper"

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  loader: {
    marginTop: "50px",
    marginBottom: "50px",
    color: "#004080",
  },
})

/** This is the loading component for Circos pages.
 * It displays a circular progress animation while fetching data.
 */

const CircosLoader = ({ classes, currentTab }) => (
  <div className={classes.root}>
    <BirdsEyeTabList currentTab={currentTab} />
    <TypographyWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.loader}>
          <center>
            <CircularProgress size={300} thickness={2} color="inherit" />
          </center>
        </Grid>
      </Grid>
    </TypographyWrapper>
  </div>
)

export default withStyles(styles)(CircosLoader)
