// @flow
import styled from "styled-components"
import Paper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import { ListItem } from "material-ui/List"

export const PaperStyle = styled(Paper)`
  background-color: #fff;
  height: 100%;
`

export const ChartWrapper = styled.div`
  height: 250px;
  padding: 10px 15px 0px 0px;
`

export const HeaderStyle = styled(Typography)`
  font-size: 24px;
  color: #000;
  background-color: rgb(251, 140, 0);
  padding: 10px;
`

export const LegendStyle = styled.div`
  padding-top: 20px;
  margin-right: 20px;
`

export const ItemColor = styled(ListItem)`
  background-color: #fff; /* Needs to be custom prop */
`
