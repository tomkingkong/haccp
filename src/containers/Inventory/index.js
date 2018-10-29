import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, array, func, number } from 'prop-types';

import { 
  ExpansionPanel, 
  ExpansionPanelSummary, 
  ExpansionPanelDetails, 
  Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { addInventoryPlan, updateInventoryPlan } from '../../actions';
import { HazardPlan } from '../../components/HazardPlan';

export class Inventory extends Component {

	handleReceivingPlan = plan => {
	  const { receiving, addInventoryPlan, updateInventoryPlan } = this.props;
	  const alreadyExists = this.props.receiving.find(recPlan => {
	    return recPlan.ingredientId === plan.ingredientId;
	  });

	  alreadyExists === undefined
	    ? addInventoryPlan((receiving.length+1), plan)
	    : updateInventoryPlan(alreadyExists.id, plan);
	}
	
	handleNextClick = () => {
	  //save the data
	  // do something
	  this.props.history.push('/processing');
	}

	displayIngredientsAndPlans = () => {
	  const { ingredients, editProduct } = this.props;
	  const ingredientsToEdit = ingredients.filter(ing => ing.productId === editProduct);
	  return ingredientsToEdit.map((ing, index) => {
	    return (
	      <ExpansionPanel key={index}>
	        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
	          <Typography>{ing.name}</Typography>
	        </ExpansionPanelSummary>
	        <ExpansionPanelDetails>

	          <HazardPlan {...ing} handleReceivingPlan={this.handleReceivingPlan}/>
	        </ExpansionPanelDetails>
	      </ExpansionPanel>
	    );
	  });
	}

	render() {
	  return (
	    <div>
	      <h2>Inventory</h2>
	      <section className="ingredients-inventory-edit">
	        { this.displayIngredientsAndPlans() }
	      </section>
	      <button onClick={this.handleNextClick}>
					Next Page
	      </button>
	    </div>
	  );
	}	
}

Inventory.propTypes = {
  history: object,
  addInventoryPlan: func,
  updateInventoryPlan: func,
  ingredients: array,
  receiving: array,
  editProduct: number
	
};

export const mapStateToProps = ({ ingredients, editProduct, receiving }) => ({
  ingredients,
  editProduct,
  receiving
});

export const mapDispatchToProps = dispatch => ({
  addInventoryPlan: (id, hazardPlan) => dispatch(addInventoryPlan(id, hazardPlan)),
  updateInventoryPlan: (id, hazardPlan) => dispatch(updateInventoryPlan(id, hazardPlan))
});

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);