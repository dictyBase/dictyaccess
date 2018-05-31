// @flow
import React, { Component } from "react"
// import { Redirect } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150,
  },
})

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Array of objects with names and routes (data for dropdown menu) */
  dropDownData: Array<Object>,
}

type State = {
  data: string,
  redirect: boolean,
  route: string,
}

class Dropdown extends Component<Props, State> {
  state = {
    data: "",
    redirect: false,
    route: "",
  }

  handleChange = name => event => {
    const routeValue = event.target.value
    const routeString = routeValue.toString()
    this.setState({
      [name]: routeValue,
      redirect: true,
      route: `${routeString}`,
    })
  }

  render() {
    const { classes, dropDownData } = this.props

    // if (this.state.redirect === true) {
    // need to have the redirect maintain the dropdown menu with appropriate selection highlighted
    //   return <Redirect to={this.state.route} />
    // }
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <Select
            native
            value={this.state.data}
            onChange={this.handleChange("data")}
            inputProps={{
              id: "data-top-display",
            }}>
            {dropDownData.map((item, i) => {
              return (
                <option value={item.route} key={i}>
                  {item.name}
                </option>
              )
            })}
          </Select>
        </FormControl>
      </div>
    )
  }
}

export default withStyles(styles)(Dropdown)
