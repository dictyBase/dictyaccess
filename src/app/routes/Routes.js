// @flow
import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import DscDashboard from "features/StockCenter/DscDashboard"
// import DscDraggableDashboard from "features/StockCenter/DscDraggableDashboard"
import GenomeDashboard from "features/Genomes/GenomeDashboard"
// import GenomeDraggableDashboard from "features/Genomes/GenomeDraggableDashboard"
import CurationDashboard from "features/Curation/CurationDashboard"
// import CurationDraggableDashboard from "features/Curation/CurationDraggableDashboard"
import AnalyticsDashboard from "features/Analytics/AnalyticsDashboard"
// import AnalyticsDraggableDashboard from "features/Analytics/AnalyticsDraggableDashboard"
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
