import React, { Component } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import { Topbar } from "features"
import { Sidebar } from "features"
import { FooterLinks } from "common/constants/Footer"
import { NavbarLinks } from "common/constants/Navbar"
import Routes from "app/routes/Routes"
import { headerItems, generateLinks } from "common/utils/headerItems"

const styles = {
  container: {
    fontFamily: "roboto",
    marginRight: "auto",
    marginLeft: "auto",
    paddingRight: "10px",
    paddingLeft: "10px",
    paddingBottom: "10px",
    backgroundColor: "rgb(117, 117, 117)",
    height: "100vh"
  }
}

class App extends Component {
  state = {
    sideBarOpen: true
  }

  // look into changing this
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.width !== nextProps.width) {
  //     this.setState({ sideBarOpen: nextProps.width === LARGE })
  //   }
  // }

  handleSideBar = () => {
    this.setState({
      sideBarOpen: !this.state.sideBarOpen
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Header items={headerItems}>
            {headerItems => headerItems.map(generateLinks)}
          </Header>
        </Router>
        <Navbar items={NavbarLinks} />
        <div style={styles.container}>
          <Topbar handleSideBar={this.handleSideBar} />
          <br />
          <Sidebar sideBarOpen={this.props.sideBarOpen} />
          <Routes />
        </div>
        <Footer items={FooterLinks} />
      </div>
    )
  }
}

export default App
