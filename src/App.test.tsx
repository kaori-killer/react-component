import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import {container} from 'tsyringe';

test('App', () => {
	render(<App />);
});

const context = describe;

describe('App', () => {
	beforeEach(() => {
		// 모든 테스트가 독립적으로 될 수 있게 설정 (counterStore를 공유하지 않게)
		container.clearInstances(); // 초기화
	});

	context('when press increase button once', () => {
		test('counter', () => {
			render(<App />);

			fireEvent.click(screen.getByText('Increase'));

			// 같은 게 여러 개 있으면 getByText로 하면 안됨.
			expect(screen.getAllByText('Count: 1')).toHaveLength(2);
		});
	});

	context('when press increase button twice', () => {
		test('counter', () => {
			render(<App />);

			fireEvent.click(screen.getByText('Increase'));
			fireEvent.click(screen.getByText('Increase'));

			// 같은 게 여러 개 있으면 getByText로 하면 안됨.
			expect(screen.getAllByText('Count: 2')).toHaveLength(2);
		});
	});
});
