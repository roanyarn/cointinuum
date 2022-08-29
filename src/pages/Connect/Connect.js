import { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { DarkModeContext } from '../../Context/DarkModeContext';
import Title from '../../components/Title/Title';
import EventCard from '../../components/EventCard/EventCard';
import Button from '../../components/Button/Button';
import BlogCard from '../../components/BlogCard/BlogCard';
import blogData from '../../data/blogData';
import eventsData from '../../data/eventsData';
import socialMediaData from '../../data/socialMediaData';
import emailjs from 'emailjs-com';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import './Connect.scss';
import useValidation from '../../hooks/useValidation';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Connect = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const EMAIL_MIN_SIZE = 2;
  const EMAIL_MAX_SIZE = 100;
  const NAME_MIN_SIZE = 2;
  const NAME_MAX_SIZE = 50;
  const SUBJECT_MIN_SIZE = 3;
  const SUBJECT_MAX_SIZE = 50;
  const DESCRIPTION_MIN_SIZE = 3;
  const DESCRIPTION_MAX_SIZE = 50;
  const MESSAGE_MIN_SIZE = 2;
  const MESSAGE_MAX_SIZE = 1500;

  const [email, setEmail, emailError, handleEmailError] = useValidation({
    fieldName: 'email',
    minSize: EMAIL_MIN_SIZE,
    maxSize: EMAIL_MAX_SIZE,
    type: 'email',
    required: true,
  });

  const [name, setName, nameError, handleNameError] = useValidation({
    fieldName: 'name',
    minSize: NAME_MIN_SIZE,
    maxSize: NAME_MAX_SIZE,
    type: 'letters',
    required: true,
  });

  const [subject, setSubject, subjectError, handleSubjectError] = useValidation(
    {
      fieldName: 'subject',
      minSize: SUBJECT_MIN_SIZE,
      maxSize: SUBJECT_MAX_SIZE,
      type: 'letters',
      required: true,
    }
  );

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

  const [message, setMessage, messageError, handleMessageError] = useValidation(
    {
      fieldName: 'message',
      minSize: MESSAGE_MIN_SIZE,
      maxSize: MESSAGE_MAX_SIZE,
      type: 'all',
      required: true,
    }
  );

  const onEmailChange = (e) => setEmail(e.target.value);
  const onNameChange = (e) => setName(e.target.value);
  const onSubjectChange = (e) => setSubject(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onMessageChange = (e) => setMessage(e.target.value);

  useEffect(() => {
    const getEmail = () => {
      if (isEmailSent) {
        setTimeout(() => {
          setIsEmailSent(false);
        }, 10000);
      }
    };
    getEmail();
  }, [isEmailSent]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!email || !name || !subject || !description || !message) {
      handleEmailError();
      handleNameError();
      handleSubjectError();
      handleDescriptionError();
      handleMessageError();
      return;
    }
    if (
      !(
        emailError ||
        nameError ||
        subjectError ||
        descriptionError ||
        messageError
      )
    ) {
      setIsEmailSent(true);
      emailjs
        .sendForm(
          'service_2a5rols',
          'template_dm0k2b3',
          e.target,
          '0NbLq2er2L3Kmif5k'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setEmail('');
      setName('');
      setSubject('');
      setDescription('');
      setMessage('');
    }
  };

  const onBlogClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={darkMode ? 'connect connect__dark' : 'connect'}>
      <Title
        title="Join the Cointinuum Community"
        paragraph="Cointinuum Connect is a vibrant hub for real estate professionals, community investors, crypto holders, and believers alike! Looking to learn more about CTM and BRX? Connect with our community today."
      />
      <div
        className={
          darkMode
            ? 'connect__image--container connect__image--container--dark'
            : 'connect__image--container'
        }
      >
        {socialMediaData.map(({ id, name, url, image }) => {
          return (
            <a key={id} href={url} target="_blank" rel="noreferrer">
              <img
                className={
                  darkMode
                    ? 'connect__image connect__image--dark'
                    : 'connect__image'
                }
                src={image}
                alt={name}
              />
            </a>
          );
        })}
      </div>
      <h1 className="connect__title">The Latest from Our Blog</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          310: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: -115,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: -115,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {blogData
          .reverse()
          .map(({ id, title, paragraph, date, image, url }) => {
            return (
              <SwiperSlide>
                <BlogCard
                  key={id}
                  title={title}
                  paragraph={paragraph}
                  date={date}
                  image={image}
                  onClick={() => onBlogClick(url)}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <h1 className="connect__title">Upcoming Events</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          310: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1020: {
            slidesPerView: 4,
            spaceBetween: -100,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {eventsData.map(({ id, title, subTitle, time, day, month, image }) => {
          return (
            <SwiperSlide>
              <EventCard
                key={id}
                title={title}
                subTitle={subTitle}
                day={day}
                month={month}
                time={time}
                image={image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Title title="Send Us a Message" />
      {!isEmailSent ? (
        <form className="connect__form" onSubmit={sendEmail}>
          <input
            name="email"
            className={
              darkMode
                ? 'connect__input connect__input--dark'
                : 'connect__input'
            }
            type="email"
            placeholder="Email"
            value={email}
            onBlur={handleEmailError}
            onChange={onEmailChange}
          />
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          <div className="connect__name">
            <div className="input__name">
              <input
                name="name"
                className={
                  darkMode
                    ? 'connect__input connect__input--dark'
                    : 'connect__input'
                }
                type="text"
                placeholder="Name"
                value={name}
                onBlur={handleNameError}
                onChange={onNameChange}
              />
              {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
            </div>
            <div className="input__name">
              <input
                name="subject"
                className={
                  darkMode
                    ? 'connect__input connect__input--dark'
                    : 'connect__input'
                }
                type="text"
                placeholder="Subject"
                value={subject}
                onBlur={handleSubjectError}
                onChange={onSubjectChange}
              />
              {subjectError && <ErrorMessage>{subjectError}</ErrorMessage>}
            </div>
          </div>
          <input
            name="description"
            className={
              darkMode
                ? 'connect__input connect__input--dark'
                : 'connect__input'
            }
            type="text"
            placeholder="Who are you? (eg. enthusiast, real estate agent, nonprofit organization, etc.)"
            value={description}
            onBlur={handleDescriptionError}
            onChange={onDescriptionChange}
          />
          {descriptionError && <ErrorMessage>{descriptionError}</ErrorMessage>}
          <textarea
            name="message"
            className={
              darkMode
                ? 'connect__input connect__input--dark'
                : 'connect__input'
            }
            cols="30"
            rows="10"
            placeholder="Message"
            value={message}
            onBlur={handleMessageError}
            onChange={onMessageChange}
          />
          {messageError && <ErrorMessage>{messageError}</ErrorMessage>}
          <p>
            If you would like to recive periodic communications from Cointinuum
            about upcoming events, product launches, airdrops, and more, please
            check the box below:
          </p>
          <p>
            <input type="checkbox" className="connect__checkbox"></input>
            <label form="connect__checkbox">
              I agree to recieve newsletters from Cointinuum and the Bit Real
              Estate Exchange.
            </label>
          </p>
          <Button
            className="btn__secondary"
            content="Send"
            content2="Send"
            type="submit"
          />
        </form>
      ) : (
        <h1 className="connect__message--success">
          We have received your message.
        </h1>
      )}
    </div>
  );
};

export default Connect;
