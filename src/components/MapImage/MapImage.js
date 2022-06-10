import { useContext } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import './MapImage.scss';

const MapImage = ({ name, image, onClick }) => {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<img
			className={`${darkMode} ? map__image map__${name} map__${name}--dark map__image--dark : map__image map__${name}`}
			src={image}
			alt={name}
			onClick={onClick}
		/>
	);
};

export default MapImage;
