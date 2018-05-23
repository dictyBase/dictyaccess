// @flow
import React from "react"
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Avatar from "@material-ui/core/Avatar"
import { renderCustomizedLabel } from "common/utils/renderCustomizedLabel"
import {
  PaperStyle,
  HeaderStyle,
  ChartWrapper,
  LegendStyle
} from "common/styles/ChartStyles"

type Props = {
  /** Data array for pie chart */
  data: Array<Object>,
  /** The Material-UI color palette selected */
  color: Object
}

/**
 * This is a Browser Usage chart that showcases what browsers are used by Stock Center visitors.
 */

const BrowserUsage = (props: Props) => {
  return (
    <PaperStyle>
      <HeaderStyle style={{ backgroundColor: props.color }} variant="title">
        Browser Usage
      </HeaderStyle>
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
