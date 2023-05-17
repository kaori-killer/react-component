import {singleton} from 'tsyringe';

type Listner = () => void;

@singleton()
export default class CounterStore {
	count = 0;

	listeners = new Set<Listner>();

    increase() {
		this.count += 1;
		this.publish();
    }

    decrease() {
        this.count -= 1;
		this.publish();
    }

	publish() {
		this.listeners.forEach(listener => {
			listener();
		});
	}

	addListener(listener: Listner) {
		this.listeners.add(listener);
	}

	removeListener(listener: Listner) {
		this.listeners.delete(listener);
	}
}

// 우리는 지금 전역처럼 쓰고 있는데, 아래는 진짜 전역으로 만드는 코드
// 이렇게 하면 우리가 손도 못 댄다.
// export const counterStore = new CounterStore();
