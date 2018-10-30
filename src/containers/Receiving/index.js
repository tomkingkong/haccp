import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, array, func, number } from 'prop-types';

import { 
  ExpansionPanel, 
  ExpansionPanelSummary, 
  ExpansionPanelDetails, 
  Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { putIngredient } from '../../utils/apiCalls';
import { addReceivingPlan, updateReceivingPlan } from '../../actions';
import { HazardPlan } from '../../components/HazardPlan';

export class Receiving extends Component {
	constructor() {
		super();
		this.state ={
			productIngredients: [],
			plans: []
		};
	}

	componentDidMount() {
		const { ingredients, editProduct, receiving } = this.props;
		const productIngredients = ingredients.filter(ing => ing.productId === editProduct);
		const plans = receiving.filter(ingPlan => {
			return productIngredients.some(ing => ing.id === ingPlan.id);
		});
		this.setState({ productIngredients, plans });
	}

	handleReceivingPlan = plan => {
	  const { receiving, addReceivingPlan, updateReceivingPlan } = this.props;
	  const alreadyExists = receiving.find(recPlan => {
	    return recPlan.id === plan.id;
	  });

	  alreadyExists === undefined
	    ? addReceivingPlan(plan.id, plan)
	    : updateReceivingPlan(alreadyExists.id, plan);
	}
	
	handleNextClick = () => {
	  const { productIngredients } = this.state;
		productIngredients.forEach(async (ing) => {
			const data = this.props.receiving.find(plan => plan.id === ing.id);
			await putIngredient(ing.id, data);
		});
	  // this.props.history.push('/plans/inventory');
	}

	displayIngredientsAndPlans = () => {
	  const { productIngredients, plans } = this.state;
	  return productIngredients.map((ing, index) => {
			const details = plans.find(plan => plan.id === ing.id);
	    return (
	      <ExpansionPanel key={index}>
	        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
	          <Typography>{ing.name}</Typography>
	        </ExpansionPanelSummary>
	        <ExpansionPanelDetails>

						<HazardPlan details={details} planName={'receiving'} {...ing} handleReceivingPlan={this.handleReceivingPlan}/>
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

export const mapStateToProps = ({ ingredients, editProduct, receiving }) => ({
  ingredients,
  editProduct,
  receiving
});

export const mapDispatchToProps = dispatch => ({
  addReceivingPlan: (id, hazardPlan) => dispatch(addReceivingPlan(id, hazardPlan)),
  updateReceivingPlan: (id, hazardPlan) => dispatch(updateReceivingPlan(id, hazardPlan))
});

export default connect(mapStateToProps, mapDispatchToProps)(Receiving);