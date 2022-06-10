import './Header.scss';

const MoreInfoCard = ({
	className,
	image,
	title,
    title2,
	paragraph1,
	paragraph2,
	paragraph3,
}) => {
	return (
		<div className={className}>
			<div className="header__info">
				<h1 className="header__title">{title}</h1>
                		<h1 className="header__title">{title2}</h1>
				<p className="header__paragraph">{paragraph1}</p>
				<p className="header__paragraph">{paragraph2}</p>
				<p className="header__paragraph">{paragraph3}</p>
			</div>
			<img className="header__image" src={image} alt={title} />
		</div>
	);
};

export default MoreInfoCard;
