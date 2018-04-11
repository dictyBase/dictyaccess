// @flow
import React from "react"
import { withStyles } from "material-ui/styles"
import Paper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import { newsStyles as styles } from "./NewsStyles"

const LatestNews = props => {
  const { classes } = props

  return (
    <Paper className={classes.paper}>
      <Typography variant="title" className={classes.header}>
        Latest Dicty News
      </Typography>
      {props.data.map(item => (
        <div className={classes.items} key={item.content}>
          <h4>{item.date}</h4>
          <p>{item.content}</p>
        </div>
      ))}
    </Paper>
  )
}

export default withStyles(styles)(LatestNews)
