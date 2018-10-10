// @flow
import React from "react"
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { ChartStyles as styles } from "common/styles/styles"

type Props = {
  /** Data array for chart */
  data: Array<Object>,
  /** The Material-UI color palette selected */
  color: Object,
  /** Material-UI styling */
  classes: Object,
}

/**
 * This is a chart that shows the number of Stock Center orders by month.
 */

const Orders = (props: Props) => {
  const { color, classes, data } = props
  return (
    <Paper className={classes.paper}>
      <Typography
        className={classes.header}
        style={{ backgroundColor: color }}
        variant="title">
        Number of Orders
      </Typography>
      <div className={classes.chart}>
        <ResponsiveContainer>
          <LineChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="orders" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(Orders)
