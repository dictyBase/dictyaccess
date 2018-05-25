import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import Dropdown from "common/components/Dropdown"

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

const dropDownData = [
  {
    name: "Gene Models",
  },
  {
    name: "Expressions",
  },
  {
    name: "GWDI Mutants",
  },
]

const ImageGridDisplay = props => {
  const { classes, tileData, handleClick } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={2}>
          <Dropdown dropDownData={dropDownData} />
        </Grid>
        <Grid item xs={10}>
          <GridList
            cellHeight={240}
            cols={4}
            className={classes.gridList}
            onClick={handleClick}>
            {tileData.map(tile => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar title={tile.title} />
              </GridListTile>
            ))}
            {tileData.map(tile => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar title={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(ImageGridDisplay)
