// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Typography from "@material-ui/core/Typography"
// import icons
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import FingerprintIcon from "@material-ui/icons/Fingerprint"
import InsertChartIcon from "@material-ui/icons/InsertChart"
import GpsFixedIcon from "@material-ui/icons/GpsFixed"
import PieChartIcon from "@material-ui/icons/PieChart"
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify"
import {
  StyledLink,
  ListStyle,
  // DrawerPaperStyle,
  DrawerHeaderStyle,
} from "app/layout/SidebarStyles"

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    width: "240px",
    height: "100%",
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
      <DrawerHeaderStyle>
        <Typography variant="title" color="inherit">
          DictyAccess
        </Typography>
      </DrawerHeaderStyle>
      <ListItem button>
        <ListItemIcon>
          <GpsFixedIcon />
        </ListItemIcon>
        <StyledLink
          to="/dashboard/birdseye"
          activeStyle={{
            fontWeight: "bold",
            fontFamily: "Roboto",
            color: "rgb(183, 28, 28)",
          }}>
          Bird's Eye
        </StyledLink>
      </ListItem>
      <ListStyle>
        <ListItem button>
          <ListItemIcon>
            <InsertChartIcon />
          </ListItemIcon>
          <StyledLink
            to="/dashboard/genomes"
            activeStyle={{
              fontWeight: "bold",
              fontFamily: "Roboto",
              color: "rgb(251, 140, 0)",
            }}>
            Genome Stats
          </StyledLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FingerprintIcon />
          </ListItemIcon>
          <StyledLink
            to="/dashboard/curation"
            activeStyle={{
              fontWeight: "bold",
              fontFamily: "Roboto",
              color: "rgb(183, 28, 28)",
            }}>
            Annotations
          </StyledLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FormatAlignJustifyIcon />
          </ListItemIcon>
          <StyledLink
            to="/dashboard/phylogeny"
            activeStyle={{
              fontWeight: "bold",
              fontFamily: "Roboto",
              color: "rgb(183, 28, 28)",
            }}>
            Phylogeny
          </StyledLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PieChartIcon />
          </ListItemIcon>
          <StyledLink
            to="/dashboard/analytics"
            activeStyle={{
              fontWeight: "bold",
              fontFamily: "Roboto",
              color: "rgb(30, 136, 229)",
            }}>
            Analytics
          </StyledLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <StyledLink
            to="/dashboard/dicty-stock-center"
            activeStyle={{
              fontWeight: "bold",
              fontFamily: "Roboto",
              color: "#4f5aae",
            }}>
            Dicty Stock Center
          </StyledLink>
        </ListItem>
      </ListStyle>
    </Drawer>
  )
}

export default withStyles(styles)(Sidebar)
