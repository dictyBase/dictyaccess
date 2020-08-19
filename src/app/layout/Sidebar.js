import React from "react"
import { NavLink } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Typography from "@material-ui/core/Typography"
import Hidden from "@material-ui/core/Hidden"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import GpsFixedIcon from "@material-ui/icons/GpsFixed"
// import FingerprintIcon from "@material-ui/icons/Fingerprint"
// import InsertChartIcon from "@material-ui/icons/InsertChart"
// import PieChartIcon from "@material-ui/icons/PieChart"
// import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify"

const links = [
  {
    route: "/birdseye",
    name: "Bird's Eye",
    color: "#011f4b",
    icon: GpsFixedIcon,
  },
  // {
  //   route: "/genomes",
  //   name: "Genome Stats",
  //   color: "rgb(251, 140, 0)",
  //   icon: InsertChartIcon,
  // },
  // {
  //   route: "/annotations",
  //   name: "Annotations",
  //   color: "rgb(183, 28, 28)",
  //   icon: FingerprintIcon,
  // },
  // {
  //   route: "/phylogeny",
  //   name: "Phylogeny",
  //   color: "rgb(183, 28, 28)",
  //   icon: FormatAlignJustifyIcon,
  // },
  // {
  //   route: "/analytics",
  //   name: "Analytics",
  //   color: "rgb(30, 136, 229)",
  //   icon: PieChartIcon,
  // },
  {
    route: "#",
    name: "Dicty Stock Center",
    color: "#4f5aae",
    icon: TrendingUpIcon,
    inactive: true,
  },
]

const styles = (theme) => ({
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

/**
 * This is the Sidebar component. Right now it is a Material-UI Drawer component that
 * is permanently attached to the left side of the page, but responsiveness will be added soon.
 */

const Sidebar = (props) => {
  const { classes } = props

  const linkList = links.map((item, index) => {
    const Icon = item.icon

    return (
      <div key={index}>
        <ListItem button>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <NavLink
            className={classes.navLink}
            to={item.route}
            activeStyle={{
              fontWeight: "bold",
              color: item.color,
            }}>
            <span style={{ color: `${item.inactive ? "#708090" : "#000000"}` }}>
              {item.name}
            </span>
            {/* {item.name} */}
          </NavLink>
        </ListItem>
      </div>
    )
  })

  return (
    <Hidden smDown>
      <Drawer
        variant="persistent"
        open
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.header}>
          <Typography variant="h6" color="inherit">
            DictyAccess
          </Typography>
        </div>
        <List className={classes.list}>{linkList}</List>
      </Drawer>
    </Hidden>
  )
}

export default withStyles(styles)(Sidebar)
