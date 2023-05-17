import {useState, useEffect} from 'react';

export default function useFetchProducts() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const url = 'http://localhost:3002/products';
			const response = await fetch(url);
			const data = await response.json();
			setProducts(data.products);
		};

		fetchProducts();
	}, []);

	return products;
}
