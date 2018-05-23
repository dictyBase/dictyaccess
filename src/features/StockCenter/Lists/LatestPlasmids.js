// @flow
import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Paper from "@material-ui/core/Paper"
import { HeaderStyle } from "common/styles/ListStyles"

type Props = {
  /** The data to pass into this table */
  data: Array<Object>,
  /** The Material-UI color palette selected */
  color: Object
}

/**
 * This is a list of the latest plasmids.
 */

const LatestPlasmids = (props: Props) => {
  return (
    <Paper>
      <HeaderStyle style={{ backgroundColor: props.color }} variant="title">
        Latest Plasmids
      </HeaderStyle>
      <List>
        {props.data.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.id} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default LatestPlasmids
