// @flow
import React from "react"
import { withStyles } from "material-ui/styles"
import Drawer from "material-ui/Drawer"
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import Typography from "material-ui/Typography"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import FingerprintIcon from "@material-ui/icons/Fingerprint"
import WorkIcon from "@material-ui/icons/Work"
import DataUsageIcon from "@material-ui/icons/DataUsage"
import { StyledLink } from "./SidebarStyles"
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
    justifyContent: "center",
    padding: "0 8px",
    backgroundColor: "#4f5aae",
    color: "#fff",
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
  classes: Object
}

const Sidebar = (props: Props) => {
  const { classes } = props

  return (
    <Drawer
      variant="persistent"
      open
      classes={{
        paper: classes.drawerPaper
      }}>
      <div className={classes.drawerHeader}>
        <Typography variant="title" color="inherit">
          DictyAccess
        </Typography>
      </div>
      <List className={classes.list}>
        <ListItem button>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <StyledLink to="/dashboard/dicty-stock-center">
            <ListItemText primary="Dicty Stock Center" />
          </StyledLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FingerprintIcon />
          </ListItemIcon>
          <StyledLink to="/dashboard/genomes">
            <ListItemText primary="Genomes" />
          </StyledLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <StyledLink to="/dashboard/curation">
            <ListItemText primary="Curation" />
          </StyledLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DataUsageIcon />
          </ListItemIcon>
          <StyledLink to="/dashboard/analytics">
            <ListItemText primary="Analytics" />
          </StyledLink>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default withStyles(styles)(Sidebar)
