import { useState } from 'react';
import './Button.scss';

const Button = ({ className, content, content2, onClick, type, onSubmit }) => {
	const [bigScreen, setBigScreen] = useState(true);

	window.addEventListener('resize', () => {
		const windowWidth = window.innerWidth;
		if (windowWidth < 800) {
			setBigScreen(false);
		} else {
			setBigScreen(true);
		}
	});
	return (
		<button
			className={className}
			type={type}
			onClick={onClick}
			onSubmit={onSubmit}
		>
			{bigScreen ? content : content2}
		</button>
	);
};

export default Button;
