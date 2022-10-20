import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../Context/DarkModeContext';
import useValidation from '../../hooks/useValidation';
import services from '../../services/services';
import CommonButton from '../CommonButton/CommonButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

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
    type: 'all',
    required: true,
  });

  const [linkedIn, setLinkedIn, linkedInError, handleLinkedInError] =
    useValidation({
      fieldName: 'linkedIn',
      minSize: URL_MIN_SIZE,
      maxSize: URL_MAX_SIZE,
      type: 'all',
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
    type: 'all',
    required: true,
  });

  const [quote, setQuote, quoteError, handleQuoteError] = useValidation({
    fieldName: 'quote',
    minSize: QUOTE_MIN_SIZE,
    maxSize: QUOTE_MAX_SIZE,
    type: 'all',
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
      services.Teammate.createTeammate({
        name,
        position,
        image,
        linkedIn,
        description,
        quote,
      });
      onCloseModal();
    }
  };

  return (
    <div className="biography">
      <form
        onSubmit={handleTeammateSubmit}
        className={
          darkMode ? 'teammate__card teammate__card--dark' : 'teammate__card'
        }
      >
        {/* <div className="teammate__form"> */}
        <label
          className={
            darkMode ? 'label label--name label--dark' : 'label label--name'
          }
        >
          Name
        </label>
        <input
          className={
            darkMode
              ? 'connect__input input--name connect__input--dark'
              : 'connect__input input--name'
          }
          name="name"
          type="text"
          placeholder="Enter teammate name"
          value={name}
          onBlur={handleNameError}
          onChange={onNameChange}
        />
        {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
        <label
          className={
            darkMode
              ? 'label label--position label--dark'
              : 'label label--position'
          }
        >
          Position
        </label>
        <input
          className={
            darkMode
              ? 'connect__input input--position connect__input--dark'
              : 'connect__input input--position'
          }
          name="position"
          type="text"
          placeholder="Enter teammate position"
          value={position}
          onBlur={handlePositionError}
          onChange={onPositionChange}
        />
        {positionError && <ErrorMessage>{positionError}</ErrorMessage>}
        <label
          className={
            darkMode ? 'label label--image label--dark' : 'label label--image'
          }
        >
          Image
        </label>
        <input
          className={
            darkMode
              ? 'connect__input input--image connect__input--dark'
              : 'connect__input input--image'
          }
          name="image"
          type="text"
          placeholder="Enter image URL"
          value={image}
          onBlur={handleImageError}
          onChange={onImageChange}
        />
        {imageError && <ErrorMessage>{imageError}</ErrorMessage>}
        <label
          className={
            darkMode
              ? 'label label--linkedin label--dark'
              : 'label label--linkedin'
          }
        >
          LinkedIn
        </label>
        <input
          className={
            darkMode
              ? 'connect__input input--linkedin connect__input--dark'
              : 'connect__input input--linkedin'
          }
          name="linkedIn"
          type="text"
          placeholder="Enter LinkedIn URL"
          value={linkedIn}
          onBlur={handleLinkedInError}
          onChange={onLinkedInChange}
        />
        {linkedInError && <ErrorMessage>{linkedInError}</ErrorMessage>}
        <label
          className={
            darkMode ? 'label label--bio label--dark' : 'label label--bio'
          }
        >
          Biography
        </label>
        <textarea
          className={
            darkMode
              ? 'connect__input input--bio connect__input--dark'
              : 'connect__input input--bio'
          }
          name="description"
          type="text"
          placeholder="Enter teammate biography"
          value={description}
          onBlur={handleDescriptionError}
          onChange={onDescriptionChange}
        />
        {descriptionError && <ErrorMessage>{descriptionError}</ErrorMessage>}
        <label
          className={
            darkMode ? 'label label--quote label--dark' : 'label label--quote'
          }
        >
          Quote
        </label>
        <textarea
          className={
            darkMode
              ? 'connect__input input--quote connect__input--dark'
              : 'connect__input input--quote'
          }
          name="quote"
          type="text"
          placeholder="Enter teammate favorite quote"
          value={quote}
          onBlur={handleQuoteError}
          onChange={onQuoteChange}
        />
        {quoteError && <ErrorMessage>{quoteError}</ErrorMessage>}
        {/* </div> */}
        {/* <div className="teammate__buttons"> */}
        <CommonButton className="common__btn--primary btn--add" type="submit">
          Save
        </CommonButton>
        <CommonButton
          className="common__btn--secondary btn--close"
          onClick={onCloseModal}
        >
          Cancel
        </CommonButton>
        {/* </div> */}
      </form>
    </div>
  );
};

export default Teammate;
