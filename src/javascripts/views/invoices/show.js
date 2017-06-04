import React, { Component } from 'react';
import {Grid, Cell, Card, Textfield, Button} from 'react-mdl';
import ClassNames from 'classnames';

import QRCode from 'qrcode.react';

export default class InvoicesShow extends Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
    }
  }

  static get defaultProps() {
    const initialProps = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
    return Object.assign({}, initialProps);
  }

  render() {
    return (
      <div className="InvoicesShow">
        <div>
          <Grid>
            <Cell col={2}></Cell>
            <Cell col={8} shadow={2} className={ClassNames({ 'mdl-color--white': true, 'invoice': true })}>
              
              <Grid>
                <Cell col={6}>
                  <h2>{this.props.title}</h2>
                </Cell>
              </Grid>

              <Grid>
                <Cell col={8}>
                  <p>{this.props.content}</p>
                </Cell>
              </Grid>

              <Grid>
                <Cell col={7}>
                  <h3>Reciving Address</h3>
                  <p>{this.props.address}</p>
                </Cell>
                <Cell col={1}></Cell>
                <Cell col={2}>
                  <h3>Amount</h3>
                  <p>{this.props.amount}</p>
                </Cell>
              </Grid>
              <Grid>
                <Cell col={8}>
                  <h3>Transaction Identifing Message</h3>
                  <p>{this.props.message}</p>
                </Cell>
                <Cell col={2}>
                  <QRCode value="http://facebook.github.io/react/" />
                </Cell>
              </Grid>
                
            </Cell>
            <Cell col={2}></Cell>
          </Grid>
        </div>
      </div>
    );
  }
}