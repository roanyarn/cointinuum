import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../Context/DarkModeContext';
import useValidation from '../../hooks/useValidation';
import services from '../../services/services';
import Button from '../Button/Button';

import './Teammate.scss';

const Teammate = ({ onCloseModal }) => {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  const NAME_MAX_SIZE = 20;
  const NAME_MIN_SIZE = 2;
  const POSITION_MAX_SIZE = 35;
  const POSITION_MIN_SIZE = 10;
  const URL_MAX_SIZE = 100;
  const URL_MIN_SIZE = 10;
  const DESCRIPTION_MAX_SIZE = 790;
  const DESCRIPTION_MIN_SIZE = 100;
  const QUOTE_MAX_SIZE = 200;
  const QUOTE_MIN_SIZE = 50;

  const [name, setName, nameError, handleNameError] = useValidation({
    fieldName: 'name',
    minSize: NAME_MIN_SIZE,
    maxSize: NAME_MAX_SIZE,
    type: 'letters',
    required: true,
  });

  const [position, setPosition, positionError, handlePositionError] =
    useValidation({
      fieldName: 'position',
      minSize: POSITION_MIN_SIZE,
      maxSize: POSITION_MAX_SIZE,
      type: 'letters',
      required: true,
    });

  const [image, setImage, imageError, handleImageError] = useValidation({
    fieldName: 'image',
    minSize: URL_MIN_SIZE,
    maxSize: URL_MAX_SIZE,
    type: 'letters',
    required: true,
  });

  const [linkedIn, setLinkedIn, linkedInError, handleLinkedInError] =
    useValidation({
      fieldName: 'linkedIn',
      minSize: URL_MIN_SIZE,
      maxSize: URL_MAX_SIZE,
      type: 'letters',
      required: true,
    });

  const [
    description,
    setDescription,
    descriptionError,
    handleDescriptionError,
  ] = useValidation({
    fieldName: 'description',
    minSize: DESCRIPTION_MIN_SIZE,
    maxSize: DESCRIPTION_MAX_SIZE,
    type: 'letters',
    required: true,
  });

  const [quote, setQuote, quoteError, handleQuoteError] = useValidation({
    fieldName: 'quote',
    minSize: QUOTE_MIN_SIZE,
    maxSize: QUOTE_MAX_SIZE,
    type: 'letters',
    required: true,
  });

  const onNameChange = (e) => setName(e.target.value);
  const onPositionChange = (e) => setPosition(e.target.value);
  const onImageChange = (e) => setImage(e.target.value);
  const onLinkedInChange = (e) => setLinkedIn(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onQuoteChange = (e) => setQuote(e.target.value);

  const handleTeammateSubmit = (e) => {
    e.preventDefault();
    if (!name || !position || !image || !linkedIn || !description || !quote) {
      handleNameError();
      handlePositionError();
      handleImageError();
      handleLinkedInError();
      handleDescriptionError();
      handleQuoteError();
      return;
    }
    if (
      !(
        nameError ||
        positionError ||
        imageError ||
        linkedInError ||
        descriptionError ||
        quoteError
      )
    ) {
      services.Partner.createPartner({
        name,
        position,
        image,
        linkedIn,
        description,
        quote,
      });
      navigate('/about');
    }
  };

  return (
    <div className="biography">
      <form
        className={
          darkMode ? 'teammate__card teammate__card--dark' : 'teammate__card'
        }
      >
        <div className="teammate__form">
          <label className={darkMode ? 'label label--dark' : 'label'}>
            Name
          </label>
          <input
            className={
              darkMode
                ? 'connect__input connect__input--dark'
                : 'connect__input'
            }
            name="name"
            type="text"
            placeholder="Enter teammate name"
            value={name}
            onBlur={handleNameError}
            onChange={onNameChange}
          />
          <label className={darkMode ? 'label label--dark' : 'label'}>
            Position
          </label>
          <input
            className={
              darkMode
                ? 'connect__input connect__input--dark'
                : 'connect__input'
            }
            name="position"
            type="text"
            placeholder="Enter teammate position"
            value={position}
            onBlur={handlePositionError}
            onChange={onPositionChange}
          />
          <label className={darkMode ? 'label label--dark' : 'label'}>
            Image
          </label>
          <input
            className={
              darkMode
                ? 'connect__input connect__input--dark'
                : 'connect__input'
            }
            name="image"
            type="text"
            placeholder="Enter image URL"
            value={image}
            onBlur={handleImageError}
            onChange={onImageChange}
          />
          <label className={darkMode ? 'label label--dark' : 'label'}>
            LinkedIn
          </label>
          <input
            className={
              darkMode
                ? 'connect__input connect__input--dark'
                : 'connect__input'
            }
            name="linkedIn"
            type="text"
            placeholder="Enter LinkedIn URL"
            value={linkedIn}
            onBlur={handleLinkedInError}
            onChange={onLinkedInChange}
          />
          <label className={darkMode ? 'label label--dark' : 'label'}>
            Description
          </label>
          <textarea
            className={
              darkMode
                ? 'connect__input connect__input--dark'
                : 'connect__input'
            }
            name="description"
            type="text"
            placeholder="Enter teammate description"
            value={description}
            onBlur={handleDescriptionError}
            onChange={onDescriptionChange}
          />
          <label className={darkMode ? 'label label--dark' : 'label'}>
            Quote
          </label>
          <textarea
            className={
              darkMode
                ? 'connect__input connect__input--dark'
                : 'connect__input'
            }
            name="quote"
            type="text"
            placeholder="Enter teammate favorite quote"
            value={quote}
            onBlur={handleQuoteError}
            onChange={onQuoteChange}
          />
        </div>
        <div className="teammate__buttons">
          <Button
            className={
              darkMode
                ? 'btn__primary btn__primary--dark addTeam__btn'
                : 'btn__primary addTeam__btn'
            }
            content="save"
            content2="save"
            onSubmit={handleTeammateSubmit}
          />
          <Button
            className={
              darkMode
                ? 'btn__secondary btn__secondary--dark addTeam__btn'
                : 'btn__secondary addTeam__btn'
            }
            content="cancel"
            content2="cancel"
            onClick={onCloseModal}
          />
        </div>
      </form>
    </div>
  );
};

export default Teammate;
