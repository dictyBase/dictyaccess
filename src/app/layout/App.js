import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import Sidebar from "app/layout/Sidebar"
import Routes from "app/routes/Routes"
import { FooterLinks } from "common/constants/Footer"
import { NavbarLinks } from "common/constants/Navbar"
import { headerItems, generateLinks } from "common/utils/headerItems"
import { Container, MainContentStyle } from "./AppStyles"

const App = () => {
  return (
    <Router>
      <div>
        <Header items={headerItems}>
          {headerItems => headerItems.map(generateLinks)}
        </Header>
        <Navbar items={NavbarLinks} />
        <Container>
          <Sidebar />
          <MainContentStyle>
            <Routes />
          </MainContentStyle>
        </Container>
        <Footer items={FooterLinks} />
      </div>
    </Router>
  )
}

export default App
