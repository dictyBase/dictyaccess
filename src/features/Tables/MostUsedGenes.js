// @flow
import React from "react"
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table"
import Typography from "material-ui/Typography"
import Paper from "material-ui/Paper"
import data from "common/data/data"
import { tableStyles } from "./TableStyles"

type Props = {
  /** The data to pass into this table */
  data: Object
}

const MostUsedGenes = (props: Props) => {
  return (
    <Paper>
      <Typography variant="title" style={tableStyles.header}>
        Most Used Genes
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Strain Descriptor</TableCell>
            <TableCell>Strain Names</TableCell>
            <TableCell>Strain ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.tables.mostUsedGenes.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.descriptor}</TableCell>
              <TableCell>{item.names}</TableCell>
              <TableCell>{item.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default MostUsedGenes
