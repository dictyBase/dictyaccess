import React from "react"
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Avatar from "@material-ui/core/Avatar"
import { renderCustomizedLabel } from "common/utils/renderCustomizedLabel"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { ChartStyles as styles } from "common/styles/ChartStyles"

/**
 * This is a Browser Usage chart that showcases what browsers are used by Stock Center visitors.
 */

const BrowserUsage = (props) => {
  const { color, classes, data } = props
  return (
    <Paper className={classes.paper}>
      <Typography
        className={classes.header}
        style={{ backgroundColor: color }}
        variant="title">
        Browser Usage
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7} md={7} lg={7}>
          <div className={classes.chart}>
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
                  {props.data.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={5}>
          <div className={classes.legend}>
            <List>
              {data.map((item) => (
                <ListItem key={item.name}>
                  <ListItemIcon style={{ backgroundColor: item.color }}>
                    <Avatar>{item.icon}</Avatar>
                  </ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default withStyles(styles)(BrowserUsage)
