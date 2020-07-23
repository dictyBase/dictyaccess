// @flow
import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import ListSubheader from "@material-ui/core/ListSubheader"
import Typography from "@material-ui/core/Typography"

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginBottom: "5px",
  },
  title: {
    color: theme.palette.primary,
  },
  titleBar: {
    backgroundColor: "rgba(1, 31, 75, 0.7)",
  },
  headerBar: {
    backgroundColor: "#004080",
  },
  headerBarTitle: {
    color: "white",
    fontSize: 20,
  },
  gridList: {
    width: "100%",
    height: 480,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  subhead: {
    color: "white",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
  },
})

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Image data containing title, src, route */
  imageData: Array<{
    /** The route where this image link should go */
    route: string,
    /** The src link for image */
    img: string,
    /** Alt tag for image, also acts as tile bar title */
    title: string,
  }>,
  /** The title to display at the top of the grid */
  title: string,
}

/**
 * Reusable vertical image grid component.
 * Accepts imageData as a prop, then maps through this.
 */

const ImageVerticalGrid = (props: Props) => {
  const { classes, imageData, title } = props

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} cols={1} className={classes.gridList}>
        <GridListTile style={{ height: "auto" }} className={classes.headerBar}>
          <ListSubheader className={classes.headerBarTitle} component="div">
            <Typography variant="h5" gutterBottom className={classes.subhead}>
              {title}
            </Typography>
          </ListSubheader>
        </GridListTile>
        {imageData.map((tile, i) => (
          <GridListTile key={i}>
            <Link to={tile.route}>
              <center>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </center>
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default withStyles(styles)(ImageVerticalGrid)
