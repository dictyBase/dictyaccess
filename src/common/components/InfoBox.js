// @flow
import React from "react"
import Paper from "material-ui/Paper"
import {
  IconSpanStyle,
  // IconContainer,
  ContentStyle,
  TextSpanStyle,
  NumberSpanStyle,
  PaperStyle
} from "./InfoBoxStyles"

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
  textBackgroundColor?: string | Object
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
  const { title, value, Icon, iconBackgroundColor, textBackgroundColor } = props

  return (
    <PaperStyle>
      <IconSpanStyle bgColor={iconBackgroundColor}>
        <Icon color="inherit" style={styles.icon} />
      </IconSpanStyle>

      <ContentStyle bgColor={textBackgroundColor}>
        <TextSpanStyle>{title}</TextSpanStyle>
        <NumberSpanStyle>{value}</NumberSpanStyle>
      </ContentStyle>
    </PaperStyle>
  )
}

export default InfoBox
