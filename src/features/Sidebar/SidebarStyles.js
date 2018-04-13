import styled from "styled-components"
import { Link } from "react-router-dom"
import List from "material-ui/List"
// import Paper from "material-ui/Paper"

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const ListStyle = styled(List)`
  background-color: #eceff1;
  height: 100%;
`

// export const DrawerPaperStyle = styled(Paper)`
//   position: relative;
//   width: 240px;
//   height: 100%;
// `

export const DrawerHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
  background-color: #4f5aae;
  color: #fff;
  min-height: 64px;
`
