import { useContext } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import './SmallCard.scss';

const SolutionCard = ({ className, title, paragraph, image, id }) => {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={className} id={id}>
			<div className="small__info">
				<h2 className="small__info--title">{title}</h2>
				<p className="small__info--paragraph">{paragraph}</p>
			</div>
			<div className="small__image--container">
				<img
					className={
						darkMode ? 'small__image small__image--dark' : 'small__image'
					}
					src={image}
					alt={title}
				/>
			</div>
		</div>
	);
};

export default SolutionCard;
