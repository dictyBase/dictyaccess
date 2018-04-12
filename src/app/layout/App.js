import React, { Component } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import classNames from "classnames"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import { withStyles } from "material-ui/styles"
import Routes from "app/routes/Routes"
import { FooterLinks } from "common/constants/Footer"
import { NavbarLinks } from "common/constants/Navbar"
import { headerItems, generateLinks } from "common/utils/headerItems"
import { drawerWidth } from "common/constants/Styling"
import Topbar from "features/Topbar/Topbar"
import Sidebar from "features/Sidebar/Sidebar"

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    height: "100%",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#ced4da",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
})

class App extends Component {
  state = {
    open: true
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props
    const { open } = this.state
    return (
      <div className={classes.root}>
        <Router>
          <Header items={headerItems}>
            {headerItems => headerItems.map(generateLinks)}
          </Header>
        </Router>
        <Navbar items={NavbarLinks} />
        <div className={classes.appFrame}>
          {/* <Topbar open={open} handleDrawerOpen={this.handleDrawerOpen} /> */}
          <Sidebar open={open} handleDrawerClose={this.handleDrawerClose} />
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open
            })}>
            <div className={classes.drawerHeader} />
            <Routes />
          </main>
        </div>
        <Footer items={FooterLinks} />
      </div>
    )
  }
}

export default withStyles(styles)(App)
