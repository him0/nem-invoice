"use strict";

import React, {Component, PropTypes} from 'react';
import ApplicationLayout from '../_application_layout';
import { Button, Card, CardText } from 'react-mdl';

export default class Content extends React.Component {

  static get propTypes() {
    return {
    }
  }

  static get defaultProps() {
    return {
      pageTitle: 'Create New Invoice',
      message: '一覧表示'
    };
  }

  render() {
    return (
      <ApplicationLayout pageTitle={this.props.pageTitle}>
        <h1>{this.props.message}</h1>
      </ApplicationLayout>
    )
  }
}
