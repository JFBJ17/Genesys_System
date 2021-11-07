import { Fragment } from 'react';
//Style
import '../assets/styles/login.scss';

const Login = () => {
  return (
    <Fragment>
      <div className='login-container'>
        <div
          className={`picture background_${Math.floor(
            Math.random() * 3 + 1
          )}`}
        />
        <div className='login'>
          <p>acá te logeas</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
