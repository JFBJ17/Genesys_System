//Router
import { Link } from 'react-router-dom';

//Components
import { FcGoogle } from 'react-icons/fc';

//Style
import '../assets/styles/login.scss';

const Login = () => {
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
          <form action=''>
            <label className='input-label'>
              Email
              <input
                className='input-field'
                type='email'
                placeholder='usuario@correo.com'
              />
            </label>
            <label className='input-label'>
              Contraseña
              <input
                className='input-field'
                type='password'
                placeholder='contraseña'
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
            <Link to='/'>Únase gratis hoy mismo</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
