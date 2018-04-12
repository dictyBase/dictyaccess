// @flow
import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import DscDashboard from "features/Dashboards/DscDashboard"
import GenomeDashboard from "features/Dashboards/GenomeDashboard"
import CurationDashboard from "features/Dashboards/CurationDashboard"
import AnalyticsDashboard from "features/Dashboards/AnalyticsDashboard"
import PageNotFound from "features/PageNotFound"

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={DscDashboard => <Redirect to="/dashboard" />}
      />
      <Route path="/dashboard" component={DscDashboard} />
      <Route path="/dashboard/dicty-stock-center" component={DscDashboard} />
      <Route path="/dashboard/genomes" component={GenomeDashboard} />
      <Route path="/dashboard/curation" component={CurationDashboard} />
      <Route path="/dashboard/analytics" component={AnalyticsDashboard} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  )
}

export default Routes
