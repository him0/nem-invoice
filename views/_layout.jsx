"use strict";

import React from 'react';
import {Header, Navigation, Grid, Cell} from 'react-mdl';

export default class Layout extends React.Component {

  static get propTypes() {
    return {
    }
  }

  static get defaultProps() {
    return {
      pageTitle: null
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
        <link rel="stylesheet" type="text/css" href="stylesheets/style.css" />
      </head>
      <body>
      <div style={{height: '300px', position: 'relative'}}>
        <Header title={<span><strong>{this.buildTitle()}</strong></span>}>
        </Header>
      </div>
      <Grid>
        <Cell col={2} hidePhone hideTablet />
        <Cell col={8} shadow={2}>
          <p>{this.props.children}</p>
        </Cell>
      </Grid>
      <script src="javascripts/bundle.js"></script>
      </body>
      </html>
    )
  }
}
