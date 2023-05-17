import {type ChangeEvent} from 'react';
import {useRef} from 'react';

type TextFieldProps = {
	label: string;
	text: string;
	setText: (value: string) => void;
	placeholder: string;
};

export default function TextField({
	label,
	placeholder,
	text,
	setText,
}: TextFieldProps) {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		setText(value);
	};

	const id = useRef(`input-${Math.random()}`);

	return (
		<div>
			<label htmlFor={id.current}>
				{label}
			</label>
			<input
				id={id.current}
				type='text'
				placeholder={placeholder}
				value={text}
				onChange={handleChange}
			/>
		</div>
	);
}
