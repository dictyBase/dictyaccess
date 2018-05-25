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

const ImageGridDisplay = props => {
  const { classes, tileData, handleClick } = props

  return (
    <div className={classes.root}>
      <GridList cellHeight={240} cols={4} className={classes.gridList}>
        {tileData.map((tile, i) => (
          <GridListTile key={i} onClick={() => handleClick(tile.component)}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar title={tile.title} />
          </GridListTile>
        ))}
        {tileData.map((tile, i) => (
          <GridListTile key={i}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar title={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default withStyles(styles)(ImageGridDisplay)
