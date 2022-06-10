import { useContext } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import './TeamCard.scss';

const TeamCard = ({ image, name, position, onClick }) => {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div className="teamCard" onClick={onClick}>
			<img
				className={
					darkMode ? 'teamCard__image teamCard__image--dark' : 'teamCard__image'
				}
				src={image}
				alt="team member"
			/>
			<div className="teamCard__info">
				<h1 className="teamCard__name">{name}</h1>
				<h2 className="teamCard__position">{position}</h2>
			</div>
		</div>
	);
};

export default TeamCard;
