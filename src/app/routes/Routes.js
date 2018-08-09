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
  chr1,
  chr2,
  chr3,
  chr4,
  chr5,
  chr6,
} from "features/BirdsEye/Circos/geneArrays"
import {
  chr1Description,
  chr2Description,
  chr3Description,
  chr4Description,
  chr5Description,
  chr6Description,
} from "common/constants/Descriptions"
import chromosomes from "common/data/circos/chromosomes.json"

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
        render={() => (
          <CircosDisplay
            data={chr1}
            chr={chromosomes.data[0]}
            description={chr1Description}
          />
        )}
      />
      <Route
        exact
        path="/birdseye/:dataset/chr2"
        render={() => (
          <CircosDisplay
            data={chr2}
            chr={chromosomes.data[1]}
            description={chr2Description}
          />
        )}
      />
      <Route
        exact
        path="/birdseye/:dataset/chr3"
        render={() => (
          <CircosDisplay
            data={chr3}
            chr={chromosomes.data[2]}
            description={chr3Description}
          />
        )}
      />
      <Route
        exact
        path="/birdseye/:dataset/chr4"
        render={() => (
          <CircosDisplay
            data={chr4}
            chr={chromosomes.data[3]}
            description={chr4Description}
          />
        )}
      />
      <Route
        exact
        path="/birdseye/:dataset/chr5"
        render={() => (
          <CircosDisplay
            data={chr5}
            chr={chromosomes.data[4]}
            description={chr5Description}
          />
        )}
      />
      <Route
        exact
        path="/birdseye/:dataset/chr6"
        render={() => (
          <CircosDisplay
            data={chr6}
            chr={chromosomes.data[5]}
            description={chr6Description}
          />
        )}
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
