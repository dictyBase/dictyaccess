// @flow
import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import DscDashboard from "features/StockCenter/DscDashboard"
import GenomeDashboard from "features/Genomes/GenomeDashboard"
import CurationDashboard from "features/Curation/CurationDashboard"
import AnalyticsDashboard from "features/Analytics/AnalyticsDashboard"
import BirdsEyeDashboard from "features/BirdsEye/BirdsEyeDashboard"
import CircosDisplay from "features/BirdsEye/Circos/CircosDisplay"
import Login from "features/Authentication/Login"
import OauthCallback from "features/Authentication/OauthCallback"
import AuthLoader from "features/Authentication/AuthLoader"
import Logout from "features/Authentication/Logout"
import PageNotFound from "features/PageNotFound"

import {
  chr1Description,
  chr2Description,
  chr3Description,
  chr4Description,
  chr5Description,
  chr6Description,
} from "common/constants/Descriptions"

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={BirdsEyeDashboard => <Redirect to="/birdseye/genemodels" />}
      />
      <Route
        exact
        path="/birdseye"
        component={BirdsEyeDashboard => <Redirect to="/birdseye/genemodels" />}
      />
      <Route exact path="/birdseye/:dataset" component={BirdsEyeDashboard} />
      <Route
        exact
        path="/birdseye/:dataset/chr1"
        render={() => <CircosDisplay description={chr1Description} />}
      />
      <Route
        exact
        path="/birdseye/:dataset/chr2"
        render={() => <CircosDisplay description={chr2Description} />}
      />
      <Route
        exact
        path="/birdseye/:dataset/chr3"
        render={() => <CircosDisplay description={chr3Description} />}
      />
      <Route
        exact
        path="/birdseye/:dataset/chr4"
        render={() => <CircosDisplay description={chr4Description} />}
      />
      <Route
        exact
        path="/birdseye/:dataset/chr5"
        render={() => <CircosDisplay description={chr5Description} />}
      />
      <Route
        exact
        path="/birdseye/:dataset/chr6"
        render={() => <CircosDisplay description={chr6Description} />}
      />
      <Route exact path="/genomes" component={GenomeDashboard} />
      <Route exact path="/curation" component={CurationDashboard} />
      <Route exact path="/analytics" component={AnalyticsDashboard} />
      <Route exact path="/dicty-stock-center" component={DscDashboard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/:provider/callback" component={OauthCallback} />
      <Route exact path="/load/auth" component={AuthLoader} />
      <Route exact path="/logout" component={Logout} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  )
}

export default Routes
