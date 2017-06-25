import React, { Component } from 'react';
import { Grid, Cell, Card, Textfield, Button, Snackbar } from 'react-mdl';
import ClassNames from 'classnames';

import SendDescription from './_send_description';

export default class InvoicesShow extends Component {
  constructor(props) {
    super(props);
    this.state = { isSnackbarActive: false };
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

  copyURL(e) {
    document.execCommand(e.terget.value);
  }

  handleShowSnackbar() {
    let tmpInput = document.createElement("input");
    tmpInput.value = window.location.href;
    document.body.appendChild(tmpInput);
    tmpInput.select();
    document.execCommand('copy');
    tmpInput.parentNode.removeChild(tmpInput);
    this.setState({ isSnackbarActive: true });
  }
  
  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
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

              <SendDescription
                qrCodeValue={this.getQrCodeValue()}
                transactionHash={this.props.transactionHash}
                amount={this.props.amount}
                address={this.props.address}
                message={this.props.message}
                timestamp={this.props.timestamp}
              />

              <Grid>
                <Cell col={4}></Cell>
                <Cell col={4}>
                  <div>
                    <Button
                      raised
                      onClick={this.handleShowSnackbar.bind(this)}
                    >Copy URL to Clipboard.</Button>
                    <Snackbar
                      active={this.state.isSnackbarActive}
                      onTimeout={this.handleTimeoutSnackbar.bind(this)}
                    >Copyed.</Snackbar>
                  </div>
                </Cell>
                <Cell col={4}></Cell>
              </Grid>
              
            </Cell>
            <Cell col={2}></Cell>
          </Grid>
        </div>
      </div>
    );
  }
}