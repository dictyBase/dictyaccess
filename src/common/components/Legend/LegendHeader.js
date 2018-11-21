import React from "react"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import InfoIcon from "@material-ui/icons/Info"
import Typography from "@material-ui/core/Typography"

import { LegendHeaderStyle as styles } from "common/styles/LegendStyles"

/**
 * Header used inside of LegendBox
 */

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
        <InfoIcon style={{ fontSize: 25 }} />
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

export default withStyles(styles)(LegendHeader)
