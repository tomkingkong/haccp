import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import './Dashboard.css';
import ProductContainer from '../ProductContainer';

export class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			userProducts: [
				{name: 'Meat Sticks', id: 1},
				{name: 'Canned Ham', id: 2},
				{name: 'SnickleFritz', id: 3}
			]
		};
	}

	render() {
		const { history } = this.props;
		const { userProducts } = this.state;
	  return (
	    <div>
	      <h2>Dashboard</h2>
				<div>
					<h4 className="products-title">Products</h4>
					<ProductContainer history={history} userProducts={userProducts}/>
				</div>
	    </div>
	  );
	}	
}

Dashboard.propTypes = {
	history: object
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);