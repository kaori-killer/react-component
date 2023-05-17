import useCounterStore from '../hooks/useCounterStore';

import { container } from 'tsyringe';
import CounterStore from '../stores/CounterStore';

export default function CounterControl() {
	const store = container.resolve(CounterStore);
    // const store = useCounterStore();

	const handleClickIncrease = () => {
        store.increase();
	};

	const handleClickDecrease = () => {
        store.decrease();
	};

	return (
		<div>
            <p>{store.count}</p>
			<button type='button' onClick={handleClickIncrease}>
                Increase
			</button>
			<button type='button' onClick={handleClickDecrease}>
                decrease
			</button>
		</div>
	);
}
