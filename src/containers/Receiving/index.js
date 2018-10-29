import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, array, func, number } from 'prop-types';

import { 
	ExpansionPanel, 
	ExpansionPanelSummary, 
	ExpansionPanelDetails, 
	Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { addReceivingPlan, updateReceivingPlan } from '../../actions';
import { HazardPlan } from '../../components/HazardPlan';

export class Receiving extends Component {

	handleReceivingPlan = (plan) => {
		const { receiving, addReceivingPlan, updateReceivingPlan } = this.props;
		const alreadyExists = this.props.receiving.find(recPlan => {
			return recPlan.ingredientId === plan.ingredientId;
		});

		alreadyExists === undefined
			? addReceivingPlan((receiving.length+1), plan)
			: updateReceivingPlan(alreadyExists.id, plan);
	}
	
	handleNextClick = () => {
	  //save the data
		// do something
    this.props.history.push('/inventory');
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
	      <h2>Receiving</h2>
				<section className="ingredients-receiving-edit">
					{ this.displayIngredientsAndPlans() }
				</section>
	      <button onClick={this.handleNextClick}>
					Next Page
	      </button>
	    </div>
	  );
	}	
}

Receiving.propTypes = {
	history: object,
	addReceivingPlan: func,
	updateReceivingPlan: func,
	ingredients: array,
	receiving: array,
	editProduct: number
};

const mapStateToProps = ({ ingredients, editProduct, receiving }) => ({
	ingredients,
	editProduct,
	receiving
});

const mapDispatchToProps = dispatch => ({
	addReceivingPlan: (id, hazardPlan) => dispatch(addReceivingPlan(id, hazardPlan)),
	updateReceivingPlan: (id, hazardPlan) => dispatch(updateReceivingPlan(id, hazardPlan))
});

export default connect(mapStateToProps, mapDispatchToProps)(Receiving);