import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';

export class Packaging extends Component {
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
	      <h2>Packaging</h2>
	      <Link onClick={this.handleNextClick} to="/dashboard">
					Next Page
	      </Link>
	    </div>
	  );
	}	
}

Packaging.propTypes = {
	history: object
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Packaging);