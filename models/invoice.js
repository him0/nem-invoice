'use strict'

import FirebaseRecode from './firebase_recode'

const uuid = require('node-uuid');

export default class Invoice extends FirebaseRecode {

  firebasePath = "invoices/";

  constructor(params) {
    super();
    this.id = uuid.v4().split('-').join('');
    this.title = params.title || "";
    this.content = params.content || "";
    this.address = params.nemAddress || "";
    this.amount = params.amount || 1;
    this.timestamp = Date.now();
    this.message = uuid.v4().split('-').join('').slice(0, 10);
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
      timestamp: this.timestamp,
      message: this.message
    };
  }
}