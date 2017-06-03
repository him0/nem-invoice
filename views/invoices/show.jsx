"use strict";

import React, {Component, PropTypes} from 'react';
import ApplicationLayout from '../_application_layout';

export default class Content extends React.Component {

  static get propTypes() {
    return {
    }
  }

  static get defaultProps() {
    return {
      pageTitle: "Invoice",
      id: null
    };
  }

  buildInitialData () {
    return {
    };
  }

  render() {
    return (
      <ApplicationLayout pageTitle={this.props.pageTitle} initialData={this.buildInitialData()}>
        <div id="root" />
        <span>{this.props.id}</span>
      </ApplicationLayout>
    )
  }
}
