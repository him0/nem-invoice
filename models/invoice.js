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
    this.address = params.address || "";
    this.amount = params.amount || 1;
    this.message = params.message || "";
    this.message = uuid.v4().split('-').join('').slice(0, 10);
  }

  static find(id, callback) {
    FirebaseRecode.find("invoices/", id, (data) => {
      let invoice = new Invoice(data);
      callback(invoice);
    });
  }

  static validation(params) {
    let title = params.title;
    let content = params.content;
    let address = params.address;
    let amount = params.amount;
    
    if(typeof(title) == 'string' && title.size < 100 && title !== "" &&
    typeof(content) == 'string' && content.size < 500 && content !== "" &&
    typeof(address) == 'string' && address !== "" &&
    typeof(amount) == 'number' && amount !== 0 &&
    typeof(message) == "string") {
      return true;
    }
    return false;
  }

  getValues() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      address: this.address,
      amount: this.amount,
      message: this.message
    };
  }
}