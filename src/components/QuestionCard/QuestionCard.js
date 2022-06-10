import './QuestionCard.scss';

const SolutionCard = ({ className, title, paragraph }) => {
	return (
		<div className={className}>
			<div className="question__info">
				<h2 className="question__info--title">{title}</h2>
				<p className="question__info--paragraph">{paragraph}</p>
			</div>
		</div>
	);
};

export default SolutionCard;
