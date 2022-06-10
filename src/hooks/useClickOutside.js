import { useEffect, useRef } from 'react';

const useClickOutside = (handler) => {
	const domNode = useRef();

	useEffect(() => {
		const listener = (e) => {
			if (!domNode.current.contains(e.target)) {
				handler();
			}
		};
		document.addEventListener('mousedown', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
		};
	});
	return domNode;
};

export default useClickOutside;
