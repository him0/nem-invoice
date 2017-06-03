import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import InvoicesIndex from './views/invoices/index';
import InvoicesNew from './views/invoices/new';

export default () => {
  render(
    <BrowserRouter>
      <Switch>
        <Route path='/invoices' component={InvoicesIndex} />
        <Route path='/invoices/new' component={InvoicesNew} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
  );
};
