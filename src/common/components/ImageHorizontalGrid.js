// @flow
import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"

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
}

const ImageHorizontalGrid = (props: Props) => {
  const { classes, imageData } = props

  return (
    <div className={classes.root}>
      <GridList cellHeight={270} cols={3} className={classes.gridList}>
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

export default withStyles(styles)(ImageHorizontalGrid)
