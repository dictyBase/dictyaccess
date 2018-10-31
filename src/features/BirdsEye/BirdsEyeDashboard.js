// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import DataSetDisplay from "features/BirdsEye/Global/DataSets/DataSetDisplay"
import { changeBirdsEyeTab } from "app/actions/birdsEyeActions"

const TabContainer = ({ children }: any) => (
  <Typography component="div" style={{ padding: 8 * 3 }}>
    {children}
  </Typography>
)

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
})

type Props = {
  /** Material-UI classes */
  classes: Object,
  /** The birdseye slice of state */
  birdseye: Object,
  /** Action for changing the tab */
  changeBirdsEyeTab: Function,
}

class BirdsEyeDashboard extends Component<Props> {
  handleChange = (event: SyntheticEvent<>, value: string) => {
    const { changeBirdsEyeTab } = this.props

    changeBirdsEyeTab(value)
  }

  render() {
    const { classes, birdseye } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={birdseye.currentTab}
            onChange={this.handleChange}
            centered>
            <Tab label="Global" />
            <Tab label="Comparative" />
          </Tabs>
        </AppBar>
        {birdseye.currentTab === 0 && (
          <TabContainer>
            <DataSetDisplay />
          </TabContainer>
        )}
        {birdseye.currentTab === 1 && (
          <TabContainer>
            <center>Work in progress</center>
          </TabContainer>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

export default connect(
  mapStateToProps,
  { changeBirdsEyeTab },
)(withStyles(styles)(BirdsEyeDashboard))
