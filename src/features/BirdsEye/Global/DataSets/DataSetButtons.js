// @flow
import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

const styles = theme => ({
  button: {
    width: "100%",
    marginBottom: "5px",
    padding: "25px",
    fontSize: "16px",
    color: "#e5e5e5",
    textTransform: "none",
    backgroundColor: "#004080",
    "&:hover": {
      backgroundColor: "#cce6ff",
      color: "#333232",
    },
  },
  altButton: {
    width: "100%",
    marginBottom: "5px",
    padding: "25px",
    fontSize: "16px",
    textTransform: "none",
    backgroundColor: "#80c1ff",
    color: "#333232",
    "&:hover": {
      backgroundColor: "#cce6ff",
    },
  },
  grid: {
    padding: "8px 16px 8px 16px",
  },
  link: {
    textDecoration: "none",
  },
})

const DataSetButtons = ({ classes }) => {
  const buttonList = (
    <div>
      <Link className={classes.link} to="/birdseye/genes">
        <Button
          className={classes.button}
          size="small"
          variant="contained"
          color="primary">
          Genes
        </Button>
      </Link>
      <Link className={classes.link} to="/birdseye/pseudogenes">
        <Button
          className={classes.button}
          size="small"
          variant="contained"
          color="primary">
          Pseudogenes
        </Button>
      </Link>
    </div>
  )
  return (
    <Grid container justify="center" className={classes.grid}>
      <Grid item xs={12}>
        {buttonList}
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(DataSetButtons)
