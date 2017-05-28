var express = require('express');
var router  = express.Router();

router.get('/', function (req, res, next) {
  res.redirect('/invoices/new');
});

// Create Page
router.get('/invoices/new', function (req, res, next) {
  res.render('invoices/new', {});
});

router.post('/invoices', function (req, res, next) {
  const id  = req.body.id;
  res.redirect('/invoices/' + id);
});

// Invoice
router.get('/invoices/:id', function (req, res, next) {
  // if json required, render and returen json
  // todo

  // if pdf required, render and returen pdf
  // todo

  // if html required
  res.render('invoices/show', {title: req.params.title});
});

// List of Invoices group by reciving address
router.get('/invoices', function (req, res, next) {
  res.render('invoices/index', {});
});

module.exports = router;
