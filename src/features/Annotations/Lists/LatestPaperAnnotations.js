// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({
  header: {
    fontSize: "20px",
    color: "#fff",
    padding: "10px",
  },
})

type Props = {
  /** The data to pass into this table */
  data: Array<string>,
  /** The Material-UI color palette selected */
  color: Object,
  /** Material-UI styling */
  classes: Object,
}

/**
 * This shows the most recent annotations for genes and papers.
 */

const LatestPaperAnnotations = (props: Props) => {
  const { classes } = props
  return (
    <Paper>
      <Typography
        className={classes.header}
        style={{ backgroundColor: props.color }}
        variant="title">
        Latest Annotations
      </Typography>
      <List>
        {props.data.map(item => (
          <ListItem key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default withStyles(styles)(LatestPaperAnnotations)
