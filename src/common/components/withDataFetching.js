import React, { Component } from "react"
import { connect } from "react-redux"

/**
 * HOC used to handle data fetching, loading and error displays.
 */

const withDataFetching = (action, key, LoadingComponent, ErrorComponent) => (
  WrappedComponent,
) => {
  class WithDataFetchingComponent extends Component {
    componentDidMount() {
      const { action } = this.props

      action()
    }

    render() {
      const { error, isFetching } = this.props
      if (error) {
        if (ErrorComponent) {
          return <ErrorComponent />
        }

        return (
          <center>
            <br />
            <p>
              <strong>Sorry! There was an error loading the items:</strong>
            </p>
            <p>
              <em>{error.toString()}</em>
            </p>
          </center>
        )
      }

      if (isFetching) {
        if (LoadingComponent) {
          return <LoadingComponent />
        }

        return (
          <center>
            <br />
            Loading ...
          </center>
        )
      }

      return <WrappedComponent {...this.props} />
    }
  }
  const mapStateToProps = (state) => ({
    error: state[key].error,
    isFetching: state[key].isFetching,
    data: state[key].data,
  })

  return connect(mapStateToProps, { action })(WithDataFetchingComponent)
}

export default withDataFetching
