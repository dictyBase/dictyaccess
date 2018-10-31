// @flow
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import Sidebar from "app/layout/Sidebar"
import Routes from "app/routes/Routes"
import { withStyles } from "@material-ui/core/styles"

import ErrorBoundary from "common/components/ErrorBoundary"
import fetchNavbar from "app/actions/navbarActions"
import fetchFooter from "app/actions/footerActions"
import footerItems from "common/constants/Footer"
import navItems from "common/constants/Navbar"
import {
  headerItems,
  loggedHeaderItems,
  generateLinks,
} from "common/utils/headerItems"
import { AppStyles as styles } from "common/styles/AppStyles"

const navTheme = {
  primary: "#004080",
  secondary: "#0059b3",
}

type Props = {
  /** Object representing auth part of state */
  auth: Object,
  /** Object representing navbar part of state */
  navbar: Object,
  /** Object representing footer part of state */
  footer: Object,
  /** Action creator to fetch navbar content */
  fetchNavbar: Function,
  /** Action creator to fetch footer content */
  fetchFooter: Function,
  /** Material-UI styling */
  classes: Object,
}

export class App extends Component<Props> {
  componentDidMount() {
    const { fetchNavbar, fetchFooter } = this.props
    fetchNavbar()
    fetchFooter()
  }

  render() {
    const { auth, navbar, footer, classes } = this.props

    // if any errors, fall back to old link setup
    if (navbar.error || !navbar.links || footer.error || !footer.links) {
      return (
        <div className={classes.body}>
          {auth.isAuthenticated ? (
            <Header items={loggedHeaderItems}>
              {items => items.map(generateLinks)}
            </Header>
          ) : (
            <Header items={headerItems}>
              {items => items.map(generateLinks)}
            </Header>
          )}
          <Navbar theme={navTheme} items={navItems} />
          <div className={classes.container}>
            <Sidebar />
            <main className={classes.mainContent}>
              <ErrorBoundary>
                <Routes />
              </ErrorBoundary>
            </main>
          </div>
          <Footer items={footerItems} />
        </div>
      )
    }

    return (
      <div className={classes.body}>
        {auth.isAuthenticated ? (
          <Header items={loggedHeaderItems}>
            {items => items.map(generateLinks)}
          </Header>
        ) : (
          <Header items={headerItems}>
            {items => items.map(generateLinks)}
          </Header>
        )}
        <Navbar theme={navTheme} items={navbar.links} />
        <div className={classes.container}>
          <Sidebar />
          <main className={classes.mainContent}>
            <ErrorBoundary>
              <Routes />
            </ErrorBoundary>
          </main>
        </div>
        <Footer items={footer.links} />
      </div>
    )
  }
}

const mapStateToProps = ({ auth, navbar, footer }) => ({ auth, navbar, footer })

export default withRouter(
  connect(
    mapStateToProps,
    { fetchNavbar, fetchFooter },
  )(withStyles(styles)(App)),
)
