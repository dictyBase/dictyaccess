import React from "react"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"

import { LegendStyle as styles } from "common/styles/LegendStyles"

/**
 * Reusable Legend for Circos displays.
 * Should be used as wrapper for LegendHeader and LegendBody.
 */

const LegendBox = props => {
  const { classes, className, children, plain, carousel, ...rest } = props
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined,
  })
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  )
}

export default withStyles(styles)(LegendBox)
