import React from 'react'
import Form from './Form'
import Results from './Results'

export default class App extends React.Component {
  constructor(props) {
    const sampleResults = {"link": {"url": "brnrs.io/43eX12d"}}
    super(props)
    this.state = {
      submitted: false,
      results: sampleResults
    }
    this.addLink = this.addLink.bind(this)
    this.reset = this.reset.bind(this)
  }
  addLink(link) {
    console.log('adding link...')
    const xhr = new XMLHttpRequest()
    let data = JSON.stringify({
      link: {
        target_url: link.target_url,
        max_redirects: link.max_redirects,
        expiration: link.expiration
      }
    });
    xhr.open('POST', encodeURI('https://brnrs.io/links'))
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onload = function() {
      if (xhr.status === 200) {
        this.setState({
          submitted: true,
          results: JSON.parse(xhr.responseText)
        })
        console.log(this.state.results)
      }
      console.log(xhr.status)
    }.bind(this)

    xhr.send(data)
  }
  reset() {
    this.setState({
      submitted: false,
      results: null
    })
  }
  render() {
    let activeComponent = 
      this.state.submitted ? 
        <Results link={this.state.results.link} reset={this.reset}/> 
      : 
        <Form addLink={this.addLink}/>

    return (
      <div className="container">
        {activeComponent}
      </div>
    )
  }
}
