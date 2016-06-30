import React from 'react'
import { HOC } from 'formsy-react'

class UrlInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentURL: ''
    }
    this.changeValue = this.changeValue.bind(this)
  }
  changeValue(event) {
    this.props.setValue(event.currentTarget.value)
    this.setState({currentURL: event.currentTarget.value})
  }
  componentDidMount() {
    let activeTab = ''
    chrome.tabs.query({active: true, currentWindow: true}, (arrayOfTabs) => {
      activeTab = arrayOfTabs[0].url
      this.setState({
        currentURL: activeTab
      })
      this.props.setValue(activeTab)
    })
  }
  render() {
    const errorMessage = this.props.getErrorMessage()
    return (
      <div className="form-group form-group-sm">
        <label for="target_url">Enter URL:</label>
        <input 
          className="form-control" 
          value={this.state.currentURL}
          onChange={this.changeValue}
          id="target_url" 
        />
        <span className="error-message">{errorMessage}</span>
      </div>
    )
  }
}

export default HOC(UrlInput)
