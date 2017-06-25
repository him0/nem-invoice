import React, { Component } from 'react';
import { Grid, Cell, Switch } from 'react-mdl';
import QRCode from 'qrcode.react';

export default class SendDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usingQrCode: true,
      pending: Boolean(this.props.transactionHash),
      accepted: Boolean(this.props.transactionHash),
      sender: "",
      transactionHash: props.transactionHash || ""
    };

    this.setPendingCheck();
    this.setAcceptedCheck();
  }

  static get propTypes() {
    return {}
  }

  static get defaultProps() {
    let pendingCheckURL = "http://go.nem.ninja:7890//account/unconfirmedTransactions"
    pendingCheckURL += "?address=";

    let acceptedCheckURL = "http://go.nem.ninja:7890/account/transfers/incoming"
    acceptedCheckURL += "?address=";

    return {
      pendingCheckURL: pendingCheckURL,
      acceptedCheckURL: acceptedCheckURL
    }
  }

  changeSwitch(e) {
    this.setState({usingQrCode: e.target.checked});
  }

  setPendingCheck() {
    if (this.state.pending == false && this.state.accepted == false) {
      let url = this.props.pendingCheckURL + this.props.address;

      fetch(url).then((response) => {
        return response.json();
      }).then((json) => {
        let data = json.data;

        data.forEach((tx) => {
          let message = tx.transaction.message || false;
          if (message == false) { return; }
          if(message.payload != this.textToHex(this.props.message)) { return; }
          
          let receiveAmount = Number(tx.transaction.amount) / 1000000;
          if(receiveAmount < this.props.amount) { return; }
          
          this.setState({
            pending: true,
            sender: tx.transaction.signer
          });
          console.log("pending");
        });
      });

      setTimeout(() => {
        this.setPendingCheck();
      }, 10000);
    }
  }

  setAcceptedCheck() {
    if (this.state.accepted == false) {
      let url = this.props.acceptedCheckURL + this.props.address;

      fetch(url).then((response) => {
        return response.json();
      }).then((json) => {
        let data = json.data;

        data.forEach((tx) => {
          let message = tx.transaction.message || false;
          if (message == false) { return; }
          if(message.payload != this.textToHex(this.props.message)) { return; }
          
          let receiveAmount = Number(tx.transaction.amount) / 1000000;
          if(receiveAmount < this.props.amount) { return; }
          
          this.setState({
            pending: true,
            accepted: true,
            transactionHash: tx.meta.hash.data,
            sender: tx.transaction.signer
          });
          console.log("accepted");
        });
      });

      setTimeout(() => {
        this.setAcceptedCheck();
      }, 10000);
    }
  }

  textToHex(str) {
    str = str.toString();
  	let hex = '';
  	for(let i=0; i<str.length; i++) {
  		hex += '' + str.charCodeAt(i).toString(16);
  	}
  	return hex;
  };

  render() {
    if(this.state.accepted){
      return(
        <Grid>
          <Cell col={12}>
            <h3>Payment Accepted!</h3>
            <p>Transaction Hash is {this.state.transactionHash}.</p>
            <p>Sender Publickey is {this.state.sender}.</p>
            <p>
              <a
                href={"http://chain.nem.ninja/#/transfer/" + this.state.transactionHash}
                target="_blank"
              >Check this Transaction at The Blockchain.</a>
            </p>
          </Cell>
        </Grid>
      );
    }else if(this.state.pending) { 
      return(
        <Grid>
          <Cell col={12}>
            <h3>Transaction is Pending.</h3>
            <p>Please Wait for Confirming.</p>
            <p>Sender Publickey is {this.state.sender}.</p>
          </Cell>
        </Grid>
      );
    }else { 
      return(
        <div>
          <Grid>
            <Cell col={12}>
              <h3>How to sent</h3>
            </Cell>
          </Grid>

          <Grid>
            <Cell col={8}>
              <Switch
                ripple
                checked={this.state.usingQrCode}
                onChange={this.changeSwitch.bind(this)}
              >Do you use QRCode?</Switch>
              {(() => {
                if(this.state.usingQrCode) {
                  return(
                    <ol>
                      <li>Scan the QR Code.</li>
                      <li>Check the Address.</li>
                      <li>Check the Message.</li>
                      <li>Check the Encrypto Option is not Checked.</li>
                      <li>Submit!</li>
                    </ol>
                  );
                }else {
                  return(
                    <ol>
                      <li>Type in the Address.</li>
                      <li>Type in the Message.</li>
                      <li>Check the Encrypto Option is not Checked.</li>
                      <li>Submit!</li>
                    </ol>
                  );
                }
              })()}
            </Cell>
            <Cell col={4}>
              <QRCode value={this.props.qrCodeValue} />
            </Cell>
          </Grid>
        </div>
      );
    }
  }
}