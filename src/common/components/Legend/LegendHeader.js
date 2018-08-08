import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { legendHeaderStyle } from "../../styles/legendStyles"
import InfoIcon from "@material-ui/icons/Info"
import Typography from "@material-ui/core/Typography"

const LegendHeader = props => {
  const { classes, className, children, color, plainCard, ...rest } = props
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plainCard,
    [className]: className !== undefined,
  })

  return (
    <div className={cardHeaderClasses} {...rest}>
      <center>
        <InfoIcon style={{ fontSize: 36 }} />
        <br />
        <Typography
          variant="headline"
          gutterBottom
          style={{ color: "white", fontSize: 20 }}>
          Legend
        </Typography>
        {children}
      </center>
    </div>
  )
}

LegendHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary"]),
  plainCard: PropTypes.bool,
}

export default withStyles(legendHeaderStyle)(LegendHeader)
