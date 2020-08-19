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
 * This is a table that provides a full list of proteins.
 */

const ProteinsList = (props) => {
  const { classes } = props
  return (
    <Paper>
      <Typography
        className={classes.header}
        style={{ backgroundColor: props.color }}
        variant="title">
        List of Proteins
      </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Protein ID</TableCell>
            <TableCell>Protein Length</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((item) => (
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

export default withStyles(styles)(ProteinsList)
