import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Login extends Component {
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
	      <h2>Login</h2>
	      <Link onClick={this.handleNextClick} to="/dashboard">
					Next Page
	      </Link>
	    </div>
	  );
	}	
}

Login.propTypes = {

};

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Login);