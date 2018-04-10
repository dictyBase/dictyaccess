import React from "react"
import Drawer from "material-ui/Drawer"

const Sidebar = props => {
  return (
    <Drawer docked={true} open={props.sideBarOpen}>
      DictyAccess
    </Drawer>
  )
}

export default Sidebar
