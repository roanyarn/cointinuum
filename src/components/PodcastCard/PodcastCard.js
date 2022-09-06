import { useContext } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';

import './PodcastCard.scss';

const PodcastCard = ({ title, subject, image, onClick }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={darkMode ? 'podcastCard podcastCard--dark' : 'podcastCard'}
      onClick={onClick}
    >
      <img className="podcastCard__image" src={image} alt="podcastImage" />
      <h3
        className={
          darkMode
            ? 'podcastCard__title podcastCard__title--dark'
            : 'podcastCard__title'
        }
      >
        {title}
      </h3>
      <h4
        className={
          darkMode
            ? 'podcastCard__title podcastCard__title--dark'
            : 'podcastCard__title'
        }
      >
        {subject}
      </h4>
    </div>
  );
};

export default PodcastCard;
