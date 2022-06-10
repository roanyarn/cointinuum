import { useContext } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import faqData from '../../data/faqData';
import './FAQ.scss';

const FAQ = () => {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div className={darkMode ? 'page page--dark' : 'page'}>
			{faqData.map(({ id, question, answer }) => {
				return (
					<QuestionCard
						key={id}
						className={
							darkMode
								? 'question__card question__card--dark'
								: 'question__card'
						}
						title={question}
						paragraph={answer}
					/>
				);
			})}
		</div>
	);
};

export default FAQ;
