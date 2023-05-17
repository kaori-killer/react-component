import type Product from '../types/Product';

export default function selectCategories(products: Product[]): string[] {
	return products.reduce((acc: string[], product: Product) => (
		acc.includes(product.category) ? acc : [...acc, product.category]
	), []);
}
