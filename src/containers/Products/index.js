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
	        <TextField
	          id="standard-dense"
	          name="name"
	          value={this.state.name}
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
	addProduct: func,
	companyInfo: object
};

const mapStateToProps = ({companyInfo})=> ({
  companyInfo
});

const mapDispatchToProps = dispatch => ({
  editProduct: id => dispatch(editProduct(id)),
  addProduct: (id, name) => dispatch(addProduct(id, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);