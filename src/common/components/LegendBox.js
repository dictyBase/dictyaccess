import React from "react"
import Paper from "@material-ui/core/Paper"

const styles = {
  paper: {
    textAlign: "center",
    padding: "5px",
    marginBottom: "10px",
  },
}

const LegendBox = props => {
  return (
    <div>
      <Paper style={styles.paper}>
        <h1>Legend</h1>
        {props.description}
      </Paper>
    </div>
  )
}

export default LegendBox
