// @flow
import React from "react"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { HeaderStyle, ResponsiveTable } from "common/styles/TableStyles"

type Props = {
  /** The data to pass into this table */
  data: Array<Object>,
  /** The Material-UI color palette selected */
  color: Object
}

/**
 * This is a table that provides a full list of proteins.
 */

const ProteinsList = (props: Props) => {
  return (
    <Paper>
      <HeaderStyle style={{ backgroundColor: props.color }} variant="title">
        List of Proteins
      </HeaderStyle>
      <ResponsiveTable>
        <TableHead>
          <TableRow>
            <TableCell>Protein ID</TableCell>
            <TableCell>Protein Length</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </ResponsiveTable>
    </Paper>
  )
}

export default ProteinsList
