import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, number, func, array } from 'prop-types';

import IngredientsForm from '../../components/IngredientsForm';
import { postIngredient } from '../../utils/apiCalls';
import { addIngredient } from '../../actions';

export class Ingredients extends Component {

	handleNewIngredient = async (name) => {
		const productId = this.props.editProduct;
		const { addIngredient, ingredients } = this.props;
		// const id = await postIngredient(name);
		addIngredient(ingredients.length+1, name, productId);
	}
	
	handleNextClick = (ingredients) => {
	  //save the data
		// do something
		// ingredients.map(async ingredient => await postIngredient(id, ingredient));
		// ingredients.forEach(ingredient => console.log(ingredient.name));
    this.props.history.push('/plans/receiving');
	}

	editIngredients = () => {
		const { ingredients, editProduct } = this.props;
		return ingredients.filter(ing => ing.productId === editProduct);
	}

	render() {
	  return (
	    <div>
	      <h2>Ingredients</h2>
				<IngredientsForm 
					ingredients={this.editIngredients()}
					handleNewIngredient={this.handleNewIngredient} />
				<button onClick={this.handleNextClick}>
					Next Page
	      </button>
	    </div>
	  );
	}	
}

Ingredients.propTypes = {
	history: object,
	editProduct: number,
	ingredients: array
};

export const mapStateToProps = ({ editProduct, ingredients }) => ({
	editProduct,
	ingredients
});

export const mapDispatchToProps = dispatch => ({
	addIngredient: (id, name, productId) => dispatch(addIngredient(id, name, productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);