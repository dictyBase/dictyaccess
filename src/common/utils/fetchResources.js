let oauthEndpointResource

if (process.env.REACT_APP_AUTH_SERVER) {
  const oauthEndpointBase = "/tokens"
  oauthEndpointResource = `${
    process.env.REACT_APP_AUTH_SERVER
  }${oauthEndpointBase}`
} else {
  oauthEndpointResource = "https://betaapi.dictybase.local/tokens"
}

export { oauthEndpointResource }
