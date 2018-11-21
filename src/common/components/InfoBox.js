// @flow
import React from "react"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  content: {
    padding: "5px 10px",
    marginLeft: "90px",
    height: "80px",
    borderRadius: "4px",
  },
  icon: {
    height: 48,
    width: 48,
    marginTop: 20,
    maxWidth: "100%",
    color: "white",
  },
  title: {
    fontSize: "20px",
    color: "#757575",
  },
  value: {
    display: "block",
    fontSize: "2em",
    fontWeight: 300,
    lineHeight: "1.8em",
    color: "#424242",
  },
  paper: {
    borderRadius: "4px",
  },
  iconSpan: {
    float: "left",
    height: "90px",
    width: "90px",
    textAlign: "center",
    borderRadius: "4px",
  },
})

type Props = {
  /** The title of the info box (i.e. Strains) */
  title: string,
  /** The value to display (i.e. a number) */
  value: string,
  /** The material-ui icon */
  Icon: string,
  /** The background color of the icon container. Can be passed as string or Material-UI object (i.e. deepPurple[300]) */
  iconBackgroundColor?: string | Object,
  /** The background color of the text area in the info box. Can be passed as string or Material-UI object (i.e. deepPurple[300]) */
  textBackgroundColor?: string | Object,
  /** Material-UI styling */
  classes: Object,
}

/**
 * Reusable Material-UI based InfoBox component
 */

const InfoBox = (props: Props) => {
  const {
    title,
    value,
    Icon,
    classes,
    iconBackgroundColor,
    textBackgroundColor,
  } = props

  return (
    <Paper className={classes.paper}>
      <span
        className={classes.iconSpan}
        style={{ backgroundColor: iconBackgroundColor }}>
        <Icon color="inherit" className={classes.icon} />
      </span>

      <div
        className={classes.content}
        style={{ backgroundColor: textBackgroundColor }}>
        <span className={classes.title}>{title}</span>
        <span className={classes.value}>{value}</span>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(InfoBox)
