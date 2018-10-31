import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, array } from 'prop-types';

import './Dashboard.css';
import ProductContainer from '../ProductContainer';

export class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			userProducts: []
		};
	}

	componentDidMount() {
		const userProducts = this.props.products;
		this.setState({ userProducts });
	}

	render() {
		const { history } = this.props;
		const { userProducts } = this.state;
	  return (
	    <div className="dashboard">
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

export default connect(mapStateToProps, null)(Dashboard);