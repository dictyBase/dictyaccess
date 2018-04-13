import React from "react"
import { Link } from "react-router-dom"
import Paper from "material-ui/Paper"
import Button from "material-ui/Button"
import styled from "styled-components"

const PaperStyle = styled(Paper)`
  text-align: center;
  height: 400px;
  padding-top: 50px;
`

const PageNotFound = () => {
  return (
    <PaperStyle>
      <h1>Oops...</h1>
      <h3>This page does not exist.</h3>
      <Button color="primary">
        <Link to="/">Back to Dashboard</Link>
      </Button>
    </PaperStyle>
  )
}

export default PageNotFound
