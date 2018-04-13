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
        component={GenomeDashboard => <Redirect to="/dashboard/genomes" />}
      />
      <Route exact path="/dashboard/genomes" component={GenomeDashboard} />
      <Route exact path="/dashboard/curation" component={CurationDashboard} />
      <Route exact path="/dashboard/analytics" component={AnalyticsDashboard} />
      <Route
        exact
        path="/dashboard/dicty-stock-center"
        component={DscDashboard}
      />
      <Route path="*" component={PageNotFound} />
    </Switch>
  )
}

export default Routes
