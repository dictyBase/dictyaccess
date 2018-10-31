import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import ListSubheader from "@material-ui/core/ListSubheader"
import Typography from "@material-ui/core/Typography"

import MiniCircos from "./MiniCircos"

const styles = (theme: Object) => ({
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
    backgroundColor: "#004080",
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
}

/**
 * The vertical grid of SVG thumbnails that displays next to the Circos graph.
 */

const SvgVerticalGrid = (props: Props) => {
  const {
    classes,
    birdseye: { genes, chromosomes },
  } = props

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} cols={1} className={classes.gridList}>
        <GridListTile style={{ height: "auto" }} className={classes.headerBar}>
          <ListSubheader className={classes.headerBarTitle} component="div">
            <Typography
              variant="headline"
              gutterBottom
              className={classes.subhead}>
              Other Chromosomes
            </Typography>
          </ListSubheader>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr1">
            <center>
              <MiniCircos
                genes={genes.data.filter(
                  item => item.attributes.block_id === "DDB0232428",
                )}
                chr={chromosomes.data[0]}
                name="chr1"
                svgWidth="200"
                svgHeight="200"
              />
              <GridListTileBar
                title="Chromosome 1"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr2">
            <center>
              <MiniCircos
                genes={genes.data.filter(
                  item => item.attributes.block_id === "DDB0232429",
                )}
                chr={chromosomes.data[1]}
                name="chr2"
                svgWidth="200"
                svgHeight="200"
              />
              <GridListTileBar
                title="Chromosome 2"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </center>
          </Link>
        </GridListTile>

        <GridListTile>
          <Link to="/birdseye/genemodels/chr3">
            <center>
              <MiniCircos
                genes={genes.data.filter(
                  item => item.attributes.block_id === "DDB0232430",
                )}
                chr={chromosomes.data[2]}
                name="chr3"
                svgWidth="200"
                svgHeight="200"
              />
              <GridListTileBar
                title="Chromosome 3"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr4">
            <center>
              <MiniCircos
                genes={genes.data.filter(
                  item => item.attributes.block_id === "DDB0232431",
                )}
                chr={chromosomes.data[3]}
                name="chr4"
                svgWidth="200"
                svgHeight="200"
              />
              <GridListTileBar
                title="Chromosome 4"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr5">
            <center>
              <MiniCircos
                genes={genes.data.filter(
                  item => item.attributes.block_id === "DDB0232432",
                )}
                chr={chromosomes.data[4]}
                name="chr5"
                svgWidth="200"
                svgHeight="200"
              />
              <GridListTileBar
                title="Chromosome 5"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </center>
          </Link>
        </GridListTile>
        <GridListTile>
          <Link to="/birdseye/genemodels/chr6">
            <center>
              <MiniCircos
                genes={genes.data.filter(
                  item => item.attributes.block_id === "DDB0232433",
                )}
                chr={chromosomes.data[5]}
                name="chr6"
                svgWidth="200"
                svgHeight="200"
              />
              <GridListTileBar
                title="Chromosome 6"
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </center>
          </Link>
        </GridListTile>
      </GridList>
    </div>
  )
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

export default connect(
  mapStateToProps,
  null,
)(withStyles(styles)(SvgVerticalGrid))
