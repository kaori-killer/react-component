import ProductsInCategory from './ProductsInCategory';

import type Product from '../types/Product';

import selectCategories from '../utils/selectCategories';

type ProductTableProps = {
	products: Product[];
};

export default function ProductTable({products}: ProductTableProps) {
	const categories = selectCategories(products);

	return (
		<table className='product-table'>
			<thead>
				<tr>
					<th>name</th>
					<th>price</th>
				</tr>
			</thead>
			<tbody>
				{categories.map(category => (
					<ProductsInCategory
						key={category}
						category={category}
						products={products}
					/>
				))}
			</tbody>
		</table>
	);
}
