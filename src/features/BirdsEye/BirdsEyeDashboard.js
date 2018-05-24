import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Demo from "features/BirdsEye/Circos/Demo"
import ImageGridDisplay from "common/components/ImageGridDisplay"
import { tileData } from "common/data/circosImageData"

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
    backgroundColor: theme.palette.background.paper,
  },
})

class SimpleTabs extends Component {
  state = {
    value: 0,
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
        {value === 0 && (
          <TabContainer>
            <Demo />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <ImageGridDisplay tileData={tileData} />
          </TabContainer>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(SimpleTabs)
