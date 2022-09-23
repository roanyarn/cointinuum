import { useContext } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import services from '../../services/services';
import useValidation from '../../hooks/useValidation';
import AuthCard from '../../components/AuthCard/AuthCard';
import Button from '../../components/Button/Button';

import './Login.scss';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  const NAME_MAX_SIZE = 50;
  const NAME_MIN_SIZE = 2;
  const EMAIL_MAX_SIZE = 50;
  const EMAIL_MIN_SIZE = 9;
  const PASSWORD_MAX_SIZE = 18;
  const PASSWORD_MIN_SIZE = 6;

  const [name, setName, nameError, handleNameError] = useValidation({
    fieldName: 'name',
    minSize: NAME_MIN_SIZE,
    maxSize: NAME_MAX_SIZE,
    type: 'letters',
    required: true,
  });

  const [email, setEmail, emailError, handleEmailError] = useValidation({
    fieldName: 'email',
    minSize: EMAIL_MIN_SIZE,
    maxSize: EMAIL_MAX_SIZE,
    type: 'email',
    required: true,
  });

  const [password, setPassword, passwordError, handlePasswordError] =
    useValidation({
      fieldName: 'password',
      minSize: PASSWORD_MIN_SIZE,
      maxSize: PASSWORD_MAX_SIZE,
      type: 'all',
      required: true,
    });

  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      handleNameError();
      handleEmailError();
      handlePasswordError();
      return;
    }
    if (!(nameError || emailError || passwordError)) {
      services.Auth.createUser({ name, email, password }).then((obj) => {
        localStorage.setItem('token', JSON.stringify(obj.token));
        navigate('/');
      });
    }
  };

  return (
    <div className={darkMode ? 'login login--dark' : 'login'}>
      <AuthCard
        className={darkMode ? 'auth__card auth__card--dark' : 'auth__card'}
      >
        <form className="login__form" onSubmit={handleRegisterSubmit}>
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
            placeholder="Enter your name"
            value={name}
            onChange={onNameChange}
            onBlur={handleNameError}
          />
          {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
          <label className={darkMode ? 'label label--dark' : 'label'}>
            Email
          </label>
          <input
            className={
              darkMode
                ? 'connect__input connect__input--dark'
                : 'connect__input'
            }
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={onEmailChange}
            onBlur={handleEmailError}
          />
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          <label className={darkMode ? 'label label--dark' : 'label'}>
            Password
          </label>
          <input
            className={
              darkMode
                ? 'connect__input connect__input--dark'
                : 'connect__input'
            }
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={onPasswordChange}
            onBlur={handlePasswordError}
          />
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          <Button
            className={darkMode ? 'btn__secondary' : 'btn__primary'}
            content="Register"
            content2="Register"
            type="submit"
          />
        </form>
      </AuthCard>
    </div>
  );
};

export default Register;
