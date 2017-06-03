'use strict'

import express from 'express';
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.redirect('/invoices/new');
});

// Create Page
router.get('/invoices/new', (req, res, next) => {
  res.render('invoices/new', {test: "ああああ"});
});

// Invoice
router.get('/invoices/:id', (req, res, next) => {
  // if json required, render and returen json
  // todo

  // if pdf required, render and returen pdf
  // todo

  // if html required
  res.render('invoices/show', {});
});

// List of Invoices group by reciving address
router.get('/invoices', (req, res, next) => {
  res.render('invoices/index', {});
});

module.exports = router;
