import React, { Component } from 'react';

export default class InvoicesIndex extends Component {
  constructor(props) {
    super(props);
    debugger;
  }
  
  static get propTypes() {
    return {
    }
  }

  static get defaultProps() {
    return {
    };
  }

  render() {
    return (
      <div className="InvoicesIndex">
        <script id="initial-data" type="text/plain" data-json="{{initialData}}"></script>
		    <span>InvoicesIndex</span>
      </div>
    );
  }
}