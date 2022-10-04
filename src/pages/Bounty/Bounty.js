import { useContext } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import bountyData from '../../data/bountyData';

const Bounty = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'page page--dark' : 'page'}>
      {bountyData.map(({ id, question, answer }) => {
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

export default Bounty;
