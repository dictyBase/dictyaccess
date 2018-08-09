import React from "react"
// import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import ListSubheader from "@material-ui/core/ListSubheader"
import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"
import Typography from "@material-ui/core/Typography"

import MiniCircos from "./MiniCircos"
import {
  chr1,
  chr2,
  chr3,
  chr4,
  chr5,
  chr6,
} from "features/BirdsEye/Circos/geneArrays"
import chromosomes from "common/data/circos/chromosomes.json"

const styles = theme => ({
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
  headerBar: {
    backgroundColor: "#011f4b",
  },
  headerBarTitle: {
    color: "white",
    fontSize: 20,
  },
  titleBar: {
    backgroundColor: "rgba(1, 31, 75, 0.7)",
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

const ImageVerticalGrid = props => {
  const { classes, imageData, handleClick } = props
  return (
    <div className={classes.root}>
      <GridList cellHeight={200} cols={2} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={2}
          style={{ height: "auto" }}
          className={classes.headerBar}>
          <ListSubheader className={classes.headerBarTitle} component="div">
            <Typography
              variant="headline"
              gutterBottom
              className={classes.subhead}>
              Other Chromosomes
            </Typography>
          </ListSubheader>
        </GridListTile>
        {/* {imageData.map((tile, i) => (
          // <Link to="/">
          <GridListTile key={i} onClick={() => handleClick(tile.route)}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          // </Link>
        ))} */}
        <GridListTile>
          <MiniCircos data={chr1} chr={chromosomes.data[0]} />
          <GridListTileBar
            title="Chromosome 1"
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
            actionIcon={
              <IconButton className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      </GridList>
    </div>
  )
}

export default withStyles(styles)(ImageVerticalGrid)
