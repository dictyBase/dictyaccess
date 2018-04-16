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
  data: Object
}

const LatestAnnotations = (props: Props) => {
  return (
    <Paper>
      <HeaderStyle variant="title">Latest Annotations</HeaderStyle>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Genes</TableCell>
            <TableCell>Papers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {props.data.genes.map(item => <TableCell>{item}</TableCell>)}
            {props.data.papers.map(item => <TableCell>{item}</TableCell>)}
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
}

export default LatestAnnotations
