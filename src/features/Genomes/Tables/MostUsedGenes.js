// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

const styles = (theme) => ({
  header: {
    fontSize: "20px",
    color: "#fff",
    padding: "10px",
  },
  table: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    borderRadius: "4px",
  },
})

type Props = {
  /** The data to pass into this table */
  data: Array<Object>,
  /** The Material-UI color palette selected */
  color: Object,
  /** Material-UI styling */
  classes: Object,
}

/**
 * This is a table that shows the most used genes.
 */

const MostUsedGenes = (props: Props) => {
  const { classes, data } = props

  return (
    <Paper>
      <Typography
        className={classes.header}
        style={{ backgroundColor: props.color }}
        variant="title">
        Most Used Genes
      </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Strain Descriptor</TableCell>
            <TableCell>Strain Names</TableCell>
            <TableCell>Strain ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
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

export default withStyles(styles)(MostUsedGenes)
