//Components
import { AiOutlineCheckCircle } from 'react-icons/ai';
//Style
import '../assets/styles/register.scss';

const Register = () => {
  return (
    <div className='register-container'>
      <div className='register'>
        <h2>Registrarse</h2>
        <form action=''>
          <div className='input-box'>
            <AiOutlineCheckCircle className='icon' color='#818181' />
            <input
              className='input-field'
              type='text'
              placeholder='Nombre'
            />
          </div>
          <div className='input-box'>
            <AiOutlineCheckCircle className='icon' color='#818181' />
            <input
              className='input-field'
              type='email'
              placeholder='Email'
            />
          </div>
          <div className='input-box'>
            <AiOutlineCheckCircle className='icon' color='#818181' />
            <input
              className='input-field'
              type='password'
              placeholder='Contraseña'
            />
          </div>
          <div className='input-box'>
            <AiOutlineCheckCircle className='icon' color='#818181' />
            <input
              className='input-field'
              type='password'
              placeholder='Repetir Contraseña'
            />
          </div>

          <button type='submit'>Registrar mi cuenta</button>
        </form>
        <p>
          Al registrarse, usted acepta nuestros Términos y
          Condiciones.
        </p>
      </div>
    </div>
  );
};

export default Register;
