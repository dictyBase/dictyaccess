// @flow
import React from "react"
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table"
import Paper from "material-ui/Paper"
import { HeaderStyle } from "./TableStyles"

type Props = {
  /** The data to pass into this table */
  data: Array<Object>
}

const ProteinsList = (props: Props) => {
  return (
    <Paper>
      <HeaderStyle variant="title">List of Proteins</HeaderStyle>
      <Table>
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
      </Table>
    </Paper>
  )
}

export default ProteinsList
