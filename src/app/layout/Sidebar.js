// @flow
import React from "react"
import { NavLink } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Typography from "@material-ui/core/Typography"

import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import FingerprintIcon from "@material-ui/icons/Fingerprint"
import InsertChartIcon from "@material-ui/icons/InsertChart"
import GpsFixedIcon from "@material-ui/icons/GpsFixed"
import PieChartIcon from "@material-ui/icons/PieChart"
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify"

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    width: "240px",
    height: "100%",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 8px",
    backgroundColor: "#0059b3",
    color: "#fff",
    minHeight: "64px",
  },
  list: {
    backgroundColor: "#eceff1",
    height: "100%",
  },
  navLink: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "1.5em",
  },
})

type Props = {
  /** Material-UI property for customizing CSS */
  classes: Object,
}

/**
 * This is the Sidebar component. Right now it is a Material-UI Drawer component that is permanently attached to the left side of the page, but responsiveness will be added soon.
 */

const Sidebar = (props: Props) => {
  const { classes } = props

  return (
    <Drawer
      variant="persistent"
      open
      classes={{
        paper: classes.drawerPaper,
      }}>
      <div className={classes.header}>
        <Typography variant="title" color="inherit">
          DictyAccess
        </Typography>
      </div>
      <List className={classes.list}>
        <ListItem button>
          <ListItemIcon>
            <GpsFixedIcon />
          </ListItemIcon>
          <NavLink
            className={classes.navLink}
            to="/birdseye"
            activeStyle={{
              fontWeight: "bold",
              color: "#011f4b",
            }}>
            Bird's Eye
          </NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InsertChartIcon />
          </ListItemIcon>
          <NavLink
            className={classes.navLink}
            to="/genomes"
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(251, 140, 0)",
            }}>
            Genome Stats
          </NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FingerprintIcon />
          </ListItemIcon>
          <NavLink
            className={classes.navLink}
            to="/annotations"
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(183, 28, 28)",
            }}>
            Annotations
          </NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FormatAlignJustifyIcon />
          </ListItemIcon>
          <NavLink
            className={classes.navLink}
            to="/phylogeny"
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(183, 28, 28)",
            }}>
            Phylogeny
          </NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PieChartIcon />
          </ListItemIcon>
          <NavLink
            className={classes.navLink}
            to="/analytics"
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(30, 136, 229)",
            }}>
            Analytics
          </NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <NavLink
            className={classes.navLink}
            to="/stockcenter"
            activeStyle={{
              fontWeight: "bold",
              color: "#4f5aae",
            }}>
            Dicty Stock Center
          </NavLink>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default withStyles(styles)(Sidebar)
