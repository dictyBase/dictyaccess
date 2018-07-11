// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import FontAwesome from "react-fontawesome"

/**
 * Loading screen during the login process
 */

const AuthLoader = () => {
  return (
    <Grid container justify="center">
      <center>
        <h1>Logging in...</h1>
        <br />
        <FontAwesome name="spinner" size="5x" pulse fixedWidth />
      </center>
    </Grid>
  )
}

export default AuthLoader
