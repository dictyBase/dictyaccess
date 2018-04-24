// @flow
import React from "react"
import List, { ListItem, ListItemText } from "material-ui/List"
import Paper from "material-ui/Paper"
import { HeaderStyle } from "common/styles/TableStyles"

type Props = {
  /** The data to pass into this table */
  data: Array<string>,
  /** The Material-UI color palette selected */
  color: Object
}

/**
 * This shows the most recent annotations for genes and papers.
 */

const LatestPaperAnnotations = (props: Props) => {
  return (
    <Paper>
      <HeaderStyle style={{ backgroundColor: props.color }} variant="title">
        Latest Annotations
      </HeaderStyle>
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

export default LatestPaperAnnotations
