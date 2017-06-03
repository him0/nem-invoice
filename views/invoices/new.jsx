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
      pageTitle: "Create NEM Invoice"
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
      </ApplicationLayout>
    )
  }
}
