// @flow
import styled from "styled-components"
import Paper from "material-ui/Paper"

export const newsStyles = theme => ({
  paper: {
    height: "100%"
  },
  header: {
    fontSize: 24,
    color: "#000",
    backgroundColor: "#e3f2fd",
    padding: 10
  },
  items: {
    paddingLeft: "5px"
  }
})

export const PaperStyle = styled(Paper)`
  height: 100%;
`
