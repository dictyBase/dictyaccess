// @flow
import React from "react"
import { NavLink } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const models = [
  {
    name: "Gene Models",
    route: "/birdseye/genes",
  },
]

const styles = theme => ({
  button: {
    marginBottom: "5px",
    padding: "10px",
    fontSize: "16px",
    color: "#e5e5e5",
    "&:hover": {
      backgroundColor: "#f4f4f4",
      borderRadius: "3px",
      color: "#333232",
    },
  },
  grid: {
    padding: "8px 16px 8px 16px",
  },
  link: {
    textDecoration: "none",
    color: "#020202",
  },
})

/**
 * The set of links for the different gene model displays.
 */

const DataSetLinks = ({ classes }) => {
  const linkList = models.map((item, index) => (
    <div key={index} className={classes.button}>
      <NavLink
        className={classes.link}
        to={item.route}
        activeStyle={{
          fontWeight: "bold",
          fontSize: "20px",
          color: "#011f4b",
        }}>
        {item.name}
      </NavLink>
    </div>
  ))

  return (
    <Grid container justify="center" className={classes.grid}>
      <Grid item xs={12}>
        {linkList}
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(DataSetLinks)
