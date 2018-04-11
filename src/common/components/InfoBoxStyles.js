// @flow
import styled from "styled-components"
import Icon from "material-ui/Icon"

export const IconSpanStyle = styled.span`
  float: left;
  height: 90px;
  width: 90px;
  text-align: center;
  background-color: #4db6ac; /* make this a passed prop */
`

// fix this to resize icon properly
export const IconContainer = styled(Icon)`
  height: 48px;
  width: 48px;
  margin-top: 20px;
  max-width: 100%;
`

export const ContentStyle = styled.div`
  padding: 5px 10px;
  margin-left: 90px;
  height: 80px;
`

export const TextSpanStyle = styled.span`
  font-size: 20px;
  color: #757575;
`

export const NumberSpanStyle = styled.span`
  display: block;
  font-size: 18px;
  color: #424242;
`
