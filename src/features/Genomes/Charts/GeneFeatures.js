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
 * This is a bar chart that shows the number of genes with certain features (i.e. phenotypes, RNA expressions, etc).
 */

const GeneFeatures = (props: Props) => {
  const { color, classes, data } = props
  return (
    <Paper className={classes.paper}>
      <Typography
        className={classes.header}
        style={{ backgroundColor: color }}
        variant="title">
        Number of Genes by Feature
      </Typography>
      <div className={classes.chart}>
        <ResponsiveContainer>
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(GeneFeatures)
