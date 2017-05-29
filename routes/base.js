'use strict'

import invoices_controller from '../controller/invoices_controller'

module.exports = (app) => {
  app.use('/', invoices_controller);
};
