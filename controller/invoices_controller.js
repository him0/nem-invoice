'use strict'

import Express from 'express';
const Router = Express.Router();

import Invoice from '../models/invoice'

Router.get('/', (req, res, next) => {
  res.redirect('/invoices/new');
});

// Create Page
Router.get('/invoices/new', (req, res, next) => {
  res.render('invoices/new', {});
});

Router.post('/invoices', (req, res, next) => {
  let params = {
    title: req.body.title,
    content: req.body.content,
    address: req.body.address,
    amount: req.body.amount,
  };
  Invoice.validation(params);
  let invoice = new Invoice(params);
  invoice.save();
  res.send(JSON.stringify(invoice.values()));
});

// Invoice
Router.get('/invoices/:id(\[0\-9a\-f\]\{32\})', (req, res, next) => {
  // let invoice = Invoice.find(req.params.id);
  let invoice = new Invoice(); // 仮

  // if json required, render and returen json
  // todo

  // if pdf required, render and returen pdf
  // todo

  // if html required
  res.render('invoices/show', invoice.values());
});

// List of Invoices group by reciving address
Router.get('/invoices', (req, res, next) => {
  res.render('invoices/index', {});
});

module.exports = Router;
