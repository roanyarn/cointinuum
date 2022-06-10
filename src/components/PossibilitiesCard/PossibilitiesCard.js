import { useContext } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import './PossibilitiesCard.scss';

const PossibilitiesCard = ({ image, title, onClick, paragraph }) => {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div className="possibilities" onClick={onClick}>
			<div className="possibilities__image--container">
				<img
					className={
						darkMode
							? 'possibilities__image possibilities__image--dark'
							: 'possibilities__image'
					}
					src={image}
					alt={image}
				/>
			</div>
			<h1 className="possibilities__title">{title}</h1>
			<p className="paragraph__content">{paragraph}</p>
		</div>
	);
};

export default PossibilitiesCard;
