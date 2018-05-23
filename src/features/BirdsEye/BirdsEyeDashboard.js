import React, { Component } from "react"
import { withStyles } from "material-ui/styles"
import AppBar from "material-ui/AppBar"
import Tabs, { Tab } from "material-ui/Tabs"
import Typography from "material-ui/Typography"

const TabContainer = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
})

class SimpleTabs extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} centered>
            <Tab label="Global" />
            <Tab label="Comparative" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Global</TabContainer>}
        {value === 1 && <TabContainer>Comparative</TabContainer>}
      </div>
    )
  }
}

export default withStyles(styles)(SimpleTabs)
