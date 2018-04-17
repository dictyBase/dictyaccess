// @flow
import styled from "styled-components"
import Typography from "material-ui/Typography"
import Table from "material-ui/Table"

export const HeaderStyle = styled(Typography)`
  font-size: 20px;
  color: #fff;
  padding: 10px;
`

export const ResponsiveTable = styled(Table)`
  display: block;
  width: 100%;
  overflow-x: auto;
`
