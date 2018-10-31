// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"

import TypographyWrapper from "common/components/TypographyWrapper"
import DataSetDisplay from "features/BirdsEye/Global/DataSets/DataSetDisplay"
import BirdsEyeTabList from "./BirdsEyeTabList"
import CircosLoader from "./Circos/CircosLoader"
import ErrorPage from "common/components/ErrorPage"
import { fetchChromosomeData } from "app/actions/birdsEyeActions"

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
  /** Action to fetch chromosome data */
  fetchChromosomeData: Function,
}

class BirdsEyeDashboard extends Component<Props> {
  componentDidMount() {
    const { fetchChromosomeData } = this.props

    fetchChromosomeData()
  }

  render() {
    // turn into HOC!

    const {
      birdseye: { isFetching, error, currentTab, chromosomes, genes },
      classes,
    } = this.props

    if (error) {
      return <ErrorPage />
    }

    if (isFetching) {
      return <CircosLoader />
    }

    return (
      <div className={classes.root}>
        <BirdsEyeTabList />
        {currentTab === 0 && (
          <TypographyWrapper>
            <DataSetDisplay chromosomes={chromosomes} genes={genes} />
          </TypographyWrapper>
        )}
        {currentTab === 1 && (
          <TypographyWrapper>
            <center>Work in progress</center>
          </TypographyWrapper>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

export default connect(
  mapStateToProps,
  { fetchChromosomeData },
)(withStyles(styles)(withRouter(BirdsEyeDashboard)))
