// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"

import ChromosomeImageGridDisplay from "features/BirdsEye/Circos/ChromosomeImageGridDisplay"
import Dropdown from "common/components/Dropdown"
// import DataSetButtons from "./DataSetButtons"
import { dropDownData } from "features/BirdsEye/Global/DataSets/DataSetDropdownMenu"

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
      {chromosomes.data &&
        genes.data && (
          <ChromosomeImageGridDisplay chromosomes={chromosomes} genes={genes} />
        )}
    </Grid>
  </Grid>
)

export default DataSetDisplay
