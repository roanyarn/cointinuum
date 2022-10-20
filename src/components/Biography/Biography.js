import { useContext } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { GrLinkedin } from 'react-icons/gr';
import { GoLinkExternal } from 'react-icons/go';
import { DarkModeContext } from '../../Context/DarkModeContext';
import useClickOutside from '../../hooks/useClickOutside';
import './Biography.scss';
import CommonButton from '../CommonButton/CommonButton';

const Biography = ({ onClick, teamBio, setBiography }) => {
  const { darkMode } = useContext(DarkModeContext);
  const domNode = useClickOutside(() => setBiography(false));
  const token = localStorage.getItem('token');

  const {
    id,
    name,
    position,
    image,
    linkedIn,
    personalWeb,
    description,
    quote,
  } = teamBio;

  return (
    <div className="biography">
      <div
        className={
          darkMode ? 'biography__card biography__card--dark' : 'biography__card'
        }
        key={id}
        ref={domNode}
      >
        <GrFormClose className="biography__close" onClick={onClick} />
        <img className="biography__image" src={image} alt={name} />
        <div className="biography__info">
          <div className="biography__name--link">
            <h1 className="biography__name">{name}</h1>
            <a href={linkedIn} target="_blank" rel="noreferrer">
              <GrLinkedin
                className={
                  darkMode
                    ? 'biography__link biography__link--dark'
                    : 'biography__link'
                }
              />
            </a>
            {personalWeb && (
              <a href={personalWeb} target="_blank" rel="noreferrer">
                <GoLinkExternal
                  className={
                    darkMode
                      ? 'biography__link biography__link--dark'
                      : 'biography__link'
                  }
                />
              </a>
            )}
          </div>
          <p className="biography__position">{position}</p>
          <p className="biography__paragraph">{description}</p>
          <p className="biography__paragraph">{quote}</p>
        </div>
        {token && (
          <div>
            <CommonButton className="common__btn--primary btn__bio--update">
              Update
            </CommonButton>
            <CommonButton className="common__btn--secondary btn__bio--delete">
              Delete
            </CommonButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Biography;
