import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, array } from 'prop-types';

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

	componentDidMount() {
		this.setState({ 
			userProducts: this.props.products 
		});
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
  history: object,
  products: array
};

export const mapStateToProps = ({ products }) => ({
  products
});

export const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);