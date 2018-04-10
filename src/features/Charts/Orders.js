import React from "react"
import Paper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import { white } from "material-ui/colors"
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

const Orders = props => {
  const styles = {
    paper: {
      backgroundColor: "#fff",
      height: "100%"
    },
    div: {
      height: 250,
      padding: "5px 15px 0 15px"
    },
    header: {
      fontSize: 24,
      fontWeight: Typography.fontWeightLight,
      color: white,
      backgroundColor: "#e3f2fd",
      padding: 10
    }
  }

  return (
    <Paper style={styles.paper}>
      <div style={styles.header}>Number of Orders</div>
      <div style={styles.div}>
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
