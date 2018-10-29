import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';

import { Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { postProduct } from '../../utils/apiCalls';
import { editProduct, addProduct } from '../../actions';

export class Products extends Component {
  constructor() {
    super();
    this.state = {
      productName: ''
    };
  }
	handleNextClick = async () => {
	  const { productName } = this.state;
	  // post new product and retreive id
	  // const id = await postProduct(companyID, productName);

	  // retreive product id, set to redux store
	  // add product to products array
	  this.props.addProduct(4, productName);
	  // set product id to edit
	  this.props.editProduct(4);
	  // continue to ingredients
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
	      <form >
	        <TextField
	          id="standard-dense"
	          name="productName"
	          value={this.state.productName}
	          onChange={this.handleChange}
	          label="Product name"
	          required />
	        <Button 
	          variant="contained" 
	          color="primary" 
	          required onClick={this.handleNextClick}>
						Save & Continue
	          <SendIcon style={{marginLeft:'0.5rem'}}/>
	        </Button>
	      </form>
	    </div>
	  );
	}	
}

Products.propTypes = {
  history: object,
  editProduct: func,
  addProduct: func
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  editProduct: id => dispatch(editProduct(id)),
  addProduct: (id, name) => dispatch(addProduct(id, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);