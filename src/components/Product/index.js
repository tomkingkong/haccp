import React, { Component } from 'react';
import { string, func, object, number } from 'prop-types';

import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Printer from '@material-ui/icons/Print';

import './Product.css';
const style = {
	edit: {
		color: "grey",
		fontSize: 15,
		zIndex:'-1'
	},
	button: {
		paddingRight: 0,
		paddingLeft: '0.5rem',
		fontSize: '9rem'
	},
	add: {
		color: "green",
		fontSize: 20,
		zIndex:'-1'
	},
	summary: {
		color: "#df6e21",
		zIndex:'-1'
	}
};
export class Product extends Component {
	
	handleEditing = event => {
		const { selectProduct, id, history } = this.props;
		selectProduct(id);
		history.push(`/plans/${event.target.id.toLowerCase()}`);
	};

	displayLinks = () => {
		const links = [
			'Ingredients', 
			'Receiving', 
			'Inventory', 
			'Processing', 
			'Packaging', 
			'Summary'];
		return links.map((link, index) => {
			const isSummary = link === 'Summary';
			const isIngredients = link === 'Ingredients';
			return (
				<ListItem 
					id={link}
					key={index}
					style={style.button} 
					button 
					divider
					aria-label={(isSummary 
						? `Display ${link}` 
						: `Edit ${link} Information`)}
					onClick={this.handleEditing}>
					<ListItemText style={{zIndex:'-1'}} primary={link} />
					{ isSummary && <Printer style={style.summary} /> }
					{ isIngredients && <AddIcon style={style.add}/> }
					{ !isSummary && !isIngredients && <EditIcon style={style.edit}/> }
				</ListItem>
			);
		});
	};
	render() {
		return (
			<article className="user-product">
				<h3>{this.props.name}</h3>
				<List component='nav'>
					<Divider />
					{ this.displayLinks() }
				</List>
			</article>
		);
	}
};

Product.propTypes = {
	id: number,
	selectProduct: func,
	history: object,
	name: string
};

export default Product;