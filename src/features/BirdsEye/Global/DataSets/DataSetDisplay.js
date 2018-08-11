// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"

import ChromosomeImageGridDisplay from "features/BirdsEye/Circos/ChromosomeImageGridDisplay"
import Dropdown from "common/components/Dropdown"
import { dropDownData } from "features/BirdsEye/Global/DataSets/DataSetDropdownMenu"

const DataSetDisplay = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={2}>
        <Dropdown dropDownData={dropDownData} />
      </Grid>
      <Grid item xs={10}>
        <ChromosomeImageGridDisplay />
      </Grid>
    </Grid>
  )
}

export default DataSetDisplay
