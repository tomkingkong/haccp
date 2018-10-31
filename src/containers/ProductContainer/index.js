import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, array, func } from 'prop-types';

import './ProductContainer.css';
import { Product } from '../../components/Product';
import { editProduct } from '../../actions';

export class ProductContainer extends Component {

	selectProduct = id => {
		this.props.editProduct(id);
	}
	
	displayUserProducts = () => {
		const { userProducts, history } = this.props;
		return userProducts.map((product, index) => (
			<Product 
				{...product} 
				history={history} 
				selectProduct={this.selectProduct} 
				key={index} />
		));
	}

	addNewProduct = () => {
		this.props.history.push('/products')
	}

	render() {
	  return (
	    <section className="products-container">
				{ this.displayUserProducts() }
				<button 
					className="add-product"
					onClick={this.addNewProduct}>
					+
				</button>
	    </section>
	  );
	}	
}

ProductContainer.propTypes = {
	history: object,
	userProducts: array,
	editProduct: func
};

export const mapDispatchToProps = dispatch => ({
	editProduct: id => dispatch(editProduct(id))
});

export default connect(null, mapDispatchToProps)(ProductContainer);