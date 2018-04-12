// @flow
import React from "react"
import { withStyles } from "material-ui/styles"
import Drawer from "material-ui/Drawer"
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
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
    ...theme.mixins.toolbar
  }
})

const Sidebar = props => {
  const { classes, open, handleDrawerClose } = props

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Dicty Stock Center" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Genomepage" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Dicty Frontpage" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default withStyles(styles)(Sidebar)
