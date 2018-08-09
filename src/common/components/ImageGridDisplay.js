// @flow
import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"

import MiniCircos from "features/BirdsEye/Circos/MiniCircos"
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
  },
  gridList: {
    width: "90%",
    height: "100%",
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
  /** Material-UI classes */
  classes: Object,
  /** Array of objects with image data information */
  imageData: Array<Object>,
  /** Click handler that accepts component as parameter */
  handleClick: Function,
}

const ImageGridDisplay = (props: Props) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} cols={3} className={classes.gridList}>
        {/* {imageData.map((tile, i) => (
          <GridListTile key={i} onClick={() => handleClick(tile.route)}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar title={tile.title} />
          </GridListTile>
        ))} */}
        <GridListTile>
          <Link to="/birdseye/genemodels/chr1">
            <center>
              <MiniCircos
                data={chr1}
                chr={chromosomes.data[0]}
                name="chr1"
                svgWidth="220"
                svgHeight="220"
              />
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
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr2">
            <center>
              <MiniCircos
                data={chr2}
                chr={chromosomes.data[1]}
                name="chr2"
                svgWidth="220"
                svgHeight="220"
              />
              <GridListTileBar
                title="Chromosome 2"
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
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr3">
            <center>
              <MiniCircos
                data={chr3}
                chr={chromosomes.data[2]}
                name="chr3"
                svgWidth="220"
                svgHeight="220"
              />
              <GridListTileBar
                title="Chromosome 3"
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
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr4">
            <center>
              <MiniCircos
                data={chr4}
                chr={chromosomes.data[3]}
                name="chr4"
                svgWidth="220"
                svgHeight="220"
              />
              <GridListTileBar
                title="Chromosome 4"
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
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr5">
            <center>
              <MiniCircos
                data={chr5}
                chr={chromosomes.data[4]}
                name="chr5"
                svgWidth="220"
                svgHeight="220"
              />
              <GridListTileBar
                title="Chromosome 5"
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
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr6">
            <center>
              <MiniCircos
                data={chr6}
                chr={chromosomes.data[5]}
                name="chr6"
                svgWidth="220"
                svgHeight="220"
              />
              <GridListTileBar
                title="Chromosome 6"
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
            </center>
          </Link>
        </GridListTile>
      </GridList>
    </div>
  )
}

export default withStyles(styles)(ImageGridDisplay)
