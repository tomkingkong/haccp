import React, { Component } from 'react';
import { connect } from 'react-redux';

class Inventory extends Component {
  constructor() {
    super();
  }
	
  componentDidMount() {
    this.props.history.push('/home');
  }
	
	handleNextClick = () => {
	  //save the data
		// do something
	}

	render() {
	  return (
	    <div>
	      <h2>Inventory</h2>
	      <button onClick={this.handleNextClick} to="/dashboard">
					Next Page
	      </button>
	    </div>
	  );
	}	
}

Inventory.propTypes = {

};

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Inventory);