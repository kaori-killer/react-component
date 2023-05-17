// Import {useEffect} from 'react';
// import FilterableProductTable from './components/FilterableProductTable';
// import useFetchProducts from './hooks/useFetchProducts';

import CounterControl from './components/CountControl';
import Counter from './components/Counter';

// Import type Product from './types/Product';

// export default function App() {
// 	const products = useFetchProducts();

// 	function Timer() {
// 		useEffect(() => {
// 			console.log('Effect');

// 			// 제목을 저장해 놓는다.
// 			const savedTitle = document.title;

// 			// SetTinterval id 받는다.
// 			const id = setInterval(() => {
// 				document.title = `Now: ${new Date().getTime()}`;
// 			}, 100);

// 			// 다음 effect 전 또는 컴포넌트가 마운트 해제될 때 실행되는 정리 함수이다.
// 			return () => {
// 				console.log('End of Effect');

// 				// SetTinterval clear를 한다.
// 				clearInterval(id);

// 				// 저장한 제목으로 복원할 수 있다.
// 				document.title = savedTitle;
// 			};
// 		});

// 		return <p>Playing</p>;
// 	}

// 	return (
// 		<>
// 			<Timer />
// 			<FilterableProductTable products={products} />
// 		</>
// 	);
// }

export default function App() {
	return (
		<div>
			<p>Hello</p>
			<Counter />
			{/* 위에를 아래가 덮어쓴다 */}
			<Counter />
			<CounterControl />
		</div>
	);
}
