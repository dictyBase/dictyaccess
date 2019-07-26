// @flow
import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import withWidth from "@material-ui/core/withWidth"

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginBottom: "5px",
  },
  gridList: {
    width: "90%",
    height: "100%",
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
  /** Width of page provided by Material-UI WithWidth HOC */
  width: string,
}

/**
 * Reusable horizontal image grid component.
 * Accepts imageData as a prop, then maps through this.
 */

const ImageHorizontalGrid = (props: Props) => {
  const { classes, imageData, width } = props

  const getGridListCols = () => {
    switch (width) {
      case "xs":
        return 1
      case "sm":
        return 1
      case "md":
        return 2
      default:
        return 3
    }
  }

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={270}
        cols={getGridListCols()}
        className={classes.gridList}>
        {imageData.map((tile, i) => (
          <GridListTile key={i}>
            <Link to={tile.route}>
              <center>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar title={tile.title} />
              </center>
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default withWidth()(withStyles(styles)(ImageHorizontalGrid))
