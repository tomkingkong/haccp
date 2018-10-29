import React, { Component } from 'react';
import { func, array } from 'prop-types';

import { Button, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import './IngredientsForm.css';

export class IngredientsForm extends Component {
  constructor() {
    super();
    this.state = {
      ingredientName: '',
      ingredients: []
    };
  }

  componentDidMount() {
    const { ingredients } = this.props;
    this.setState({ ingredients });
  }

  handleSave = event => {
    event.preventDefault();
    // this.props.handleNextClick(this.state.ingredients);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleNewIngredient = () => {
    const { ingredientName, ingredients } = this.state;
    const newIngredient = { name: ingredientName };
    this.props.handleNewIngredient(ingredientName);
    ingredients.push(newIngredient);
    this.setState({ ingredientName: ''});
  }

  displayIngredients = () => {
    return this.state.ingredients.map((ing, index) => {
      return <p key={index}>{ing.name}</p>;
    });
  }

  render() {
    return (
      <div>
        <section className="ingredients">
        { this.displayIngredients() }
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

IngredientsForm.propTypes = {
  handleNewIngredient: func,
  ingredients: array
};

export default IngredientsForm;