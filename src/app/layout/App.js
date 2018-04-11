import React, { Component } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import { Sidebar } from "features"
import { FooterLinks } from "common/constants/Footer"
import { NavbarLinks } from "common/constants/Navbar"
// import Routes from "app/routes/Routes"
import { headerItems, generateLinks } from "common/utils/headerItems"
import { Container } from "./AppStyles"

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header items={headerItems}>
            {headerItems => headerItems.map(generateLinks)}
          </Header>
        </Router>
        <Navbar items={NavbarLinks} />
        <Container>
          {/* <Topbar handleSideBar={this.handleSideBar} styles={styles.topbar} /> */}
          <Sidebar />
          {/* <div style={styles.dashboard}>{this.props.children}</div>
          <Routes /> */}
        </Container>
        <Footer items={FooterLinks} />
      </div>
    )
  }
}

export default App
