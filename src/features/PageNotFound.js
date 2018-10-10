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
 * This is a generic error page for broken routes.
 */

const PageNotFound = props => {
  const { classes } = props
  return (
    <Paper className={classes.paper}>
      <h1>Oops...</h1>
      <h3>This page does not exist.</h3>

      <Link to="/">
        <Button color="primary">Back to Dashboard</Button>
      </Link>
    </Paper>
  )
}

export default withStyles(styles)(PageNotFound)
