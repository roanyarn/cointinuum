import './LargeCard.scss';

const MoreInfoCard = ({
	className,
	image,
	title,
	paragraph1,
	paragraph2,
	paragraph3,
}) => {
	return (
		<div className={className}>
			<img className="large__image" src={image} alt={title} />
			<div className="large__info">
				<h1 className="large__title">{title}</h1>
				<p className="large__paragraph">{paragraph1}</p>
				<p className="large__paragraph">{paragraph2}</p>
				<p className="large__paragraph">{paragraph3}</p>
			</div>
		</div>
	);
};

export default MoreInfoCard;
