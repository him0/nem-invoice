'use strict'

import Express from 'express';
const Router = Express.Router();

const uuid = require('node-uuid');

Router.get('/', (req, res, next) => {
  res.redirect('/invoices/new');
});

// Create Page
Router.get('/invoices/new', (req, res, next) => {
  res.render('invoices/new', {});
});

Router.post('/invoices', (req, res, next) => {
  let id = uuid.v4().split('-').join('');
  res.redirect('/invoices/' + id);
});

// Invoice
Router.get('/invoices/:id', (req, res, next) => {
  // if json required, render and returen json
  // todo

  // if pdf required, render and returen pdf
  // todo

  // if html required
  res.render('invoices/show', {id: req.params.id});
});

// List of Invoices group by reciving address
Router.get('/invoices', (req, res, next) => {
  res.render('invoices/index', {test: "aaa"});
});

module.exports = Router;
