// @flow
import React from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import DataSetDisplay from "features/BirdsEye/Global/DataSets/DataSetDisplay"
import BirdsEyeTabList from "./BirdsEyeTabList"

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
}

const BirdsEyeDashboard = (props: Props) => {
  const { classes, birdseye } = props

  return (
    <div className={classes.root}>
      <BirdsEyeTabList />
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

const mapStateToProps = ({ birdseye }) => ({ birdseye })

export default connect(
  mapStateToProps,
  null,
)(withStyles(styles)(BirdsEyeDashboard))
