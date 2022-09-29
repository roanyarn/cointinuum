import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
import { DarkModeContext } from '../../Context/DarkModeContext';
import { BsTwitter } from 'react-icons/bs';
import { BsReddit } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import Cointinuum from '../../images/logo/Wordmark.png';
import emailjs from 'emailjs-com';
import Privacy from '../../Documents/privacy.pdf';
import Whitepaper from '../../Documents/whitepaper.pdf';
import Legal from '../../Documents/legal.pdf';
import useValidation from '../../hooks/useValidation';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Rarible from '../../images/socialMedia/Rarible-white.png';
import Button from '../Button/Button';

import './Footer.scss';

const Footer = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { darkMode, toggleDiversity, toggleRoadmap } =
    useContext(DarkModeContext);

  const EMAIL_MAX_SIZE = 100;
  const EMAIL_MIN_SIZE = 2;

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail, emailError, handleEmailError] = useValidation({
    fieldName: 'email',
    minSize: EMAIL_MIN_SIZE,
    maxSize: EMAIL_MAX_SIZE,
    type: 'email',
    required: true,
  });

  const onEmailChange = (e) => setEmail(e.target.value);

  window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1132) {
      document.getElementsByName('email')[0].placeholder = 'Sign up';
    } else {
      document.getElementsByName('email')[0].placeholder =
        'Want to stay involved? Sign up for our newsletter here!';
    }
  });

  useEffect(() => {
    const resetEmailInput = () => {
      if (isEmailSent) {
        setTimeout(() => {
          setIsEmailSent(false);
          setEmail('');
        }, 6000);
      }
    };
    resetEmailInput();
  }, [isEmailSent, setEmail, token]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!email) {
      handleEmailError();
      return;
    }
    if (!emailError) {
      setIsEmailSent(!isEmailSent);
      emailjs
        .sendForm(
          'service_n8zxugq',
          'template_5tayh5e',
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
    }
    return;
  };

  const windowWidth = window.innerWidth;

  const onBlogClick = () => {
    navigate('/connect');
    if (windowWidth > 1919) {
      window.scrollTo({ top: 600, behavior: 'smooth' });
    } else if (windowWidth > 1359) {
      window.scrollTo({ top: 700, behavior: 'smooth' });
    } else if (windowWidth > 1023) {
      window.scrollTo({ top: 700, behavior: 'smooth' });
    } else if (windowWidth > 599) {
      window.scrollTo({ top: 700, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 800, behavior: 'smooth' });
    }
  };

  const onEventsClick = () => {
    navigate('/connect');
    if (windowWidth > 1919) {
      window.scrollTo({ top: 1300, behavior: 'smooth' });
    } else if (windowWidth > 1359) {
      window.scrollTo({ top: 1500, behavior: 'smooth' });
    } else if (windowWidth > 1023) {
      window.scrollTo({ top: 1500, behavior: 'smooth' });
    } else if (windowWidth > 599) {
      window.scrollTo({ top: 1500, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 1800, behavior: 'smooth' });
    }
  };

  const onContactClick = () => {
    navigate('/connect');
    if (windowWidth > 1919) {
      window.scrollTo({ top: 2000, behavior: 'smooth' });
    } else if (windowWidth > 1359) {
      window.scrollTo({ top: 2200, behavior: 'smooth' });
    } else if (windowWidth > 1023) {
      window.scrollTo({ top: 2220, behavior: 'smooth' });
    } else if (windowWidth > 599) {
      window.scrollTo({ top: 2220, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 2480, behavior: 'smooth' });
    }
  };

  const onDiversityClick = () => {
    toggleDiversity();
    navigate('/about');
    if (windowWidth > 1919) {
      window.scrollTo({ top: 1500, behavior: 'smooth' });
    } else if (windowWidth > 1359) {
      window.scrollTo({ top: 1700, behavior: 'smooth' });
    } else if (windowWidth > 1023) {
      window.scrollTo({ top: 2220, behavior: 'smooth' });
    } else if (windowWidth > 599) {
      window.scrollTo({ top: 2460, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 3400, behavior: 'smooth' });
    }
  };

  const onRoadmapClick = () => {
    toggleRoadmap();
    navigate('/investments');
    if (windowWidth > 1919) {
      window.scrollTo({ top: 900, behavior: 'smooth' });
    } else if (windowWidth > 1359) {
      window.scrollTo({ top: 750, behavior: 'smooth' });
    } else if (windowWidth > 1023) {
      window.scrollTo({ top: 600, behavior: 'smooth' });
    } else if (windowWidth > 599) {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const onFAQClick = () => {
    navigate('/FAQ');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onInvestClick = () => {
    navigate('/investments');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onWhitepaperClick = () => {
    window.open(Whitepaper, '_blank');
  };

  const onLegalClick = () => {
    window.open(Legal, '_blank');
  };

  const onCareersClick = () => {
    window.open('https://www.linkedin.com/company/cointinuum/jobs/', '_blank');
  };

  const onRegisterClick = () => {
    navigate('/register');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onLogoutClick = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const onLoginClick = () => {
    navigate('/login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={darkMode ? 'footer footer--dark' : 'footer'}>
      <img className="footer__logo" src={Cointinuum} alt="cointinuum" />
      {!isEmailSent ? (
        <div className="footer__email">
          <form className="footer__email" onSubmit={sendEmail}>
            <input
              name="email"
              className="footer__input"
              type="email"
              placeholder="Sign up"
              value={email}
              onBlur={handleEmailError}
              onChange={onEmailChange}
            />
            <button className="footer__button">
              <BsArrowRightShort className="footer__arrow" />
            </button>
          </form>
          {emailError ? <ErrorMessage>{emailError}</ErrorMessage> : ''}
        </div>
      ) : (
        <h1 className="footer__message--success">
          We have received your message.
        </h1>
      )}
      <div className="footer__lists list__resources">
        <h1 className="footer__title">RESOURCES</h1>
        <ul className="footer__list">
          <li className="footer__item" onClick={onFAQClick}>
            FAQs
          </li>
          <li className="footer__item" onClick={onWhitepaperClick}>
            Whitepaper
          </li>
          <li className="footer__item" onClick={onDiversityClick}>
            Diversity Initiative
          </li>
          <li className="footer__item" onClick={onRoadmapClick}>
            Roadmap
          </li>
          <li className="footer__item" onClick={onLegalClick}>
            Legal
          </li>
        </ul>
      </div>
      <div className="footer__lists list__connect">
        <h1 className="footer__title">CONNECT</h1>
        <ul className="footer__list">
          <li className="footer__item" onClick={onBlogClick}>
            Blog
          </li>
          <li className="footer__item" onClick={onEventsClick}>
            Upcoming Events
          </li>
          <li className="footer__item" onClick={onContactClick}>
            Contact Us
          </li>
        </ul>
      </div>
      <div className="footer__lists list__getInvolved">
        <h1 className="footer__title">GET INVOLVED</h1>
        <ul className="footer__list">
          <li className="footer__item" onClick={onInvestClick}>
            Invest Now
          </li>
          <li className="footer__item" onClick={onCareersClick}>
            Careers
          </li>
        </ul>
      </div>
      <a
        className="footer__twitter"
        href="https://twitter.com/CointinuumBRX"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter className="footer__socialMedia" />
      </a>
      <a
        className="footer__reddit"
        href="https://www.reddit.com/r/cointinuum/"
        target="_blank"
        rel="noreferrer"
      >
        <BsReddit className="footer__socialMedia" />
      </a>
      <a
        className="footer__discord"
        href="https://discord.com/channels/893523482221101066/893523498939588631"
        target="_blank"
        rel="noreferrer"
      >
        <FaDiscord className="footer__socialMedia" />
      </a>
      <a
        className="footer__telegram"
        href="https://t.me/cointinuum"
        target="_blank"
        rel="noreferrer"
      >
        <BsTelegram className="footer__socialMedia" />
      </a>
      <a
        className="footer__instagram"
        href="https://www.instagram.com/cointinuum/"
        target="_blank"
        rel="noreferrer"
      >
        <GrInstagram className="footer__socialMedia" />
      </a>
      <a
        className="footer__linkedIn"
        href="https://www.linkedin.com/company/bit-real-estate-exchange"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="footer__socialMedia" />
      </a>
      <a
        className="footer__youtube"
        href="https://www.youtube.com/c/COINtinuum"
        target="_blank"
        rel="noreferrer"
      >
        <BsYoutube className="footer__socialMedia" />
      </a>
      <a
        className="footer__rarible"
        href="https://rarible.com/cointinuum/sale"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="footer__socialMedia footer__social-rarible"
          src={Rarible}
          alt="rarible"
        />
      </a>
      <p className="footer__copywrite">
        © 2022 Bit Real Estate Exchange |
        <a
          className="footer__privacy"
          href={Privacy}
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
      </p>
      {token ? (
        <div className="login__container">
          <Button
            className="btn__secondary"
            content="Register"
            content2="Register"
            onClick={onRegisterClick}
          />
          <Button
            className="btn__primary"
            content="Logout"
            content2="Logout"
            onClick={onLogoutClick}
          />
        </div>
      ) : (
        <button className="btn__login" onClick={onLoginClick}></button>
      )}
    </div>
  );
};

export default Footer;
