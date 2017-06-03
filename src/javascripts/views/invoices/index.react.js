import React, { Component } from 'react';

export default class InvoicesIndex extends Component {
  constructor(props) {
    super(props);
  }
  
  static get propTypes() {
    return {
    }
  }

  static get defaultProps() {
    const initialProps = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
    return Object.assign({}, initialProps);
  }

  render() {
    return (
      <div className="InvoicesIndex">
		    <span>InvoicesIndex</span>
      </div>
    );
  }
}