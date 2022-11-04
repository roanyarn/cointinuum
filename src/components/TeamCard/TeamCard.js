import { useContext } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import CommonButton from '../CommonButton/CommonButton';
import { MdDelete, MdEdit } from 'react-icons/md';
import './TeamCard.scss';

const TeamCard = ({ id, image, name, position, onClick }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="teamCard" onClick={onClick}>
      <img
        className={
          darkMode ? 'teamCard__image teamCard__image--dark' : 'teamCard__image'
        }
        src={image}
        alt={name}
      />
      <div className="teamCard__info">
        <h1 className="teamCard__name">{name}</h1>
        <h2 className="teamCard__position">{position}</h2>
      </div>
      <div className="teamCard__btn--container">
        <CommonButton className="common__btn--primary btn__team">
          <MdEdit />
        </CommonButton>
        <CommonButton className="common__btn--secondary btn__team">
          <MdDelete />
        </CommonButton>
      </div>
    </div>
  );
};

export default TeamCard;
