'use strict'

import Express from 'express';
const Router = Express.Router();

import Invoice from '../models/invoice';

Router.get('/', (req, res, next) => {
  res.redirect('/invoices/new');
});

// Create Page
Router.get('/invoices/new', (req, res, next) => {
  let params = req.body || {};
  res.render('invoices/new', params);
});

Router.post('/invoices', (req, res, next) => {
  console.log(req.body);
  let params = req.body || {};
  let errors = Invoice.validate(params);
  if(errors.length) {
    res.redirect('/invoices/new');
  }else {
    // no error
    let invoice = new Invoice(params);
    invoice.save();
    res.redirect('/invoices/' + invoice.id);
  }
});

// Invoice
Router.get('/invoices/:id(\[0\-9a\-f\]\{32\})', (req, res, next) => {
  let id = req.params.id;
  Invoice.find(id, (invoice) => {
    // if json required, render and returen json
    // todo

    // if pdf required, render and returen pdf
    // todo

    // if html required
    console.log(invoice.getValues());
    res.render('invoices/show', invoice.getValues());
  });
});

// List of Invoices group by reciving address
Router.get('/invoices', (req, res, next) => {
  res.render('invoices/index', {});
});

module.exports = Router;
