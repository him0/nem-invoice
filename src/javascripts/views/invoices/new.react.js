import React, { Component } from 'react';
import {Grid, Cell, Card, Textfield, Button, Input} from 'react-mdl';
import ClassNames from 'classnames';

export default class InvoicesNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      address: "",
      amount: ""
    };
  }

  static get propTypes() {
    return {
    }
  }

  static get defaultProps() {
    const initialProps = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
    return Object.assign({}, initialProps);
  }

  changeTitle(e) {
    this.setState({title: e.target.value});
  }

  changeContent(e) {
    this.setState({content: e.target.value});
  }

  changeAddress(e) {
    this.setState({address: e.target.value});
  }

  changeAmount(e) {
    this.setState({amount: e.target.value});
  }

  submitButtonClick(e) {
    let form = document.forms.create;
    form.submit();
  };

  render() {
    return (
      <form action="/invoices" method="POST" id="create">
        <div className="InvoicesNew">
          <div>
            <Grid>
              <Cell col={2}></Cell>
              <Cell col={8} shadow={2} className={ClassNames({ 'mdl-color--white': true, 'invoice': true })}>
                <Grid>
                  <Cell col={6}>
                    <Textfield
                      label="Title..."
                      name="title"
                      style={{width: '200px'}}
                      floatingLabel
                      value={this.state.title}
                      onChange={this.changeTitle.bind(this)}
                    />
                  </Cell>
                </Grid>

                <Grid className={ClassNames({ 'content': true })}>
                  <Cell col={12}>
                    <Textfield
                      label="Content..."
                      name="content"
                      style={{width: "100%"}}
                      floatingLabel
                      rows={5}
                      value={this.state.content}
                      onChange={this.changeContent.bind(this)}
                    />
                  </Cell>
                </Grid>

                <Grid>
                  <Cell col={8}>
                    <Textfield
                      label="Reciving Address..."
                      name="nemAddress"
                      style={{width: '200px'}}
                      floatingLabel
                      value={this.state.address}
                      onChange={this.changeAddress.bind(this)}
                    />
                  </Cell>
                  <Cell col={4}>
                    <Textfield
                      label="Amount..."
                      name="amount"
                      style={{width: '200px'}}
                      floatingLabel
                      value={this.state.amount}
                      onChange={this.changeAmount.bind(this)}
                    />
                  </Cell>
                </Grid>

                <Grid>
                  <Cell col={3}></Cell>
                  <Cell col={6}>
                    <Button
                    type="button"
                    raised
                    ripple
                    style={{width: '100%'}}
                    onClick={this.submitButtonClick.bind(this)}
                  >Create Invoice</Button>
                  </Cell>
                </Grid>
                  
              </Cell>
              <Cell col={2}></Cell>
            </Grid>
          </div>
        </div>
      </form>
    );
  }
}