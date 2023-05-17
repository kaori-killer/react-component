import useCounterStore from '../hooks/useCounterStore';

// Counter 컴포넌트는 명시적으로 useState 훅을 사용하지 않지만
// store 인스턴스에 의존하여 상태를 관리한다.
// 그래서 Store 클래스의 count 속성이 상태 변수로 작동한다.

export default function Counter() {
    const store = useCounterStore();

	return (
		<div>
			<p>Count: {store.count}</p>
		</div>
	);
}
