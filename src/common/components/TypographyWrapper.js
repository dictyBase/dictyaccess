// @flow
import React from "react"
import Typography from "@material-ui/core/Typography"

/**
 * This is a basic typography wrapper for consistent
 * Material-UI styling.
 */

const TypographyWrapper = ({ children }: any) => (
  <Typography component="div" style={{ padding: 8 * 3 }}>
    {children}
  </Typography>
)

export default TypographyWrapper
