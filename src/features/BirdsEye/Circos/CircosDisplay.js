// @flow
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Grid from "@material-ui/core/Grid"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"

import CircosGraph from "features/BirdsEye/Circos/CircosGraph"
import chrNameMapper from "features/BirdsEye/Circos/utils/chrNameMapper"
import chrNameExtender from "./utils/chrNameExtender"

type tabProps = {
  children: any,
}

const TabContainer = (props: tabProps) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
})

type Props = {
  /** Material-UI classes */
  classes: Object,
  /** React Router history */
  history: Object,
  /** React Router match object */
  match: Object,
}

type State = {
  /** Value representing the two tabs. Starts at 0. */
  value: number,
}

class CircosDisplay extends Component<Props, State> {
  state = {
    value: 0,
    isFetching: true,
    chr: "",
    genes: "",
    error: "",
    description: "",
  }

  async componentDidMount() {
    const { match } = this.props
    // set url for fetching data
    const chrUrl =
      "https://raw.githubusercontent.com/dictyBase/migration-data/master/dashboard/chromosomes.json"
    const genesUrl =
      "https://raw.githubusercontent.com/dictyBase/migration-data/master/dashboard/genes.json"
    try {
      const chrRes = await fetch(chrUrl)
      const chrJson = await chrRes.json()
      const geneRes = await fetch(genesUrl)
      const geneJson = await geneRes.json()

      const description = `This is a Circos display for ${chrNameExtender(
        match.params.id,
      )}. The blue genes represent negative strands, and the red genes represent positive strands.`

      const chrData = chrJson.data.filter(
        i => i.attributes.name === match.params.id,
      )
      const geneData = geneJson.data.filter(
        item => item.attributes.block_id === chrNameMapper(match.params.id),
      )
      this.setState({
        isFetching: false,
        chr: chrData[0],
        genes: geneData,
        description: description,
      })
    } catch (error) {
      this.setState({ isFetching: false, error: error })
    }
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value, chr, genes, description, error, isFetching } = this.state

    if (error) {
      return <p>Sorry! There was an error loading the items. {error}</p>
    }

    if (isFetching) {
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange} centered>
              <Tab label="Global" />
              <Tab label="Comparative" />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <Grid container spacing={16}>
                <Grid item xs={12} md={12} lg={9}>
                  <SkeletonTheme color="#d1d1d1">
                    <Skeleton count={9} />
                    <br />
                    <br />
                    <Skeleton count={9} />
                    <br />
                    <br />
                    <Skeleton count={9} />
                  </SkeletonTheme>
                </Grid>
                <Grid item xs={12} md={12} lg={3}>
                  <SkeletonTheme color="#d1d1d1">
                    <Skeleton count={9} />
                    <br />
                    <br />
                    <Skeleton count={9} />
                    <br />
                    <br />
                    <Skeleton count={9} />
                  </SkeletonTheme>
                </Grid>
              </Grid>
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <center>Work in progress</center>
            </TabContainer>
          )}
        </div>
      )
    }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} centered>
            <Tab label="Global" />
            <Tab label="Comparative" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <CircosGraph chr={chr} genes={genes} description={description} />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <center>Work in progress</center>
          </TabContainer>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(CircosDisplay))
