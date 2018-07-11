// @flow
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import ImageGridDisplay from "common/components/ImageGridDisplay"
import { imageData } from "common/data/circosImageData"
import Dropdown from "common/components/Dropdown"
import { dropDownData } from "features/BirdsEye/Global/DataSets/DataSetDropdownMenu"

type Props = {
  /** React Router history */
  history: Object,
  /** React Router match object */
  match: Object,
}

type State = {}

class DataSetDisplay extends Component<Props, State> {
  handleClick = component => {
    const { history, match } = this.props
    history.push(`/birdseye/${match.params.dataset}/${component}`)
  }

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={2}>
          <Dropdown dropDownData={dropDownData} />
        </Grid>
        <Grid item xs={10}>
          <ImageGridDisplay
            imageData={imageData}
            handleClick={this.handleClick}
          />
        </Grid>
      </Grid>
    )
  }
}

export default withRouter(DataSetDisplay)
