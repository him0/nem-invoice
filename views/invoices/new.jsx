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
      message: '作成画面'
    };
  }

  render() {
    return (
      <ApplicationLayout pageTitle={this.props.pageTitle}>
      <div id="root"/>
      </ApplicationLayout>
    )
  }
}
