// @flow
import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import DscDashboard from "features/StockCenter/DscDashboard"
import GenomeDashboard from "features/Genomes/GenomeDashboard"
import CurationDashboard from "features/Curation/CurationDashboard"
import AnalyticsDashboard from "features/Analytics/AnalyticsDashboard"
import BirdsEyeDashboard from "features/BirdsEye/BirdsEyeDashboard"
import PageNotFound from "features/PageNotFound"

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={GenomeDashboard => <Redirect to="/dashboard/genomes" />}
      />
      <Route exact path="/dashboard/birdseye" component={BirdsEyeDashboard} />
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
