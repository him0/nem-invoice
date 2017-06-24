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
    if(invoice == false) { res.status(404).send('Not found'); }
    invoice.updateStatus();
    res.render('invoices/show', invoice.getValues());
  });
});

// Invice json
Router.get('/invoices/:id(\[0\-9a\-f\]\{32\}).json', (req, res, next) => {
  let id = req.params.id;
  Invoice.find(id, (invoice) => {
    if(invoice == false) { res.status(404).send('Not found'); }
    invoice.updateStatus();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(invoice.getValues()));
  });
});

// List of Invoices group by reciving address
Router.get('/invoices', (req, res, next) => {
  res.render('invoices/index', {});
});

module.exports = Router;
