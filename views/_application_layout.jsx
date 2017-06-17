"use strict";

import React from 'react';
import { Layout, Drawer, Navigation, Header, Content, Grid, Cell } from 'react-mdl';
import { getColorClass, getTextColorClass } from 'react-mdl';
import ClassNames from 'classnames';

export default class ApplicationLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
    }
  }

  static get defaultProps() {
    return {
      pageTitle: null,
      initialData: {}
    };
  }

  buildTitle() {
    if(this.props.pageTitle){
      return "NEM Invoice - " + this.props.pageTitle;
    }
    return "NEM Invoice";
  }

  render() {
    return (
      <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <title>{this.buildTitle()}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" type="text/css" href="/stylesheets/style.css" />
        <script id="initial-data" type="text/plain" data-json={JSON.stringify(this.props.initialData)}></script>
      </head>
      <body>
        <Layout className={ClassNames({ 'mdl-color--grey-500': true })} fixedHeader>
          <Header
            className={ClassNames({ 'mdl-color--white': true })}
            title={
              <div>
                <img src="/images/nem-pictures.png" />
                <span>Invoice</span>
              </div>
            }
          >
            <div id="search"></div>
          </Header>
          {this.props.children}
        </Layout>
        <script src="/javascripts/bundle.js"></script>
      </body>
      </html>
    )
  }
}
