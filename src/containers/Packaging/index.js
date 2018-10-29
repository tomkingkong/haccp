import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, array, func, number } from 'prop-types';

import { 
  ExpansionPanel, 
  ExpansionPanelSummary, 
  ExpansionPanelDetails, 
  Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { addPackagingPlan, updatePackagingPlan } from '../../actions';
import { HazardPlan } from '../../components/HazardPlan';

export class Packaging extends Component {

	handleReceivingPlan = plan => {
	  const { receiving, addPackagingPlan, updatePackagingPlan } = this.props;
	  const alreadyExists = this.props.receiving.find(recPlan => {
	    return recPlan.ingredientId === plan.ingredientId;
	  });

	  alreadyExists === undefined
	    ? addPackagingPlan((receiving.length+1), plan)
	    : updatePackagingPlan(alreadyExists.id, plan);
	}
	
	handleNextClick = () => {
	  //save the data
	  // do something
	  this.props.history.push('/plans/summary');
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
	      <h2>Packaging</h2>
	      <section className="ingredients-packaging-edit">
	        { this.displayIngredientsAndPlans() }
	      </section>
	      <button onClick={this.handleNextClick} >
					Next Page
	      </button>
	    </div>
	  );
	}	
}

Packaging.propTypes = {
  history: object,
  addPackagingPlan: func,
  updatePackagingPlan: func,
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
  addPackagingPlan: (id, hazardPlan) => dispatch(addPackagingPlan(id, hazardPlan)),
  updatePackagingPlan: (id, hazardPlan) => dispatch(updatePackagingPlan(id, hazardPlan))
});

export default connect(mapStateToProps, mapDispatchToProps)(Packaging);