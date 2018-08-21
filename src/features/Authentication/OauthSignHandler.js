// @flow
import { Component } from "react"
import { connect } from "react-redux"
import { oAuthLogin } from "app/actions/authActions"

type Props = {
  oAuthLogin: Function,
}

class OauthSignHandler extends Component<Props> {
  onMessage = event => {
    event.preventDefault()
    event.stopPropagation()
    if (!event.data.provider) {
      return
    }
    this.props.oAuthLogin(event.data)
  }

  componentDidMount() {
    window.addEventListener("message", this.onMessage, false)
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.onMessage)
  }

  render() {
    return null
  }
}

export default connect(
  null,
  { oAuthLogin },
)(OauthSignHandler)
