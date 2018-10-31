import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import {SummaryRow} from '../SummaryRow';
import './index.css';

export class Summary extends Component {
	constructor() {
		super();
		this.state = {
			ingredients: [
    {
      name: 'beef things',
      receiving_from: 'supplier name',
      receiving_letter: true,
      receiving_dna: false,
      receiving_other: 'some other text',
      receiving_hazard_bio: true,
      receiving_hazard_chem: true,
      receiving_hazard_phys: false,
      receiving_hazard_handling: 'something',
      storage_type: 'cold',
      storage_dna: false,
      storage_other: 'something else',
      storage_hazard_bio: false,
      storage_hazard_chem: true,
      storage_hazard_phys: false,
      storage_hazard_handling: 'handled this way',
      preparation_method: 'mixing it up',
      preparation_dna: false,
      preparation_other: 'some other toher string',
      preparation_hazard_bio: false,
      preparation_hazard_chem: false,
      preparation_hazard_phys: true,
      preparation_hazard_handling: 'heres a thing',
      packaging_method: 'i haz a bucket',
      packaging_dna: true,
      packaging_other: '',
      packaging_hazard_bio: false,
      packaging_hazard_chem: false,
      packaging_hazard_phys: false,
      packaging_hazard_handling: false
		 },
		 {
      name: 'beef things',
      receiving_from: 'supplier name',
      receiving_letter: true,
      receiving_dna: false,
      receiving_other: 'some other text',
      receiving_hazard_bio: true,
      receiving_hazard_chem: true,
      receiving_hazard_phys: false,
      receiving_hazard_handling: 'something',
      storage_type: 'cold',
      storage_dna: false,
      storage_other: 'something else',
      storage_hazard_bio: false,
      storage_hazard_chem: true,
      storage_hazard_phys: false,
      storage_hazard_handling: 'handled this way',
      preparation_method: 'mixing it up',
      preparation_dna: false,
      preparation_other: 'some other toher string',
      preparation_hazard_bio: false,
      preparation_hazard_chem: false,
      preparation_hazard_phys: true,
      preparation_hazard_handling: 'heres a thing',
      packaging_method: 'i haz a bucket',
      packaging_dna: true,
      packaging_other: '',
      packaging_hazard_bio: false,
      packaging_hazard_chem: false,
      packaging_hazard_phys: false,
      packaging_hazard_handling: false
		 }],
		 company:
      {
        name: 'foodco llc',
        email: 'company@email.com',
        password: 'password',
        address: '1331 17th st denver, co',
        phone: '303-867-5309',
        team_member_1_name: 'kort moller',
        team_member_1_title: 'president'
			},
			product:
      {
        name: 'beef product'
      }
		}
	}

	makeSummaryRows = () => {
		return this.state.ingredients.map(ingredient => {
			return <SummaryRow ingredient={ingredient}/>
		})
	}

	render() {
		const {ingredients, company, product} = this.state;
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
						<th>Ingredient</th>
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
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);