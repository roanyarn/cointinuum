import { useContext } from 'react';
import AuthCard from '../../components/AuthCard/AuthCard';
import Button from '../../components/Button/Button';
import { DarkModeContext } from '../../Context/DarkModeContext';

import './Login.scss';

const Register = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'login login--dark' : 'login'}>
      <AuthCard
        className={darkMode ? 'auth__card auth__card--dark' : 'auth__card'}
      >
        <form className="login__form">
          <label className={darkMode ? 'label label--dark' : 'label'}>
            Name
          </label>
          <input
            className={
              darkMode
                ? 'connect__input connect__input--dark'
                : 'connect__input'
            }
            type="text"
            placeholder="Enter your name"
          />
          <label className={darkMode ? 'label label--dark' : 'label'}>
            Email
          </label>
          <input
            className={
              darkMode
                ? 'connect__input connect__input--dark'
                : 'connect__input'
            }
            type="text"
            placeholder="Enter your email"
          />
          <label className={darkMode ? 'label label--dark' : 'label'}>
            Password
          </label>
          <input
            className={
              darkMode
                ? 'connect__input connect__input--dark'
                : 'connect__input'
            }
            type="text"
            placeholder="Enter your password"
          />
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

export default Register;
