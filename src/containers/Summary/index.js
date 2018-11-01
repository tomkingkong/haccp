import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import {SummaryRow} from '../SummaryRow';
import './index.css';

export class Summary extends Component {
	constructor() {
		super();
		this.state = {
			product: {},
			ingredients: [],
			company: {}
		};
	}

	componentDidMount = () => {
		const {
			products,
			ingredients,
			editProduct,
			receiving,
			processing,
			inventory,
			packaging,
			companyInfo
		} = this.props;

		const product = products.find(product => product.id === editProduct);
		const newIngredients = ingredients.filter(ingredient => ingredient.productId === editProduct);

		const processes = [receiving, processing, inventory, packaging];
		const summary = newIngredients.map(ingredient => {
			const result = processes.reduce((acc, process) => {
				const result = process.find(x => x.id === ingredient.id);
				acc = {...acc, ...result};
				return acc;
			}, {});
			
			return {
				name: ingredient.name,
				...result
			};
		});

		this.setState({
			ingredients: summary,
			company: companyInfo,
			product});
	}

	makeSummaryRows = () => (
		this.state.ingredients.map((ingredient, i) => (
			<SummaryRow ingredient={ingredient} key={i}/>
		)
	))

	render() {
		const {company, product} = this.state;
	  return (
	    <div className="summary-container">
				<div className="summary-info-header">
				<div className="summary-product-header">
					<h1 className="summary-header">HACCP Plan</h1>
					<h2 className="summary-company-name">{company.name}</h2>
					<h2 className="summary-product-name">{product.name}</h2>
				</div>
				<div className="summary-product-header">
					<p>{company.team_member_1_name}</p>
					<p>{company.team_member_1_title}</p>
					<p>{company.phone}</p>
					<p>{company.address}</p>
					<p>{company.email}</p>
				</div>
				</div>
				<table>
					<tr>
						<th className="first-table-row">Ingredient</th>
						<th>Receiving</th> 
						<th>Storage</th>
						<th>Processing</th>
						<th>Packaging</th>
					</tr>
					
						{this.makeSummaryRows()}
				</table>
	      <button onClick={() => this.props.history.push('/dashboard')}>
					Print
	      </button>
	    </div>
	  );
	}	
}

Summary.propTypes = {
	history: object
};

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  editProduct: state.editProduct,
	receiving: state.receiving,
	inventory: state.inventory,
	processing: state.processing,
	packaging: state.packaging,
	products: state.products,
	companyInfo: state.companyInfo
});

export default connect(mapStateToProps, null)(Summary);