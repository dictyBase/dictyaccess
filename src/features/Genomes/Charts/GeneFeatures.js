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
 * This is a bar chart that shows the number of genes with certain features (i.e. phenotypes, RNA expressions, etc).
 */

const GeneFeatures = (props: Props) => {
  return (
    <PaperStyle>
      <HeaderStyle style={{ backgroundColor: props.color }} variant="title">
        Number of Genes by Feature
      </HeaderStyle>
      <ChartWrapper>
        <ResponsiveContainer>
          <BarChart width={730} height={250} data={props.data}>
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

export default GeneFeatures
