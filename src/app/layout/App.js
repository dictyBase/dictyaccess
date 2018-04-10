import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import { Topbar } from "features"
import { Sidebar } from "features"
import { FooterLinks } from "common/constants/Footer"
import { NavbarLinks } from "common/constants/Navbar"
import Routes from "app/routes/Routes"
import { headerItems, generateLinks } from "common/utils/headerItems"

const App = () => {
  return (
    <div>
      <Router>
        <Header items={headerItems}>
          {headerItems => headerItems.map(generateLinks)}
        </Header>
      </Router>
      <Navbar items={NavbarLinks} />
      <Sidebar />
      <Topbar />
      <Routes />
      <Footer items={FooterLinks} />
    </div>
  )
}

export default App
