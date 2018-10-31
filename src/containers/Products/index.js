import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';

import { postProduct } from '../../utils/apiCalls';
import { editProduct, addProduct } from '../../actions';

export class Products extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
	}
	
	handleNextClick = async () => {
		const { name } = this.state;
		const companyId = this.props.companyInfo.id;
	
		const product = await postProduct(companyId, {product: {name}});

	  this.props.addProduct(product.id, name);
	  this.props.editProduct(product.id);
		
	  this.props.history.push('/plans/ingredients');
	}

	handleChange = event => {
	  const { name, value } = event.target;
	  this.setState({ [name]: value });
	}

	render() {
	  return (
	    <div>
	      <h2>Products</h2>
	      <form>
	        <input
	          name="name"
	          value={this.state.name}
	          onChange={this.handleChange}
	          placeholder="Product name"
	          />
	        <button
	          onClick={this.handleNextClick}>
						Save & Continue
	        </button>
	      </form>
	    </div>
	  );
	}	
}

Products.propTypes = {
  history: object,
  editProduct: func,
	addProduct: func,
	companyInfo: object
};

export const mapStateToProps = ({companyInfo})=> ({
  companyInfo
});

export const mapDispatchToProps = dispatch => ({
  editProduct: id => dispatch(editProduct(id)),
  addProduct: (id, name) => dispatch(addProduct(id, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);