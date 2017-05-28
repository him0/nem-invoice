var React = require('react');
var ReactBS = require('react-bootstrap');

var Content = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'NEM Invoice',
      outputWord: 'めっちゃ請求書'
    };
  },
  render: function () {
    return (
      <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <title>{this.props.title}</title>
      </head>
      <body>
        <h1>{this.props.outputWord}</h1>
      </body>
      </html>
    );
  }
});

module.exports = Content;
