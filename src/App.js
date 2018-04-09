import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import { FooterLinks } from "./constants/Footer"
import { NavbarLinks } from "./constants/Navbar"
import Routes from "./Routes"
import { headerItems, generateLinks } from "./utils/headerItems"

const App = () => {
  return (
    <div>
      <Router>
        <Header items={headerItems}>
          {headerItems => headerItems.map(generateLinks)}
        </Header>
      </Router>
      <Navbar items={NavbarLinks} />
      <Routes />
      <Footer items={FooterLinks} />
    </div>
  )
}

export default App
