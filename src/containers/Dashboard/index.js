import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import ProductContainer from '../ProductContainer';
export class Dashboard extends Component {
  constructor() {
    super();
  }

	render() {
		const { history } = this.props;
	  return (
	    <div>
	      <h2>Dashboard</h2>
				<section className="Products">
				<ProductContainer history={history}/>
				</section>
	    </div>
	  );
	}	
}

Dashboard.propTypes = {
	history: object
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);