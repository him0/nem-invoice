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

  render() {
    return (
      <ApplicationLayout pageTitle={this.props.pageTitle}>
        <div id="root" />
      </ApplicationLayout>
    )
  }
}
