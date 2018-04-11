// @flow
import React from "react"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import IconButton from "material-ui/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

type Props = {
  styles: Object,
  handleSideBar: Function
}

const Topbar = (props: Props) => {
  return (
    <div>
      <AppBar position="static" style={{ ...props.styles }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={props.handleSideBar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            DictyAccess
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Topbar
