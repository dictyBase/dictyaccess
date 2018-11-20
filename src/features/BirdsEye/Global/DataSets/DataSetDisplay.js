// @flow
import React from "react"
import { withRouter } from "react-router-dom"
import Grid from "@material-ui/core/Grid"

import ImageHorizontalGrid from "common/components/ImageHorizontalGrid"
import DataSetLinks from "./DataSetLinks"
import { chrGeneModels } from "common/data/chrGeneModels"

const DataSetDisplay = ({ match }: Object) => (
  <Grid container spacing={16}>
    <Grid item xs={2}>
      <DataSetLinks />
    </Grid>
    <Grid item xs={10}>
      {match.params.dataset === "genes" && (
        <ImageHorizontalGrid imageData={chrGeneModels} />
      )}
    </Grid>
  </Grid>
)

export default withRouter(DataSetDisplay)
