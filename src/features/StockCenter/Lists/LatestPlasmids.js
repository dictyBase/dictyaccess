// @flow
import React from "react"
import List, { ListItem, ListItemText } from "material-ui/List"
import Paper from "material-ui/Paper"
import { HeaderStyle } from "common/styles/ListStyles"

type Props = {
  /** The data to pass into this table */
  data: Array<Object>,
  /** The Material-UI color palette selected */
  color: Object
}

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
