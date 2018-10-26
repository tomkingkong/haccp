import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import { Product } from '../../components/Product';

export class ProductContainer extends Component {
  constructor() {
		super();
		this.state = {
			name: 'MeatSticks',
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

	render() {
	  return (
	    <div>
				<Product {...this.state} />
	    </div>
	  );
	}	
}

ProductContainer.propTypes = {
	history: object
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);