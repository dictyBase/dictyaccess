import React from "react"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { PaperStyle } from "common/styles/PageStyles"

/**
 * This is a generic error page for broken routes.
 */

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
