// @flow
import React from "react"
import { withStyles } from "material-ui/styles"
import Drawer from "material-ui/Drawer"
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import Typography from "material-ui/Typography"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import FingerprintIcon from "@material-ui/icons/Fingerprint"
import WorkIcon from "@material-ui/icons/Work"
import DataUsageIcon from "@material-ui/icons/DataUsage"
import {
  StyledLink,
  ListStyle,
  // DrawerPaperStyle,
  DrawerHeaderStyle
} from "app/layout/SidebarStyles"

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    width: "240px",
    height: "100%"
  }
})

type Props = {
  /** Material-UI property for customizing CSS */
  classes: Object
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
        paper: classes.drawerPaper
      }}>
      <DrawerHeaderStyle>
        <Typography variant="title" color="inherit">
          DictyAccess
        </Typography>
      </DrawerHeaderStyle>
      <ListStyle>
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
        <ListItem button>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <StyledLink to="/dashboard/dicty-stock-center">
            <ListItemText primary="Dicty Stock Center" />
          </StyledLink>
        </ListItem>
      </ListStyle>
    </Drawer>
  )
}

export default withStyles(styles)(Sidebar)
