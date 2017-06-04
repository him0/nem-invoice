'use strict'

const uuid = require('node-uuid');

export default class Invoice {
  constructor(params) {
    this.id = uuid.v4().split('-').join('');
    this.title = params.title || "";
    this.content = params.content || "";
    this.address = params.address || "";
    this.amount = params.amount || 1;
    this.message = uuid.v4().split('-').join('').slice(0, 10);
  }

  static find(id) {
    return new Invoice(id);
  }

  static validation(params) {
    let title = params.title;
    let content = params.content;
    let address = params.address;
    let amount = params.amount;
    
    if(typeof(title) == 'string' && title.size < 100 && title !== "" &&
    typeof(content) == 'string' && content.size < 500 && content !== "" &&
    typeof(address) == 'string' && address !== "" &&
    typeof(amount) == 'number' && amount !== 0) {
      return true;
    }
    return false;
  }

  save() {
    return 0;
  }

  values() {
    return {
      id: "43e87a64569c41b0a3eb84606a53a952",
      title: "請求書",
      content: "とりあえずくれ",
      address: "NBBNC2-K72UDI-N5HMRA-EUWJ4F-22RZPQ-L2LYON-UDET",
      amount: 100,
      message: "43e87a6456"
    };
  }
}