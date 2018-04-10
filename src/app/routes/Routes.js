// @flow
import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import Dashboard from "app/layout/Dashboard"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={Dashboard => <Redirect to="/dashboard" />}
        />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default Routes
