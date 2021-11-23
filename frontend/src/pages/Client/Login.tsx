import React, { useState } from 'react';

//Router
import { Link } from 'react-router-dom';

//Components
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify'

//Style
import '../../assets/styles/login.scss';

// Services
import * as Auth from '../../services/auth';

const Login = () => {

  const initialState = {
    email: '',
    password: ''
  }

  const [login, setLogin] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await Auth.signin(login);
    if (res.data.success) {
      return window.location.href = "/"
    } else {
      toast.error(res.data.info.message);
    }
  }

  return (
    <div className='main-container'>
      <div
        className={`picture background_${Math.floor(
          Math.random() * 3 + 1
        )}`}
      />
      <div className='login-container'>
        <div className='login'>
          <p className='greeting'>Bienvenido de nuevo</p>
          <h2 className='title'>Acceda a su cuenta</h2>
          <form onSubmit={handleSubmit}>
            <label className='input-label'>
              Email
              <input
                className='input-field'
                name="email"
                type='email'
                placeholder='usuario@correo.com'
                onChange={handleChange}
              />
            </label>
            <label className='input-label'>
              Contraseña
              <input
                className='input-field'
                name="password"
                type='password'
                placeholder='contraseña'
                onChange={handleChange}
              />
            </label>
            <div className='forgot-password'>
              <label>
                <input type='checkbox' className='checkbox' />
                Recordar contraseña
              </label>
              <Link className='password-link' to='/'>
                ¿Ha olvidado su contraseña?
              </Link>
            </div>
            <button type='submit'>Iniciar Sesión</button>
          </form>
          <button type='button' className='google'>
            <FcGoogle /> Iniciar Sesión con google
          </button>
          <p className='not-singed-up'>
            ¿No tiene una cuenta?{' '}
            <Link to='/register'>Únase gratis hoy mismo</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
