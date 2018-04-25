// @flow
import styled from "styled-components"
import Paper from "material-ui/Paper"

// create unique variables to prevent console warnings from React
const getIconBackgroundColor = props => props.bgColor || "#311b92"
const getTextBackgroundColor = props => props.bgColor || "#fff"

export const PaperStyle = styled(Paper)`
  border-radius: 4px;
`

export const IconSpanStyle = styled.span`
  float: left;
  height: 90px;
  width: 90px;
  text-align: center;
  border-radius: 4px;
  background-color: ${getIconBackgroundColor};
`

export const ContentStyle = styled.div`
  padding: 5px 10px;
  margin-left: 90px;
  height: 80px;
  border-radius: 4px;
  background-color: ${getTextBackgroundColor};
`

export const TextSpanStyle = styled.span`
  font-size: 20px;
  color: #757575;
`

export const NumberSpanStyle = styled.span`
  display: block;
  font-size: 2em;
  font-weight: 300;
  line-height: 1.8em;
  color: #424242;
`
