import React, { Component } from 'react';
import { func } from 'prop-types';

import { Button, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export class ReceivingPlan extends Component {
  constructor() {
    super();
    this.state = {
      ingredientName: '',
      ingredients: []
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleNewIngredient = () => {
    const { ingredientName, ingredients } = this.state;
    const newIngredient = { name: ingredientName };
    this.props.addIngredient(ingredientName);
    ingredients.push(newIngredient);
    this.setState({ ingredientName: ''});
  }

  render() {
    return (
      <div>
        <section className="ingredients">
        {/* { this.displayIngredients() } */}
        </section>
        <form className="form">
          <TextField
            id="standard-dense"
            name="ingredientName"
            value={this.state.ingredientName}
            onChange={this.handleChange}
            label="Ingredient name"
            required />
          <Button variant="contained" onClick={this.handleNewIngredient}>
            <AddIcon style={{marginRight: '0.2rem', color:'forestgreen'}}/>
            Add Ingredient
          </Button>
        </form>
      </div>
    );
  }
}

ReceivingPlan.propTypes = {
  addIngredient: func
};

export default ReceivingPlan;