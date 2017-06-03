import React, { Component } from 'react';
import {Grid, Cell, Card, Textfield, Button} from 'react-mdl';
import ClassNames from 'classnames';

export default class InvoicesNew extends Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
    }
  }

  static get defaultProps() {
    const initialProps = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
    return Object.assign({}, initialProps);
  }

  render() {
    return (
      <div className="InvoicesNew">
        <div>
          <Grid>
            <Cell col={2}></Cell>
            <Cell col={8} shadow={2} className={ClassNames({ 'mdl-color--white': true, 'invoice': true })}>
              <form action="/invoices" method="post">
                <Grid>
                  <Cell col={6}>
                    <Textfield
                      label="Title..."
                      style={{width: '200px'}}
                      floatingLabel
                    />
                  </Cell>
                </Grid>

                <Grid>
                  <Cell col={8}>
                    <Textfield
                      label="Content..."
                      style={{width: "100%"}}
                      floatingLabel
                      rows={5}
                    />
                  </Cell>
                </Grid>

                <Grid>
                  <Cell col={6}>
                    <Textfield
                      label="Amount..."
                      style={{width: '200px'}}
                      floatingLabel
                    />
                  </Cell>
                  <Cell col={6}>
                    <Textfield
                      label="Reciving Address..."
                      style={{width: '200px'}}
                      floatingLabel
                    />
                  </Cell>
                </Grid>

                <Grid>
                  <Cell col={3}></Cell>
                  <Cell col={6}>
                    <Button raised ripple style={{width: '100%'}}>Button</Button>
                  </Cell>
                </Grid>
                
              </form>
            </Cell>
            <Cell col={2}></Cell>
          </Grid>
        </div>
      </div>
    );
  }
}