import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import { withStyles } from "material-ui/styles"
import Routes from "app/routes/Routes"
import { FooterLinks } from "common/constants/Footer"
import { NavbarLinks } from "common/constants/Navbar"
import { headerItems, generateLinks } from "common/utils/headerItems"
import Breadcrumbs from "features/Breadcrumbs/Breadcrumbs"
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
    marginLeft: 0
  }
})

const App = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Router>
        <Header items={headerItems}>
          {headerItems => headerItems.map(generateLinks)}
        </Header>
      </Router>
      <Navbar items={NavbarLinks} />
      <div className={classes.appFrame}>
        <Breadcrumbs />
        <Sidebar />
        <main className={classes.content}>
          <div className={classes.drawerHeader} />
          <Routes />
        </main>
      </div>
      <Footer items={FooterLinks} />
    </div>
  )
}

export default withStyles(styles)(App)
