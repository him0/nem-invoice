"use strict";

import React, {Component, PropTypes} from 'react';
import Layout from '../_layout';

export default class Content extends React.Component {

  static get propTypes() {
    return {
    }
  }

  static get defaultProps() {
    return {
      pageTitle: 'Create New Invoice',
      message: 'めっちゃつくれ'
    };
  }

  render() {
    return (
      <Layout pageTitle={this.props.pageTitle}>
        <h1>{this.props.message}</h1>
        <h1>{this.props.test}</h1>
      </Layout>
    )
  }
}
