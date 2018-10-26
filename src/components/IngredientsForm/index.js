import React, { Component } from 'react';
import { } from 'prop-types';

export class IngredientsForm extends Component {
  constructor() {
    super();
    this.state = {
      ingredientName: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <input 
          type="text"
          name="ingredientName"
          value={this.state.ingredientName}
          onChange={this.handleChange}
          placeholder="Add ingredient name" 
          required />
      </form>
    );
  }
}

export default IngredientsForm;