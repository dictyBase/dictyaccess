import React from "react"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"

import { LegendBodyStyle as styles } from "common/styles/LegendStyles"

/**
 * Main body content used inside of LegendBox
 */

const LegendBody = (props) => {
  const { classes, className, children, ...rest } = props
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [className]: className !== undefined,
  })
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  )
}

export default withStyles(styles)(LegendBody)
