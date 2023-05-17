import {useEffect, useState} from 'react';

type CheckBoxFieldProps = {
	label: string;
	inStockOnly: boolean;
	setInStockOnly: (value: boolean) => void;
};

export default function CheckBoxField({
	label, inStockOnly, setInStockOnly,
}: CheckBoxFieldProps) {
	const id = `checkbox-${label}`.replace(/ /g, '-').toLowerCase();

	const handleChange = () => {
		setInStockOnly(!inStockOnly);
	};

	return (
		<div>
			<input
				type='checkbox'
				id={id}
				checked={inStockOnly}
				onChange={handleChange}
			/>
			<label htmlFor={id}>
				{label}
			</label>
		</div>
	);
}
