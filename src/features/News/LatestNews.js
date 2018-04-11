// @flow
import React from "react"
import Paper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import { newsStyles } from "./NewsStyles"

const LatestNews = props => {
  return (
    <Paper style={newsStyles.paper}>
      <Typography variant="title" style={newsStyles.header}>
        Latest Dicty News
      </Typography>
      {props.data.map(item => (
        <div style={newsStyles.items}>
          <h4>{item.date}</h4>
          <p>{item.content}</p>
        </div>
      ))}
    </Paper>
  )
}

export default LatestNews
