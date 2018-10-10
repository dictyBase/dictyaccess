import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"

const styles = theme => ({
  paper: {
    textAlign: "center",
    height: "400px",
    paddingTop: "50px",
  },
})

/**
 * This is a Coming Soon page for missing dashboards.
 */

const ComingSoon = props => {
  const { classes } = props
  return (
    <Paper className={classes.paper}>
      <h1>Coming Soon!</h1>
      <h3>We are working hard to bring real data to this page.</h3>

      <Link to="/">
        <Button color="primary">Back to Dashboard</Button>
      </Link>
    </Paper>
  )
}

export default withStyles(styles)(ComingSoon)
