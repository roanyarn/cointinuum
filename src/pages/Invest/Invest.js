import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import InvestCard from '../../components/InvestCard/InvestCard';
import MapImage from '../../components/MapImage/MapImage';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import investData from '../../data/investData';

import './Invest.scss';

const Invest = () => {
  const { darkMode, toggleRoadmap, roadmap } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [investCard, setInvestCard] = useState({});
  const [showCard, setShowCard] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const showInvestImage = (item) => {
    const { id, name, image, title, bulletPoints, text, text2, button } = item;
    setInvestCard({
      id,
      name,
      image,
      title,
      bulletPoints,
      text,
      text2,
      button,
    });
    if (!isOpen) {
      setShowCard(true);
      setIsOpen(true);
      scrollDown();
    } else {
      return;
    }
  };

  const scrollDown = () => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 300,
      behavior: 'smooth',
    });
  };

  const onCloseInvest = () => {
    setShowCard(false);
    scrollUp();
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  const windowWidth = window.innerWidth;

  const isRoadMapOpen = () => {
    toggleRoadmap();
    if (!roadmap) {
      if (windowWidth > 1919) {
        window.scrollTo({ top: 1800, behavior: 'smooth' });
      } else if (windowWidth > 1359) {
        window.scrollTo({ top: 1200, behavior: 'smooth' });
      } else if (windowWidth > 1023) {
        window.scrollTo({ top: 900, behavior: 'smooth' });
      } else if (windowWidth > 599) {
        window.scrollTo({ top: 800, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 800, behavior: 'smooth' });
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    if (windowWidth < 600) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, [mobileView, windowWidth]);

  return (
    <div className={darkMode ? 'invest invest__dark' : 'invest'}>
      <Title
        title="The Future of Real Estate Investing"
        paragraph="Investing in Cointinuum means investing in your community and your future."
        paragraph2=" to learn more."
        span="Explore this interactive map"
      />
      <div className="map__container">
        <img
          className="map__streets"
          src="https://res.cloudinary.com/dtzesssqo/image/upload/v1667672992/investments/streets_oqkvh8.png"
          alt="streets"
        />
        {investData.map((item) => {
          return (
            <MapImage
              key={item.id}
              name={item.name}
              image={item.image}
              onClick={() => {
                showInvestImage(item);
              }}
            />
          );
        })}
      </div>
      {isOpen && (
        <InvestCard
          className={showCard ? 'card__show' : 'card__hide'}
          investInfo={investCard}
          onClick={onCloseInvest}
          setIsOpen={setIsOpen}
        />
      )}
      <Button
        className={
          darkMode ? 'btn__secondary btn__secondary--dark' : 'btn__secondary'
        }
        content={roadmap ? 'Roadmap <' : 'Roadmap >'}
        content2={roadmap ? 'Roadmap <' : 'Roadmap >'}
        onClick={isRoadMapOpen}
      />
      {roadmap && (
        <img
          className="invest__roadmap"
          src={
            mobileView
              ? 'https://res.cloudinary.com/dtzesssqo/image/upload/v1667672993/investments/roadmap-mobile_ntdc5t.png'
              : 'https://res.cloudinary.com/dtzesssqo/image/upload/v1667672992/investments/roadmap_l9tg0a.png'
          }
          alt="roadmap"
        />
      )}
    </div>
  );
};

export default Invest;
