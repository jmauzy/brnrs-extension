import React from 'react';
import Clipboard from 'clipboard';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
    window.close();
    this.props.reset;
  }
  render() {
    new Clipboard('.btn');
    let link = this.props.link;
    let formattedOutput = "https://"+link.url;
    return (
      <div className="results">
        <p>Here's your brnrs.io url:</p>
        <input id="output" className="form-control result-output" value={formattedOutput} readOnly/>
        <button className="btn copy-button" data-clipboard-target="#output">
          <span className="glyphicon glyphicon-copy"></span>Copy to clipboard
        </button>
        <br/>
        <button className="btn close-button" onClick={this.handleClose}>Close</button>
      </div>
    )
  }
}
