import React from 'react';
import { string, func } from 'prop-types';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Printer from '@material-ui/icons/Print';

import './Product.css';

export const Product = ({ 
	name, 
	editShipping, 
	editReceiving, 
	editProcessing, 
	editInventory,
	displaySummary }) => {

	const style = {
		edit: {
			fontSize:20
		},
		button: {
			paddingRight: 0,
			paddingLeft: '1rem'
		}
	};

	return (
		<article className="user-product">
			<h3>{name}</h3>
			<List component='nav' className='plans'>
				<Divider />
				<ListItem 
					style={style.button} 
					button 
					divider 
					aria-label="Edit Receiving Information" 
					onClick={editReceiving}>
					<ListItemText primary='Receiving' />
					<EditIcon style={style.edit}/>
				</ListItem>
				<ListItem 
					style={style.button} 
					button 
					divider 
					aria-label="Edit Storage Information" 
					onClick={editInventory}>
					<ListItemText primary='Storage' />
					<EditIcon style={style.edit} />
				</ListItem>
				<ListItem 
					style={style.button} 
					button 
					divider 
					aria-label="Edit Processing Information" 
					onClick={editProcessing}>
					<ListItemText primary='Processing' />
					<EditIcon style={style.edit} />
				</ListItem>
				<ListItem 
					style={style.button} 
					button 
					divider 
					aria-label="Edit Shipping Information" 
					onClick={editShipping}>
					<ListItemText primary='Shipping' /> 
					<EditIcon style={style.edit} />
				</ListItem>
				<ListItem 
					style={style.button} 
					button 
					aria-label="Display Summary" 
					onClick={displaySummary}>
					<ListItemText primary='Summary'/>
					<Printer />
				</ListItem>
			</List>
		</article>

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