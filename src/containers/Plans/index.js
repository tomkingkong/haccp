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
import './index.css';

export class Plans extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productIngredients: [
				{id: 1, productId:1, name:'carrot juice'}
			],
			plans: [
				{	id: 1,
					receiving_dna: true,
					receiving_hazard_chem: true,
					receiving_hazard_phys: true,
					receiving_hazard_bio: true,
					receiving_hazard_handling: 'will do',
					receiving_other: 'notes',
					receiving_from: 'vendor',
					receiving_letter: true
				}
			],
			planTitle: 'receiving',
			planCategory: 'Receiving',
			categories: ['receiving', 'inventory', 'processing', 'packaging', 'summary']
		};
	}

	componentDidMount() {
		const { ingredients, editProduct, history } = this.props;

		const planCategory = history.location.pathname.split('/').pop()
		const planTitle = planCategory[0].toUpperCase() + planCategory.slice(1);

		const productIngredients = ingredients
			.filter(ingredient => ingredient.productId === editProduct);
			
		const plans = this.props[planCategory].filter(plan => {
			return productIngredients.some(ingredient => ingredient.id === plan.id);
		});
		this.setState({ 
			productIngredients, 
			plans, 
			planTitle,
			planCategory
		});
	}

	handlePlanEdits = newPlan => {
		const { planCategory, planTitle } = this.state;
		const alreadyExists = this.props[planCategory]
			.find(oldPlan => oldPlan.id === newPlan.id) || false;

		!alreadyExists
			? this.props[`add${planTitle}Plan`](newPlan.id, newPlan)
			: this.props[`update${planTitle}Plan`](alreadyExists.id, newPlan);
	}
	
	handleNextClick = () => {
		const { productIngredients, planCategory, categories } = this.state;
		const next = categories.indexOf(planCategory) + 1;

		productIngredients.forEach(async (ingredient) => {
			const data = this.props[planCategory]
				.find(plan => plan.id === ingredient.id);
			await putIngredient(ingredient.id, {ingredient:{...data}});
		});
		this.props.history.push(`/plans/${categories[next]}`);
	}

	displayIngredientsAndPlans = (ingredients, plans, category) => {
		return ingredients.map((ingredient, index) => {
			const details = plans
				.find(plan => plan.id === ingredient.id) || {};
			return (
				<ExpansionPanel key={index}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>{ingredient.name}</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>

						<HazardPlan 
							{...ingredient} 
							details={details} 
							planName={category} 
							handlePlanEdits={this.handlePlanEdits}/>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			);
		});
	}

	render() {
		const { productIngredients, plans, planCategory, planTitle } = this.state;
		return (
			<div className="plans">
				<h2>{ planTitle }</h2>
				<section className="ingredients-receiving-edit">
					{ this.displayIngredientsAndPlans(productIngredients, plans, planCategory) }
				</section>
				<button className="save-continue"
					onClick={ this.handleNextClick }>
					save & continue
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