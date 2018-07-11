// @flow
import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import { Login as LoginContainer } from "dicty-components-login"
import OauthSignHandler from "features/Authentication/OauthSignHandler"
import oauthConfig from "common/utils/oauthConfig"

// list of buttons to display
const buttons = ["orcid", "google", "linkedin"]

// custom theme for styling the buttons
const theme = {
  overrides: {
    MuiButton: {
      // name of the stylesheet
      root: {
        // name of the rule
        borderRadius: 3,
        color: "white",
        width: "80%",
        justifyContent: "start",
        minHeight: "55px",
        marginBottom: "5px",
      },
    },
  },
}

type Props = {}

/**
 * Component that displays all of the social login buttons with click handlers for each one
 */

class Login extends Component<Props> {
  handleClick = (name: string) => {
    const config = oauthConfig[name]
    let url = `${config.authorizationEndpoint}?client_id=${config.clientId}`
    url += `&scope=${config.scopes.join(config.scopeDelimiter)}`
    if (config.requiredUrlParams) {
      config.requiredUrlParams.forEach(element => {
        url += `&${element[0]}=${element[1]}`
      })
    }
    if (config.optionalUrlParams) {
      config.optionalUrlParams.forEach(element => {
        url += `&${element[0]}=${element[1]}`
      })
    }
    url += `&redirect_uri=${config.redirectUrl}`
    window.open(
      url,
      name,
      `width=${config.popupOptions.width},
                    height=${config.popupOptions.height}`,
    )
  }
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={9} sm={9} md={6} lg={6}>
          <Grid container justify="center">
            <Grid item xs={9}>
              <LoginContainer
                buttons={buttons}
                theme={theme}
                onClick={this.handleClick}
              />
              <OauthSignHandler />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Login
