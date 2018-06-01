import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { legendBodyStyle } from "../../styles/legendStyles"

const LegendBody = props => {
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

LegendBody.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(legendBodyStyle)(LegendBody)
