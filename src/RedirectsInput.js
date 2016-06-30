import React from 'react'
import { HOC } from 'formsy-react'

class RedirectsInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.changeValue = this.changeValue.bind(this)
  }
  changeValue(event) {
    this.props.setValue(event.currentTarget.value)
  }
  componentDidMount() {
    this.props.setValue(this.props.defaultValue)
  }
  render() {
    const errorMessage = this.props.getErrorMessage()
    return (
      <div className="form-group form-group-sm">
        <label for="target_url">Max Uses (0 for unlimited):</label>
        <input 
          className="form-control" 
          defaultValue={this.props.defaultValue}
          onChange={this.changeValue}
          id="redirects" 
        />
        <span className="error-message">{errorMessage}</span>
      </div>
    )
  }
}

export default HOC(RedirectsInput)
