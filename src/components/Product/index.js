import React from 'react';
import { string, func, object, number } from 'prop-types';

import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Printer from '@material-ui/icons/Print';

import './Product.css';

export const Product = ({ 
	name, 
	selectProduct,
	history,
	id }) => {

	const style = {
		edit: {
			color: "grey",
			fontSize: 20
		},
		button: {
			paddingRight: 0,
			paddingLeft: '0.5rem',
			fontSize: '9rem'
		},
		add: {
			color: "green",
			fontSize: 20
		},
		summary: {
			color: "#df6e21"
		}
	};

	const handleEditing = event => {
		selectProduct(id);
		history.push(`/${event.target.innerText.toLowerCase()}`);
	};

	return (
		<article className="user-product">
			<h3>{name}</h3>
			<List component='nav'>
				<Divider />
				<ListItem 
					style={style.button} 
					button 
					divider
					aria-label="Add Ingredients" 
					onClick={handleEditing}>
					<ListItemText primary='Ingredients' />
					<AddIcon style={style.add}/>
				</ListItem>
				<ListItem 
					style={style.button} 
					button 
					divider 
					aria-label="Edit Receiving Information" 
					onClick={handleEditing}>
					<ListItemText classes={style.root} primary='Receiving' />
					<EditIcon style={style.edit}/>
				</ListItem>
				<ListItem 
					style={style.button} 
					button 
					divider 
					aria-label="Edit Storage Information" 
					onClick={handleEditing}>
					<ListItemText classes={style.root} primary='Inventory' />
					<EditIcon style={style.edit} />
				</ListItem>
				<ListItem 
					style={style.button} 
					button 
					divider 
					aria-label="Edit Processing Information" 
					onClick={handleEditing}>
					<ListItemText classes={style.root} primary='Processing' />
					<EditIcon style={style.edit} />
				</ListItem>
				<ListItem 
					style={style.button} 
					button 
					divider 
					aria-label="Edit Shipping Information" 
					onClick={handleEditing}>
					<ListItemText classes={style.root} primary='Shipping' /> 
					<EditIcon style={style.edit} />
				</ListItem>
				<ListItem 
					style={style.button} 
					button 
					aria-label="Display Summary" 
					onClick={handleEditing}>
					<ListItemText classes={style.root} primary='Summary'/>
					<Printer style={style.summary} />
				</ListItem>
			</List>
		</article>
	);
};

Product.propTypes = {
	id: number,
	selectProduct: func,
	history: object,
	name: string
};