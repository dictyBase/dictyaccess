// @flow
import React from "react"
import Paper from "material-ui/Paper"
import {
  IconSpanStyle,
  // IconContainer,
  ContentStyle,
  TextSpanStyle,
  NumberSpanStyle
} from "./InfoBoxStyles"

type Props = {
  /** The color of the icon container */
  color: string,
  /** The title of the info box (i.e. Strains) */
  title: string,
  /** The value to display (i.e. a number) */
  value: string,
  /** The material-ui icon */
  Icon: string,
  /** The background color of the icon container */
  bgColor: string
}

const styles = {
  icon: {
    height: 48,
    width: 48,
    marginTop: 20,
    maxWidth: "100%",
    color: "white"
  }
}

const InfoBox = (props: Props) => {
  const { title, value, Icon, bgColor } = props

  return (
    <Paper>
      <IconSpanStyle bgColor={bgColor}>
        <Icon color="inherit" style={styles.icon} />
      </IconSpanStyle>

      <ContentStyle>
        <TextSpanStyle>{title}</TextSpanStyle>
        <NumberSpanStyle>{value}</NumberSpanStyle>
      </ContentStyle>
    </Paper>
  )
}

export default InfoBox
