// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { changeBirdsEyeTab } from "app/actions/birdsEyeActions"

type Props = {
  /** The birdseye slice of state */
  birdseye: Object,
  /** Action for changing the tab */
  changeBirdsEyeTab: Function,
}

// convert this to functional component!

/**
 * This contains the tabs at the top of the Bird's Eye Dashboard.
 */

class BirdsEyeTabList extends Component<Props> {
  handleChange = (event: SyntheticEvent<>, value: string) => {
    const { changeBirdsEyeTab } = this.props

    changeBirdsEyeTab(value)
  }

  render() {
    const { birdseye } = this.props

    return (
      <div>
        <AppBar position="static">
          <Tabs
            value={birdseye.currentTab}
            onChange={this.handleChange}
            centered>
            <Tab label="Global" component={Link} to="/birdseye/genes" />
            <Tab
              label="Comparative"
              component={Link}
              to="/birdseye/comparative"
            />
            <Tab
              label="Spatial Expression"
              component={Link}
              to="/birdseye/spatial-expression"
            />
          </Tabs>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

export default connect(
  mapStateToProps,
  { changeBirdsEyeTab },
)(BirdsEyeTabList)
