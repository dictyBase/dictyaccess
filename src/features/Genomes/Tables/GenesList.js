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

/**
 * This is a table that shows a list of genes.
 */

const GenesList = (props) => {
  const { classes, data } = props

  return (
    <Paper>
      <Typography
        className={classes.header}
        style={{ backgroundColor: props.color }}
        variant="title">
        List of Genes
      </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Gene Name</TableCell>
            <TableCell>Gene ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
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

export default withStyles(styles)(GenesList)
