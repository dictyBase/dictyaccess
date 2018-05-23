// @flow
import styled from "styled-components"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"

export const PaperStyle = styled(Paper)`
  background-color: #fff;
  height: 100%;
`

export const ChartWrapper = styled.div`
  height: 250px;
  padding: 10px 15px 0px 0px;
`

export const HeaderStyle = styled(Typography)`
  font-size: 20px;
  color: #fff;
  padding: 10px;
`

export const LegendStyle = styled.div`
  padding-top: 20px;
  margin-right: 20px;
`

export const ItemColor = styled(ListItem)`
  background-color: #fff; /* Needs to be custom prop */
`
