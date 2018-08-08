// @flow
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import CircosGraph from "features/BirdsEye/Circos/CircosGraph"

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
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleClick = component => {
    this.props.history.push(`/birdseye/genemodels/${component}`)
  }

  render() {
    const { classes, match } = this.props
    const { value } = this.state

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
            <CircosGraph chr={match.params.id} handleClick={this.handleClick} />
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
