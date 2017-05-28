module.exports = function (app, routes) {
  app.use('/', routes.invoices);
};
