import React from "react"
import Paper from "material-ui/Paper"
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts"
import chartStyles from "./ChartStyles"

const Orders = props => {
  return (
    <Paper style={chartStyles.paper}>
      <div style={chartStyles.header}>Number of Orders</div>
      <div style={chartStyles.div}>
        <ResponsiveContainer>
          <LineChart width={730} height={250} data={props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  )
}

export default Orders
