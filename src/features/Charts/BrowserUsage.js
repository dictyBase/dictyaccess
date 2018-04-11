// @flow
import React from "react"
import Grid from "material-ui/Grid"
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import Avatar from "material-ui/Avatar"
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import {
  PaperStyle,
  HeaderStyle,
  ChartWrapper,
  LegendStyle
} from "./ChartStyles"

type Props = {
  /** Data object for pie chart */
  data: Object
}

const BrowserUsage = (props: Props) => {
  return (
    <PaperStyle>
      <HeaderStyle variant="title">Browser Usage</HeaderStyle>
      <Grid container>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <ChartWrapper>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  innerRadius={70}
                  outerRadius={110}
                  data={props.data}
                  dataKey="value"
                  fill="#8884d8">
                  {props.data.map(item => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <LegendStyle>
            <List>
              {props.data.map(item => (
                <ListItem key={item.name}>
                  <ListItemIcon style={{ backgroundColor: item.color }}>
                    <Avatar>{item.icon}</Avatar>
                  </ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </LegendStyle>
        </Grid>
      </Grid>
    </PaperStyle>
  )
}

export default BrowserUsage
