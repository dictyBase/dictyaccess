import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

class Dropdown extends Component {
  state = {
    data: ""
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="data-top-display">Chromosomes</InputLabel>
          <Select
            native
            value={this.state.data}
            onChange={this.handleChange("data")}
            inputProps={{
              id: "data-top-display"
            }}>
            <option value="" />
            <option value={10}>Chr 1</option>
            <option value={20}>Chr 2</option>
            <option value={30}>Chr 3</option>
            <option value={30}>Chr 4</option>
            <option value={30}>Chr 5</option>
            <option value={30}>Chr 6</option>
          </Select>
        </FormControl>
      </div>
    )
  }
}

export default withStyles(styles)(Dropdown)
