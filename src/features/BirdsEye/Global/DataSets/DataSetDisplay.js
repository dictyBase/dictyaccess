import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import ImageGridDisplay from "common/components/ImageGridDisplay"
import { tileData } from "common/data/circosImageData"
import Dropdown from "common/components/Dropdown"
import { dropDownData } from "features/BirdsEye/Global/DataSets/DataSetDropdownMenu"

class DataSetDisplay extends Component {
  handleClick = component => {
    this.props.history.push(`/dashboard/birdseye/genemodels/${component}`)
  }

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={2}>
          <Dropdown dropDownData={dropDownData} />
        </Grid>
        <Grid item xs={10}>
          <ImageGridDisplay
            tileData={tileData}
            handleClick={this.handleClick}
          />
        </Grid>
      </Grid>
    )
  }
}

export default withRouter(DataSetDisplay)
