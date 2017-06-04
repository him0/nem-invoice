'use strict'

import Express from 'express';
const Router = Express.Router();

import Invoice from '../models/invoice';

import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

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
  firebase.database().ref("invoices/" + invoice.id).set(invoice);
  console.log(JSON.stringify(invoice));
  res.send(JSON.stringify(invoice));
});

// Invoice
Router.get('/invoices/:id(\[0\-9a\-f\]\{32\})', (req, res, next) => {
  let id = req.params.id;

  let invoice = new Invoice();

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
