import {useCallback, useState} from 'react';

export default function useForceUpdate() {
	const [_, setState] = useState({});

	const forceUpdate = useCallback(() => {
		setState({});
	}, []);

	return forceUpdate;
}
