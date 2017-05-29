"use strict";

import React from 'react';
import Layout from './_layout';

export default class Content extends React.Component {
  render() {
    return (
      <Layout pageTitle="Error">
        <div className="contents">
          <h1>{this.props.message}</h1>
          <h2>{this.props.error.status}</h2>
          <pre>{this.props.error.stack}</pre>
        </div>
      </Layout>
    )
  }
}
