// @flow
import React from "react"
import Paper from "material-ui/Paper"
import { grey } from "material-ui/colors"

type Props = {
  /** The color of the icon container */
  color: string,
  /** The title of the info box (i.e. Strains) */
  title: string,
  /** The value to display (i.e. a number) */
  value: string,
  /** The material-ui icon */
  Icon: string
}

const InfoBox = (props: Props) => {
  const { color, title, value, Icon } = props

  const styles = {
    content: {
      padding: "5px 10px",
      marginLeft: 90,
      height: 80
    },
    number: {
      display: "block",
      fontSize: 18,
      color: grey[800]
    },
    text: {
      fontSize: 20,
      color: grey[800]
    },
    iconSpan: {
      float: "left",
      height: 90,
      width: 90,
      textAlign: "center",
      backgroundColor: color
    },
    icon: {
      height: 48,
      width: 48,
      marginTop: 20,
      maxWidth: "100%"
    }
  }
  return (
    <Paper>
      <span style={styles.iconSpan}>
        <Icon color="inherit" style={styles.icon} />
      </span>

      <div style={styles.content}>
        <span style={styles.text}>{title}</span>
        <span style={styles.number}>{value}</span>
      </div>
    </Paper>
  )
}

export default InfoBox
