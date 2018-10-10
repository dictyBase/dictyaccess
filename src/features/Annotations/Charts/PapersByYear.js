// @flow
import React from "react"
import {
  BarChart,
  Bar,
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
import { ChartStyles as styles } from "common/styles/ChartStyles"

type Props = {
  /** Data array for chart */
  data: Array<Object>,
  /** The Material-UI color palette selected */
  color: Object,
  /** Material-UI styling */
  classes: Object,
}

/**
 * This is a bar chart that shows the number of papers published by year since 1990.
 */

const PapersByYear = (props: Props) => {
  const { color, classes, data } = props
  return (
    <Paper className={classes.paper}>
      <Typography
        className={classes.header}
        style={{ backgroundColor: color }}
        variant="title">
        Number of Papers Published By Year
      </Typography>
      <div className={classes.chart}>
        <ResponsiveContainer width="100%">
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#E57373" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(PapersByYear)
