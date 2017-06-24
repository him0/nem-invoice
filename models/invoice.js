'use strict';

import fetch from 'node-fetch';
const uuid = require('node-uuid');

import FirebaseRecode from './firebase_recode'

export default class Invoice extends FirebaseRecode {

  firebasePath = "invoices/";
  baseUrl = "http://go.nem.ninja:7890/account/transfers/incoming?address=";

  constructor(params) {
    super();
    this.id = params.id || uuid.v4().split('-').join('');
    this.title = params.title || "";
    this.content = params.content || "";
    this.address = params.address || params.nemAddress || "";
    this.amount = params.amount || 1;
    this.paid = params.paid || false;
    this.transactionHash = params.transactionHash || null;
    this.timestamp = params.timestamp || Date.now();
    this.message = params.message || uuid.v4().split('-').join('').slice(0, 10);
  }

  static find(id, callback) {
    FirebaseRecode.find("invoices/", id, (data) => {
      let invoice = new Invoice(data);
      callback(invoice);
    });
  }

  static validate(params) {
    let title = params.title;
    let content = params.content;
    let address = params.nemAddress;
    let amount = params.amount;
    
    let errorMessages = [];
    if(typeof(title) != 'string' && title.size > 100 && title == "") {
      errorMessages.push("Title is invalid.");
    }
    if(typeof(content) != 'string' && content.size > 500) {
      errorMessages.push("Content is invalid.");
    }
    if(typeof(address) != 'string' && address == "") {
      errorMessages.push("Address is invalid.");
    }
    if(typeof(amount) != 'number' && amount == 0) {
      errorMessages.push("amount is invalid.");
    }
    return errorMessages;
  }

  getValues() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      address: this.address,
      amount: this.amount,
      transactionHash: this.transactionHash,
      timestamp: this.timestamp,
      message: this.message
    };
  }

  updateStatus() {
    if(this.transactionHash) { return true; }
    let url = this.baseUrl + this.address;
    fetch(url).then((response) => {
      return response.json();
    }).then((json) => {
      let data = json.data;
      let txs = data.forEach((txData) => {
        this.matchTransaction(txData.transaction, () => {
          this.transactionHash = txData.meta.hash.data;
          this.save();
        });
      });
    });
  }

  matchTransaction = (tx, callback) => {
    if(tx.timeStamp > this.timestamp) { return; }

    let receiveAmount = Number(tx.amount) / 1000000;
    if(receiveAmount < this.amount) { return; }

    if(!tx.message) { return; }
    let txHexMessage = tx.message.payload;
    let hexMessage = this.textToHex(this.message);
    if(txHexMessage != hexMessage) { return; }
    callback();
  }

  textToHex = (str) => {
    str = str.toString();
  	let hex = '';
  	for(let i=0; i<str.length; i++) {
  		hex += '' + str.charCodeAt(i).toString(16);
  	}
  	return hex;
  };
}

