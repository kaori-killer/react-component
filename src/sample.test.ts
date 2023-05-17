// 재귀는 reduce로 처리 가능

import {fireEvent} from '@testing-library/react';

function add(...numbers: number[]): number {
	return numbers.reduce((acc, number) => acc + number, 0);
}

test('add', () => {
	expect(add(1, 2)).toBe(3);
});

// Describe('add', () => {
// 	it('returns sum of two numbers', () => {
// 		expect(add(1, 2)).toBe(3);
// 	});
// });

const context = describe;

describe('add', () => {
	context('with no arguments ', () => {
		it('returns the zero', () => {
			expect(add()).toBe(0);
		});
	});

	context('with only one arguments ', () => {
		it('returns the same number', () => {
			expect(add(2)).toBe(2);
		});
	});

	context('with only one arguments ', () => {
		it('returns the same number', () => {
			// When
			const result = add(2);

			// Then
			expect(result).toBe(2);
		});
	});

	context('with two arguments', () => {
		it('returns sum of two numbers', () => {
			expect(add(1, 2)).toBe(3);
		});
	});

	context('with three arguments', () => {
		it('returns sum of three numbers', () => {
			expect(add(1, 2, 3)).toBe(6);
		});
	});

	context('with ten arguments', () => {
		it('returns sum of ten numbers', () => {
			expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
		});
	});
});
