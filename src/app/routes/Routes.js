// @flow
import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import DscDashboard from "features/Dashboards/DscDashboard"
import DictybaseDashboard from "features/Dashboards/DictybaseDashboard"
import GenomepageDashboard from "features/Dashboards/GenomepageDashboard"
import PageNotFound from "features/PageNotFound"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={DscDashboard => <Redirect to="/dashboard" />}
        />
        <Route path="/dashboard" component={DscDashboard} />
        <Route path="/dashboard/genomepage" component={GenomepageDashboard} />
        <Route
          path="/dashboard/dictyfrontpage"
          component={DictybaseDashboard}
        />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
