import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, array, func } from 'prop-types';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

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

	render() {
		const { history } = this.props;
	  return (
	    <section className="products-container">
				{ this.displayUserProducts() }
				<Button 
					variant="outlined" 
					style={{margin: "0.2rem"}}
					onClick={() => history.push('/products')}>
					<AddIcon />
				</Button>
	    </section>
	  );
	}	
}

ProductContainer.propTypes = {
	history: object,
	userProducts: array,
	editProduct: func
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
	editProduct: id => dispatch(editProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);