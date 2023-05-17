import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import type Product from './types/Product';

async function main() {
	// Fetch
	// const url = 'http://localhost:3002/products';
	// const response = await fetch(url);
	// const data = await response.json();
	// const {products} = data;

	// console.log(products);

	// const products: Product[] = [
	// 	{category: 'Fruits', price: '$1', stocked: true, name: 'Apple'},
	// 	{category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit'},
	// 	{category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach'},
	// 	{category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit'},
	// 	{category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin'},
	// 	{category: 'Vegetables', price: '$1', stocked: true, name: 'Peas'},
	// ];

	const element = document.getElementById('root');

	if (!element) {
		return;
	}

	const root = ReactDOM.createRoot(element);
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
}

main();
