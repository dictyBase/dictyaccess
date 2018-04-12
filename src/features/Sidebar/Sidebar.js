// @flow
import React from "react"
import { withStyles } from "material-ui/styles"
import Drawer from "material-ui/Drawer"
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import FingerprintIcon from "@material-ui/icons/Fingerprint"
import WorkIcon from "@material-ui/icons/Work"
import IconButton from "material-ui/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import { drawerWidth } from "common/constants/Styling"

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
    height: "100%"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    backgroundColor: "#4f5aae",
    ...theme.mixins.toolbar
  },
  icon: {
    color: "#fff"
  },
  list: {
    backgroundColor: "#eceff1",
    height: "100%"
  }
})

type Props = {
  /** Material-UI property for customizing CSS */
  classes: Object,
  /** Boolean representing whether the left drawer is open or not */
  open: boolean,
  /** Handler to close the left drawer */
  handleDrawerClose: Function
}

const Sidebar = (props: Props) => {
  const { classes, open, handleDrawerClose } = props

  return (
    <Drawer
      variant="persistent"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}>
      <div className={classes.drawerHeader}>
        <IconButton className={classes.icon} onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List className={classes.list}>
        <ListItem button>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary="Dicty Stock Center" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FingerprintIcon />
          </ListItemIcon>
          <ListItemText primary="Genomepage" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Dicty Frontpage" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default withStyles(styles)(Sidebar)
