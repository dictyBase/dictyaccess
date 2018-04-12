// @flow
import React from "react"
import Typography from "material-ui/Typography"
import { BreadcrumbStyle } from "./BreadcrumbStyles"

const Breadcrumbs = () => {
  return (
    <BreadcrumbStyle>
      <Typography variant="title" color="inherit">
        Home / Dashboard / Dicty Stock Center
      </Typography>
    </BreadcrumbStyle>
  )
}

export default Breadcrumbs
