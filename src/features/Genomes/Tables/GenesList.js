// @flow
import React from "react"
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table"
import Paper from "material-ui/Paper"
import { HeaderStyle } from "common/styles/TableStyles"

type Props = {
  /** The data to pass into this table */
  data: Array<Object>,
  /** The Material-UI color palette selected */
  color: Object
}

/**
 * This is a table that shows a list of genes.
 */

const GenesList = (props: Props) => {
  return (
    <Paper>
      <HeaderStyle style={{ backgroundColor: props.color }} variant="title">
        List of Genes
      </HeaderStyle>
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
