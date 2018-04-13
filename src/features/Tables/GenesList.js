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

const GenesList = (props: Props) => {
  return (
    <Paper>
      <HeaderStyle variant="title">List of Genes</HeaderStyle>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Gene Name</TableCell>
            <TableCell>Gene ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default GenesList
