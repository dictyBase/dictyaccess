/* eslint-disable react/jsx-no-bind */
import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import DscDashboard from "features/StockCenter/DscDashboard"
import GenomeDashboard from "features/Genomes/GenomeDashboard"
import AnnotationsDashboard from "features/Annotations/AnnotationsDashboard"
import AnalyticsDashboard from "features/Analytics/AnalyticsDashboard"
import BirdsEyeDashboard from "features/BirdsEye/BirdsEyeDashboard"
import PhylogenyDashboard from "features/Phylogeny/PhylogenyDashboard"
import CircosGenesContainer from "features/BirdsEye/Circos/CircosGenesContainer"
import Login from "features/Authentication/Login"
import OauthCallback from "features/Authentication/OauthCallback"
import AuthLoader from "features/Authentication/AuthLoader"
import Logout from "features/Authentication/Logout"
import PageNotFound from "features/PageNotFound"
import BirdsEyeComparative from "features/BirdsEye/BirdsEyeComparative"
import BirdsEyeSpatialExpression from "features/BirdsEye/BirdsEyeSpatialExpression"
import CircosSeqContainer from "features/BirdsEye/Circos/CircosSeqContainer"
import useGoogleAnalytics from "common/hooks/useGoogleAnalytics"

/**
 * List of routes used with React Router.
 */

const Routes = () => {
  useGoogleAnalytics()

  return (
    <Switch>
      <Route
        exact
        path="/"
        component={(BirdsEyeDashboard) => <Redirect to="/birdseye/genes" />}
      />
      <Route
        exact
        path="/birdseye"
        component={(BirdsEyeDashboard) => <Redirect to="/birdseye/genes" />}
      />
      <Route exact path="/birdseye/genes" component={BirdsEyeDashboard} />
      <Route
        exact
        path="/birdseye/genes/:id"
        render={({ location }) => (
          <CircosGenesContainer key={location.pathname} />
        )}
      />
      <Route
        exact
        path="/birdseye/comparative"
        component={BirdsEyeComparative}
      />
      <Route
        exact
        path="/birdseye/spatial-expression"
        component={BirdsEyeSpatialExpression}
      />
      <Route
        exact
        path="/birdseye/spatial-expression/:id"
        render={({ location }) => (
          <CircosSeqContainer key={location.pathname} />
        )}
      />
      <Route exact path="/genomes" component={GenomeDashboard} />
      <Route exact path="/annotations" component={AnnotationsDashboard} />
      <Route exact path="/analytics" component={AnalyticsDashboard} />
      <Route exact path="/stockcenter" component={DscDashboard} />
      <Route exact path="/phylogeny" component={PhylogenyDashboard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/:provider/callback" component={OauthCallback} />
      <Route exact path="/load/auth" component={AuthLoader} />
      <Route exact path="/logout" component={Logout} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  )
}

export default Routes
