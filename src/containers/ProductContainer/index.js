import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, array } from 'prop-types';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import './ProductContainer.css';
import { Product } from '../../components/Product';

export class ProductContainer extends Component {
  constructor() {
		super();
		this.state = {
			editReceiving: this.editReceiving,
			editInventory: this.editInventory,
			editProcessing: this.editProcessing,
			editShipping: this.editShipping,
			displaySummary: this.displaySummary
		};
  }
	
	editReceiving = id => {
		// set current product id to redux edit product
		this.props.history.push('/receiving');
	}

	editInventory = id => {
		// set current product id to redux edit product
		this.props.history.push('/inventory');
	}

	editProcessing = id => {
		// set current product id to redux edit product
		this.props.history.push('/processing');
	}

	editShipping = id => {
		// set current product id to redux edit product
		this.props.history.push('/shipping');
	}

	displaySummary = id => {
		// set current product id to redux edit product
		this.props.history.push('/summary');
	}

	displayUserProducts = () => {
		const { userProducts } = this.props;
		const products = userProducts.map((product, index) => {
			return <Product {...this.state} {...product} key={index} />;
		});
		return products;
	}

	render() {
		const { history } = this.props;
	  return (
	    <section className="products-container">
				{ this.displayUserProducts() }
				<Button 
					variant="outlined" 
					onClick={() => history.push('/products')}>
					<AddIcon />
				</Button>
	    </section>
	  );
	}	
}

ProductContainer.propTypes = {
	history: object,
	userProducts: array
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);