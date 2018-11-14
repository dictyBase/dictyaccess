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
import chrNameExtender from "./utils/chrNameExtender"

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
 * NOTE: THIS COMPONENT IS NO LONGER USED, IT IS HERE AS A REFERENCE.
 */

const SvgVerticalGrid = (props: Props) => {
  const {
    classes,
    birdseye: { genes, chromosomes },
  } = props

  const tile = (id, route, title, key) => (
    <GridListTile key={key}>
      <Link to={route}>
        <center>
          <MiniCircos
            genes={genes.data.filter(item => item.attributes.block_id === id)}
            chr={chromosomes.data.filter(item => item.id === id)}
            name={id}
            svgWidth="220"
            svgHeight="220"
          />
          <GridListTileBar
            title={title}
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
          />
        </center>
      </Link>
    </GridListTile>
  )

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
        {chromosomes.data.map((item, i) =>
          tile(
            item.id,
            `/birdseye/genes/${item.attributes.name}`,
            chrNameExtender(item.attributes.name),
            i,
          ),
        )}
      </GridList>
    </div>
  )
}

const mapStateToProps = ({ birdseye }) => ({ birdseye })

export default connect(
  mapStateToProps,
  null,
)(withStyles(styles)(SvgVerticalGrid))
