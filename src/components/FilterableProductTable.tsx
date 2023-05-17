import {useRef, useState, useEffect} from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

import type Product from '../types/Product';

import filterProducts from '../utils/filterProducts';

type FilterableProductTableProps = {
	products: Product[];
};

function useProductsFilter(products: Product[]) {
	const [filterText, setFilterText] = useState<string>('');
	const [inStockOnly, setInStockOnly] = useState<boolean>(false);

	const filteredProducts = filterProducts(products, {
		filterText, inStockOnly,
	});

	return {
		filterText, setFilterText,
		inStockOnly, setInStockOnly,
		filteredProducts,
	};
}

export default function FilterableProductTable({
	products,
}: FilterableProductTableProps) {
	const {
		filterText, setFilterText,
		inStockOnly, setInStockOnly,
		filteredProducts,
	} = useProductsFilter(products);

	const query = useRef('');

	useEffect(() => {
		query.current = filterText;
	}, [filterText]);

	useEffect(() => {
		setTimeout(() => {
			console.log(query.current);
		}, 3_000);
	});

	return (
		<div>
			<SearchBar
				filterText={filterText}
				setFilterText={setFilterText}
				inStockOnly={inStockOnly}
				setInStockOnly={setInStockOnly}
			/>
			<ProductTable
				products={filteredProducts}
			/>
		</div>
	);
}
