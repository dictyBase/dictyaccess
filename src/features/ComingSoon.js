import React from "react"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { PaperStyle } from "common/styles/PageStyles"

const ComingSoon = () => (
  <PaperStyle>
    <h1>Coming Soon!</h1>
    <h3>We are working hard to bring real data to this page.</h3>

    <Link to="/">
      <Button color="primary">Back to Dashboard</Button>
    </Link>
  </PaperStyle>
)

export default ComingSoon
