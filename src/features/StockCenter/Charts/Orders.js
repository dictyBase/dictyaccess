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
  Legend
} from "recharts"
import {
  PaperStyle,
  HeaderStyle,
  ChartWrapper
} from "common/styles/ChartStyles"

type Props = {
  /** Data array for chart */
  data: Array<Object>,
  /** The Material-UI color palette selected */
  color: Object
}

/**
 * This is a chart that shows the number of Stock Center orders by month.
 */

const Orders = (props: Props) => {
  return (
    <PaperStyle>
      <HeaderStyle style={{ backgroundColor: props.color }} variant="title">
        Number of Orders
      </HeaderStyle>
      <ChartWrapper>
        <ResponsiveContainer>
          <LineChart width={730} height={250} data={props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="orders" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </PaperStyle>
  )
}

export default Orders
