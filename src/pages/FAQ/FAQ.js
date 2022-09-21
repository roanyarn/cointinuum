import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import faqData from '../../data/faqData';
import service from '../../services/services';
import './FAQ.scss';

const FAQ = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [faq, setFaq] = useState([]);

  const getFaqs = () => {
    service.Faq.getAllFaqs().then(({ msg }) => {
      console.log(msg);
      setFaq(msg);
    });
  };

  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <div className={darkMode ? 'page page--dark' : 'page'}>
      {faq?.map(({ _id, question, answer }) => {
        return (
          <QuestionCard
            key={_id}
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
