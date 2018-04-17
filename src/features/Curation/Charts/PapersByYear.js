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
 * This is a bar chart that shows the number of papers published by year since 1990.
 */

const PapersByYear = (props: Props) => {
  return (
    <PaperStyle>
      <HeaderStyle style={{ backgroundColor: props.color }} variant="title">
        Number of Papers Published By Year
      </HeaderStyle>
      <ChartWrapper>
        <ResponsiveContainer>
          <BarChart width={730} height={250} data={props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#E57373" />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </PaperStyle>
  )
}

export default PapersByYear
