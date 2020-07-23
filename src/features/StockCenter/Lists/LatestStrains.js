// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { ListStyles as styles } from "common/styles/ListStyles"

type Props = {
  /** The data to pass into this table */
  data: Array<Object>,
  /** The Material-UI color palette selected */
  color: Object,
  /** Material-UI styling */
  classes: Object,
}

/**
 * This is a list of the latest strains.
 */

const LatestStrains = (props: Props) => {
  const { color, data, classes } = props
  return (
    <Paper>
      <Typography
        className={classes.header}
        style={{ backgroundColor: color }}
        variant="title">
        Latest Strains
      </Typography>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            <ListItemText key={item.id} primary={item.id} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default withStyles(styles)(LatestStrains)
