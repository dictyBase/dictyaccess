// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"

import ImageHorizontalGrid from "common/components/ImageHorizontalGrid"
import Dropdown from "common/components/Dropdown"
// import DataSetButtons from "./DataSetButtons"
import { dropDownData } from "features/BirdsEye/Global/DataSets/DataSetDropdownMenu"
import { imageData } from "common/data/chrGeneModels"

type Props = {
  chromosomes: Object,
  genes: Object,
}

const DataSetDisplay = ({ chromosomes, genes }: Props) => (
  <Grid container spacing={16}>
    <Grid item xs={2}>
      <Dropdown dropDownData={dropDownData} />
      {/* <DataSetButtons/> */}
    </Grid>
    <Grid item xs={10}>
      <ImageHorizontalGrid imageData={imageData} />
    </Grid>
  </Grid>
)

export default DataSetDisplay
