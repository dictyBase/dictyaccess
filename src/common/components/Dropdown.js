import React, { Component } from "react"
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
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
})

class Dropdown extends Component {
  state = {
    data: "",
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  render() {
    const { classes, dropDownData } = this.props

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
            {dropDownData.map(item => {
              return <option value={item.name}>{item.name}</option>
            })}
          </Select>
        </FormControl>
      </div>
    )
  }
}

export default withStyles(styles)(Dropdown)
