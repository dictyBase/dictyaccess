// @flow
import React from "react"
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
  },
  gridList: {
    width: "90%",
    height: "100%",
  },
})

type Props = {
  /** Material-UI classes */
  classes: Object,
  /** Array of objects with image data information */
  imageData: Array<Object>,
  /** Click handler that accepts component as parameter */
  handleClick: Function,
}

const ImageGridDisplay = (props: Props) => {
  const { classes, imageData, handleClick } = props

  return (
    <div className={classes.root}>
      <GridList cellHeight={350} cols={3} className={classes.gridList}>
        {imageData.map((tile, i) => (
          <GridListTile key={i} onClick={() => handleClick(tile.component)}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar title={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default withStyles(styles)(ImageGridDisplay)
