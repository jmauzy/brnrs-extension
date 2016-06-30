import React from 'react'
import moment from 'moment'
import Datetime from 'react-datetime'
import 'react-datetime/example/react-datetime.css'
import { HOC } from 'formsy-react'

class ExpirationInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.changeValue = this.changeValue.bind(this)
  }
  changeValue(value) {
    let unixTimestamp = value.unix()
    console.log(unixTimestamp)
    this.props.setValue(unixTimestamp)
  }
  validDates(current) {
    const yesterday = Datetime.moment().subtract(1, 'day')
    const nextYear = Datetime.moment().add(1, 'year')
    return(current.isAfter(yesterday) && current.isBefore(nextYear))
  }
  componentDidMount() {
    this.props.setValue(moment().add(7, 'days').unix())
  }
  render() {
    const errorMessage = this.props.getErrorMessage()
    return (
      <div className="form-group form-group-sm">
        <label for="expiration">Expiration:</label>
        <Datetime 
          isValidDate={this.validDates}
          defaultValue={moment().add(7, 'days').format("MM/DD/YYYY hh:mm a")}
          ref="expiration" 
          required
          onChange={this.changeValue}
          size="sm"/>
      <span className="error-message">{errorMessage}</span>
      </div>
    )
  }
}

export default HOC(ExpirationInput)
