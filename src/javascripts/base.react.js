import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import InvoicesIndex from './views/invoices/index';
import InvoicesNew from './views/invoices/new';

export default () => {
  render(
    <BrowserRouter>
      <div>
        <Route path='/invoices' component={InvoicesIndex} />
        <Route path='/invoices/new' component={InvoicesNew} />
      </div>
    </BrowserRouter>,
    document.getElementById('root')
  );
};
