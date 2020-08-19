import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { changeBirdsEyeTab } from "app/actions/birdsEyeActions"

/**
 * This contains the tabs at the top of the Bird's Eye Dashboard.
 */

class BirdsEyeTabList extends Component {
  handleChange = (event, value) => {
    const { changeBirdsEyeTab } = this.props
    changeBirdsEyeTab(value)
  }

  render() {
    const { currentTab } = this.props

    return (
      <AppBar position="static">
        <Tabs value={currentTab} onChange={this.handleChange} centered>
          <Tab label="Global" component={Link} to="/birdseye/genes" />
          {/* <Tab
              label="Comparative"
              component={Link}
              to="/birdseye/comparative"
            /> */}
          <Tab
            label="Spatial Expression"
            component={Link}
            to="/birdseye/spatial-expression"
          />
        </Tabs>
      </AppBar>
    )
  }
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

export default connect(mapStateToProps, { changeBirdsEyeTab })(BirdsEyeTabList)
