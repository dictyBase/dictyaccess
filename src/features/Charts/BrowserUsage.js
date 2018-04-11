import React from "react"
import Grid from "material-ui/Grid"
import Paper from "material-ui/Paper"
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import chartStyles from "./ChartStyles"

const BrowserUsage = props => {
  return (
    <Paper style={chartStyles.paper}>
      <div style={chartStyles.header}>Browser Usage</div>
      <Grid container>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <div style={chartStyles.div}>
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
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <div style={chartStyles.legend}>
            <div style={chartStyles.legend}>
              <List>
                {props.data.map(item => (
                  <ListItem key={item.name}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default BrowserUsage
