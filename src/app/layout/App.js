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
import withWidth, { LARGE, SMALL } from "material-ui/utils/withWidth"

class App extends Component {
  state = {
    sideBarOpen: true
  }

  // look into changing this
  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ sideBarOpen: nextProps.width === LARGE })
    }
  }

  handleSideBar = () => {
    this.setState({
      sideBarOpen: !this.state.sideBarOpen
    })
  }

  render() {
    const drawerWidth = 240
    const { sideBarOpen } = this.props

    const styles = {
      container: {
        fontFamily: "roboto",
        marginRight: "auto",
        marginLeft: "auto",
        paddingRight: "10px",
        paddingLeft: "10px",
        paddingBottom: "10px",
        backgroundColor: "#E1E2E1"
      },
      topbar: {
        drawerWidth: sideBarOpen ? drawerWidth : 0,
        marginTop: "5px"
      },
      dashboard: {
        marginBottom: "10px",
        drawerWidth: sideBarOpen && this.props.width !== SMALL ? drawerWidth : 0
      }
    }

    return (
      <div>
        <Router>
          <Header items={headerItems}>
            {headerItems => headerItems.map(generateLinks)}
          </Header>
        </Router>
        <Navbar items={NavbarLinks} />
        <div style={styles.container}>
          <Topbar handleSideBar={this.handleSideBar} styles={styles.topbar} />
          <Sidebar sideBarOpen={sideBarOpen} />
          <div style={styles.dashboard}>{this.props.children}</div>
          <Routes />
        </div>
        <Footer items={FooterLinks} />
      </div>
    )
  }
}

export default withWidth()(App)
