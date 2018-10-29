import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, array, func, number } from 'prop-types';

import { 
  ExpansionPanel, 
  ExpansionPanelSummary, 
  ExpansionPanelDetails, 
  Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { addProcessingPlan, updateProcessingPlan } from '../../actions';
import { HazardPlan } from '../../components/HazardPlan';

export class Processing extends Component {

	handleReceivingPlan = plan => {
	  const { receiving, addProcessingPlan, updateProcessingPlan } = this.props;
	  const alreadyExists = this.props.receiving.find(recPlan => {
	    return recPlan.ingredientId === plan.ingredientId;
	  });

	  alreadyExists === undefined
	    ? addProcessingPlan((receiving.length+1), plan)
	    : updateProcessingPlan(alreadyExists.id, plan);
	}
	
	handleNextClick = () => {
	  //save the data
	  // do something
	  this.props.history.push('/plans/packaging');
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
	      <h2>Processing</h2>
	      <section className="ingredients-processing-edit">
	        { this.displayIngredientsAndPlans() }
	      </section>
	      <button onClick={this.handleNextClick}>
					Next Page
	      </button>
	    </div>
	  );
	}	
}

Processing.propTypes = {
  history: object,
  addProcessingPlan: func,
  updateProcessingPlan: func,
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
  addProcessingPlan: (id, hazardPlan) => dispatch(addProcessingPlan(id, hazardPlan)),
  updateProcessingPlan: (id, hazardPlan) => dispatch(updateProcessingPlan(id, hazardPlan))
});

export default connect(mapStateToProps, mapDispatchToProps)(Processing);