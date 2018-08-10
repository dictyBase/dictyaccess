// @flow
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"

import CircosGraph from "features/BirdsEye/Circos/CircosGraph"
import chrNameMapper from "features/BirdsEye/Circos/utils/chrNameMapper"

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
    data: "",
    error: "",
  }

  async componentDidMount() {
    const { match } = this.props
    // set url for fetching data
    const chrUrl = `${process.env.REACT_APP_CIRCOS_SERVER}/chromosomes`
    const genesUrl = `${process.env.REACT_APP_CIRCOS_SERVER}/genes`
    try {
      const chrRes = await fetch(chrUrl)
      const chrJson = await chrRes.json()
      const geneRes = await fetch(genesUrl)
      const geneJson = await geneRes.json()

      const chrData = chrJson.filter(
        i => i.attributes.name === match.url.slice(-4),
      )
      const geneData = geneJson.filter(
        item => item.attributes.block_id === chrNameMapper(match.url.slice(-4)),
      )
      this.setState({ isFetching: false, chr: chrData[0], data: geneData })
    } catch (error) {
      this.setState({ isFetching: false, error: error })
    }
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes, description } = this.props
    const { value, chr, data, error, isFetching } = this.state

    if (error) {
      return <p>Sorry! There was an error loading the items: {error.message}</p>
    }

    if (isFetching) {
      return <div>Fetching ....</div>
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
            <CircosGraph chr={chr} data={data} description={description} />
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
