// @flow
import React from "react"
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import Paper from "material-ui/Paper"
import { HeaderStyle } from "./ListStyles"

type Props = {
  /** The data to pass into this table */
  data: Array<Object>
}

const LatestPlasmids = (props: Props) => {
  return (
    <Paper>
      <HeaderStyle variant="title">Latest Plasmids</HeaderStyle>
      <List>
        {props.data.map(item => (
          <ListItem>
            <ListItemText key={item.id} primary={item.id} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default LatestPlasmids
