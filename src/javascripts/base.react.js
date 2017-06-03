import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import InvoicesIndex from './views/invoices/index';
import InvoicesNew from './views/invoices/new';

export default () => {
  render(
    <BrowserRouter>
      <Switch>
        <Route path='/invoices/new' component={InvoicesNew} />
        <Route path='/invoices' component={InvoicesIndex} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
  );
};
