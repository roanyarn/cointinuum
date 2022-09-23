import { useContext, useState } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import services from '../../services/services';
import useValidation from '../../hooks/useValidation';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import AuthCard from '../../components/AuthCard/AuthCard';
import Button from '../../components/Button/Button';

import './Login.scss';

const Login = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [token, setToken] = useState('');

  const EMAIL_MAX_SIZE = 50;
  const EMAIL_MIN_SIZE = 9;
  const PASSWORD_MAX_SIZE = 18;
  const PASSWORD_MIN_SIZE = 6;

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

  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      handleEmailError();
      handlePasswordError();
      return;
    }
    if (!(emailError || passwordError)) {
      services.Auth.loginUser({ email, password }).then((obj) => {
        console.log(obj);
        localStorage.setItem('token', JSON.stringify(obj.token));
      });
    }
  };

  return (
    <div className={darkMode ? 'login login--dark' : 'login'}>
      <AuthCard
        className={darkMode ? 'auth__card auth__card--dark' : 'auth__card'}
      >
        <form className="login__form" onSubmit={handleLoginSubmit}>
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
            content="Login"
            content2="Login"
            type="submit"
          />
        </form>
      </AuthCard>
    </div>
  );
};

export default Login;
