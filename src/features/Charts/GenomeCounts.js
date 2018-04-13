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
import { PaperStyle, HeaderStyle, ChartWrapper } from "./ChartStyles"

type Props = {
  /** Data array for chart */
  data: Array<Object>
}

const GenomeCounts = (props: Props) => {
  const { data } = props

  return (
    <PaperStyle>
      <HeaderStyle variant="title">Number of Genomes</HeaderStyle>
      <ChartWrapper>
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
      </ChartWrapper>
    </PaperStyle>
  )
}

export default GenomeCounts
