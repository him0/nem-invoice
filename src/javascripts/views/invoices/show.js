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

  getQrCodeValue() {
    return(JSON.stringify({
      "v":2,
      "type":2,
      "data":{
        "addr": this.props.address,
        "amount": this.props.amount * 1000000,
        "msg": this.props.message,
        "name": "XEM invoice"
      }
    }));
  }

  render() {
    return (
      <div className="InvoicesShow">
        <div>
          <Grid>
            <Cell col={2}></Cell>
            <Cell col={8} shadow={2} className={ClassNames({ 'mdl-color--white': true, 'invoice': true })}>
              
              <Grid>
                <Cell col={12}>
                  <h2>{this.props.title}</h2>
                </Cell>
              </Grid>

              <Grid>
                <Cell col={8}>
                  <pre>{this.props.content}</pre>
                </Cell>
              </Grid>

              <Grid>
                <Cell col={7}>
                  <h3>Pay to:</h3>
                  <p>{this.props.address}</p>
                </Cell>
                <Cell col={1}></Cell>
                <Cell col={2}>
                  <h3>Amount</h3>
                  <p>{this.props.amount}</p>
                </Cell>
              </Grid>

              <Grid>
                <Cell col={12}>
                  <h3>Transaction Identifing Message</h3>
                  <p>{this.props.message}</p>
                </Cell>
              </Grid>
              
              <Grid>
                <Cell col={4}>
                  <QRCode value={this.getQrCodeValue()} />
                </Cell>
                <Cell col={8}>
                  <h3>How to sent</h3>
                  <lu>
                    <li>お財布から</li>
                    <li>有り金全部仮想通貨に突っ込んで</li>
                    <li>him0 氏に送る</li>
                  </lu>
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