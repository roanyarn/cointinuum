import { useContext } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { DarkModeContext } from '../../Context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import useClickOutside from '../../hooks/useClickOutside';
import './InvestCard.scss';

const InvestCard = ({ onClick, investInfo, setIsOpen, className }) => {
	const { darkMode } = useContext(DarkModeContext);

	const domNode = useClickOutside(() => setIsOpen(false));

	const {
		id,
		name,
		image,
		title,
		bulletPoints,
		text,
		text2,
		button,
	} = investInfo;

	const navigate = useNavigate();
	const windowWidth = window.innerWidth;

	const onREClick = () => {
		navigate('/connect');
		if (windowWidth > 1919) {
			window.scrollTo({ top: 2000, behavior: 'smooth' });
		} else if (windowWidth > 1359) {
			window.scrollTo({ top: 2200, behavior: 'smooth' });
		} else if (windowWidth > 1023) {
			window.scrollTo({ top: 2220, behavior: 'smooth' });
		} else if (windowWidth > 599) {
			window.scrollTo({ top: 2220, behavior: 'smooth' });
		} else {
			window.scrollTo({ top: 2480, behavior: 'smooth' });
		}
	};

	return (
		<div
			className={
				darkMode
					? 'investCard__card investCard__card--dark'
					: 'investCard__card'
			}
			key={id}
			ref={domNode}
		>
			<GrFormClose className="investCard__close" onClick={onClick} />
			<img className="investCard__image" src={image} alt={name} />
			<div className="investCard__info">
				<h1 className="investCard__name">{title}</h1>
				<ul className="investCard__list">
					{bulletPoints.map((item) => {
						return <li className="investCard__item">{item}</li>;
					})}
				</ul>
				<p className="investCard__paragraph">{text}</p>
				<div className="investCard__paragraph--container">
					<p className="investCard__paragraph">{text2}</p>
					<p className="investCard__button" onClick={onREClick}>
						{button}
					</p>
				</div>
			</div>
		</div>
	);
};

export default InvestCard;
