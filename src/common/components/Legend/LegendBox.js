import React from "react"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import { legendStyle } from "common/styles/legendStyles"

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

export default withStyles(legendStyle)(LegendBox)
