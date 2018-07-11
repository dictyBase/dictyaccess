import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import Sidebar from "app/layout/Sidebar"
import Routes from "app/routes/Routes"
import { FooterLinks } from "common/constants/Footer"
import { NavbarLinks } from "common/constants/Navbar"
import {
  headerItems,
  loggedHeaderItems,
  generateLinks,
} from "common/utils/headerItems"
import { Container, MainContentStyle } from "./AppStyles"
import type { MapStateToProps } from "react-redux"

const App = props => {
  return (
    <div>
      {props.auth.isAuthenticated ? (
        <Header items={loggedHeaderItems}>
          {items => items.map(generateLinks)}
        </Header>
      ) : (
        <Header items={headerItems}>{items => items.map(generateLinks)}</Header>
      )}
      <Navbar items={NavbarLinks} />
      <Container>
        <Sidebar />
        <MainContentStyle>
          <Routes />
        </MainContentStyle>
      </Container>
      <Footer items={FooterLinks} />
    </div>
  )
}

const mapStateToProps: MapStateToProps<*, *, *> = ({ auth }) => ({
  auth,
})

export default withRouter(connect(mapStateToProps)(App))
