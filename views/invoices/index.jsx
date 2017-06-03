"use strict";

import React, {Component, PropTypes} from 'react';
import ApplicationLayout from '../_application_layout';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
    }
  }

  static get defaultProps() {
    return {
    };
  }

  buildInitialData () {
    return {
      pageTitle: "List of NEM Invoices"
    };
  }

  render() {
    return (
      <ApplicationLayout pageTitle={this.props.pageTitle} initialData={this.buildInitialData()}>
        <div id="root" />
      </ApplicationLayout>
    )
  }
}
