import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Textfield } from 'react-mdl';

import InvoicesIndex from './views/invoices/index';
import InvoicesNew from './views/invoices/new';
import InvoicesShow from './views/invoices/show';

export default () => {
  render(
    <Textfield
      value=""
      onChange={() => {}}
      label="Search"
      expandable
      expandableIcon="search"
      style={{ color: "black" }}
    />,
    document.getElementById('search')
  );

  render(
    <BrowserRouter>
      <Switch>
        <Route path='/invoices/new' component={InvoicesNew} />
        <Route path='/invoices/:id' component={InvoicesShow} />
        <Route path='/invoices' component={InvoicesIndex} />
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
  );
};
