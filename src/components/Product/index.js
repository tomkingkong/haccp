import React from 'react';
import { string, func } from 'prop-types';

export const Product = ({ 
	name, 
	editShipping, 
	editReceiving, 
	editProcessing, 
	editInventory,
	displaySummary }) => {

	return (
		<div>
			<h2>{name}</h2>
			<button onClick={editReceiving}>Receiving</button>
			<button onClick={editInventory}>Inventory</button>
			<button onClick={editProcessing}>Processing</button>
			<button onClick={editShipping}>Shipping</button>
			<button onClick={displaySummary}>Summary</button>
		</div>
	);
};

Product.propTypes = {
	name: string,
	editShipping: func, 
	editReceiving: func, 
	editProcessing: func, 
	editInventory: func,
	displaySummary: func
};