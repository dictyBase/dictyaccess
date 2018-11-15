// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"

type Props = {
  /** The title used as the page header */
  title: string,
}

/** This is the header used on Circos pages. */

const CircosPageHeader = (props: Props) => {
  const { title } = props

  return (
    <Grid item xs={12} md={12} lg={9}>
      <center>
        <h1>{title}</h1>
      </center>
    </Grid>
  )
}

export default CircosPageHeader
