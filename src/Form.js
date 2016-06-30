import React from 'react'
import ReactDOM from 'react-dom'
import UrlInput from './UrlInput'
import RedirectsInput from './RedirectsInput'
import ExpirationInput from './ExpirationInput'
import Formsy from 'formsy-react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      canSubmit: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.disableButton = this.disableButton.bind(this)
  }
  enableButton() {
    this.setState({
      canSubmit: true
    })
  }
  disableButton() {
    this.setState({
      canSubmit: false
    })
  }
  handleSubmit(model) {
    let link = {
      target_url: model.target_url,
      max_redirects: model.max_redirects,
      expiration: model.expiration
    }
    this.props.addLink(link)
  }
  render() {
    return (
      <Formsy.Form 
        onValidSubmit={this.handleSubmit} 
        onValid={this.enableButton} 
        onInvalid={this.disableButton}>
        <UrlInput 
          name="target_url"
          validations="isUrl"
          required
          validationError="Please enter a valid URL (http://...)"/>
        <RedirectsInput
          name="max_redirects"
          validations="isInt"
          defaultValue = "10"
          required
          validationError="Please enter a number"/>
        <ExpirationInput
          validations="isInt"
          validationError="Please choose a valid expiration"
          name="expiration"/>
        <div className="button-wrap text-center">
          <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
        </div>
      </Formsy.Form>
    )
  }
}
