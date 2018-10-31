// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
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
 * This contains the tabs on the top of the Bird's Eye Dashboard.
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
            <Tab label="Global" />
            <Tab label="Comparative" />
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
