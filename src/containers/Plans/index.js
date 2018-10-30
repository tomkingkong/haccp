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
import { 
	addReceivingPlan, 
	updateReceivingPlan,
	addInventoryPlan,
	updateInventoryPlan,
	addProcessingPlan,
	updateProcessingPlan,
	addPackagingPlan,
	updatePackagingPlan } from '../../actions';
import { HazardPlan } from '../../components/HazardPlan';

export class Plans extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productIngredients: [],
			plans: [],
			categories: ['receiving', 'inventory', 'processing', 'packaging', 'summary']
		};
	}

	componentDidMount() {
		const { ingredients, editProduct } = this.props;
		const { planCategory } = this.state;
		const productIngredients = ingredients.filter(ing => ing.productId === editProduct);
		const plans = this.props[planCategory].filter(ingPlan => {
			return productIngredients.some(ing => ing.id === ingPlan.id);
		});
		this.setState({ productIngredients, plans });
	}

	handleReceivingPlan = plan => {
		const { planCategory } = this.state;
		const planTitle = planCategory[0].toUpperCase() + planCategory.slice(1);
		const alreadyExists = this.props[planCategory].find(recPlan => {
			return recPlan.id === plan.id;
		});
		alreadyExists === undefined
			? this.props[`add${planTitle}Plan`](plan.id, plan)
			: this.props[`update${planTitle}Plan`](alreadyExists.id, plan);
	}
	
	handleNextClick = () => {
		const { productIngredients, planCategory, categories } = this.state;
		const next = categories.indexOf(planCategory) + 1;
		});
		this.props.history.push(`/plans/${categories[next]}`);
	}

	displayIngredientsAndPlans = () => {
		const { productIngredients, plans, planCategory } = this.state;
		return productIngredients.map((ing, index) => {
			const details = plans.find(plan => plan.id === ing.id) || false;
			return (
				<ExpansionPanel key={index}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>{ing.name}</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>

						<HazardPlan 
							{...ing} 
							details={details} 
							planName={planCategory} 
							handleReceivingPlan={this.handleReceivingPlan}/>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			);
		});
	}

	render() {
		const { planCategory } = this.state;
		const planTitle = planCategory[0].toUpperCase() + planCategory.slice(1);
		return (
			<div>
				<h2>{ planTitle }</h2>
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

Plans.propTypes = {
  history: object,
  addReceivingPlan: func,
  updateReceivingPlan: func,
  ingredients: array,
  receiving: array,
  inventory: array,
  processing: array,
  packaging: array,
  editProduct: number
};

export const mapStateToProps = state => ({
  ingredients: state.ingredients,
  editProduct: state.editProduct,
	receiving: state.receiving,
	inventory: state.inventory,
	processing: state.processing,
	packaging: state.packaging
});

export const mapDispatchToProps = dispatch => ({
  addReceivingPlan: (id, plan) => dispatch(addReceivingPlan(id, plan)),
  updateReceivingPlan: (id, plan) => dispatch(updateReceivingPlan(id, plan)),
	addInventoryPlan: (id, plan) => dispatch(addInventoryPlan(id, plan)),
  updateInventoryPlan: (id, plan) => dispatch(updateInventoryPlan(id, plan)),
	addProcessingPlan: (id, plan) => dispatch(addProcessingPlan(id, plan)),
  updateProcessingPlan: (id, plan) => dispatch(updateProcessingPlan(id, plan)),
	addPackagingPlan: (id, plan) => dispatch(addPackagingPlan(id, plan)),
  updatePackagingPlan: (id, plan) => dispatch(updatePackagingPlan(id, plan))
});

export default connect(mapStateToProps, mapDispatchToProps)(Plans);