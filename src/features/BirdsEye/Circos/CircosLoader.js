import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"

import BirdsEyeTabList from "features/BirdsEye/BirdsEyeTabList"
import TypographyWrapper from "common/components/TypographyWrapper"

const styles = (theme: Object) => ({
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

const CircosLoader = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <BirdsEyeTabList />
      <TypographyWrapper>
        <Grid container spacing={16}>
          <Grid item xs={12} className={classes.loader}>
            <center>
              <CircularProgress size={350} thickness={2} color="inherit" />
            </center>
          </Grid>
        </Grid>
      </TypographyWrapper>
    </div>
  )
}

export default withStyles(styles)(CircosLoader)
