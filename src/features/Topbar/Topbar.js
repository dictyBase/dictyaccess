// @flow
import React from "react"
import classNames from "classnames"
import { withStyles } from "material-ui/styles"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import IconButton from "material-ui/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { drawerWidth } from "common/constants/Styling"

type Props = {
  /** Material-UI property for customizing CSS */
  classes: Object,
  /** Boolean representing whether the left drawer is open or not */
  open: boolean,
  /** Handler to open the left drawer */
  handleDrawerOpen: Function
}

const styles = theme => ({
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  }
})

const Topbar = (props: Props) => {
  const { classes, open, handleDrawerOpen } = props

  return (
    <div>
      <AppBar
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open
        })}>
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            DictyAccess
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Topbar)
