let fetchUserByIdResource,
  fetchUserByEmailResource,
  fetchRoleByIdResource,
  fetchPermissionByIdResource,
  oauthEndpointResource

if (process.env.REACT_APP_API_SERVER) {
  // set URL base for fetching user by ID
  const fetchUserByIdBase = "/users"
  fetchUserByIdResource = `${
    process.env.REACT_APP_API_SERVER
  }${fetchUserByIdBase}`
  // set URL base for fetching user by email
  const fetchUserByEmailBase = "/users/email"
  fetchUserByEmailResource = `${
    process.env.REACT_APP_API_SERVER
  }${fetchUserByEmailBase}`
  // set URL base for fetching role by ID
  const fetchRoleByIdBase = "/roles"
  fetchRoleByIdResource = `${
    process.env.REACT_APP_API_SERVER
  }${fetchRoleByIdBase}`
  // set URL base for fetching permission by ID
  const fetchPermissionByIdBase = "/permissions"
  fetchPermissionByIdResource = `${
    process.env.REACT_APP_API_SERVER
  }${fetchPermissionByIdBase}`
} else {
  fetchUserByIdResource = "http://betaapi.dictybase.local/users"
  fetchUserByEmailResource = "http://betaapi.dictybase.local/users/email"
  fetchRoleByIdResource = "http://betaapi.dictybase.local/roles"
  fetchPermissionByIdResource = "http://betaapi.dictybase.local/permissions"
}

if (process.env.REACT_APP_AUTH_SERVER) {
  const oauthEndpointBase = "/tokens"
  oauthEndpointResource = `${
    process.env.REACT_APP_AUTH_SERVER
  }${oauthEndpointBase}`
} else {
  oauthEndpointResource = "http://betatoken.dictybase.local/tokens"
}

const fetchHeaderConfig = {
  headers: {
    "content-type": "application/vnd.api+json",
  },
}

export {
  fetchUserByIdResource,
  fetchUserByEmailResource,
  fetchRoleByIdResource,
  fetchPermissionByIdResource,
  oauthEndpointResource,
  fetchHeaderConfig,
}
