// @flow
import React from "react"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"

import MiniCircos from "features/BirdsEye/Circos/MiniCircos"
import chrNameExtender from "./utils/chrNameExtender"

const styles = (theme: Object) => ({
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
  /** Gene data to display */
  genes: Object,
  /** Chromosomes data */
  chromosomes: Object,
}

/**
 * This is the chromosome image grid display that appears on the main Birdseye Dashboard page.
 */

const ChromosomeImageGridDisplay = (props: Props) => {
  const { classes, chromosomes, genes } = props

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
      <GridList cellHeight={270} cols={3} className={classes.gridList}>
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

export default withStyles(styles)(ChromosomeImageGridDisplay)
