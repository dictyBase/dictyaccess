// @flow
import React from "react"
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import Grid from "material-ui/Grid"
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import Avatar from "material-ui/Avatar"
import { renderCustomizedLabel } from "common/utils/renderCustomizedLabel"
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
        <Grid item xs={12} sm={7} md={7} lg={7}>
          <ChartWrapper>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={renderCustomizedLabel}
                  labelLine={false}
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
        <Grid item xs={12} sm={5} md={5} lg={5}>
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
