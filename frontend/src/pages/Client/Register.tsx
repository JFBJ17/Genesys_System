//Components
import { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { toast } from 'react-toastify'

//Style
import '../../assets/styles/register.scss';

// Services
import * as Auth from '../../services/auth'

const Register = () => {

  const initialState = {
    username: '',
    email: '',
    password: '',
    verifyPassword: ''
  }
  const [userRegister, setUserRegister] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegister({
      ...userRegister,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await Auth.userRegister(userRegister);
    if (res.data.success) {
      return window.location.href = "/"
    } else {
      toast.error(res.data.info.message);
    }
  }

  return (
    <div className='align-box'>
      <div className='register-container'>
        <div className='register'>
          <h2>Registrarse</h2>
          <form onSubmit={handleSubmit}>
            <div className='input-box'>
              <AiOutlineCheckCircle
                className='icon'
                color='#818181'
              />
              <input
                className='input-field'
                type='text'
                name="username"
                placeholder='Nombre'
                onChange={handleChange}
              />
            </div>
            <div className='input-box'>
              <AiOutlineCheckCircle
                className='icon'
                color='#818181'
              />
              <input
                className='input-field'
                type='email'
                name="email"
                placeholder='Email'
                onChange={handleChange}
              />
            </div>
            <div className='input-box'>
              <AiOutlineCheckCircle
                className='icon'
                color='#818181'
              />
              <input
                className='input-field'
                type='password'
                name="password"
                placeholder='Contraseña'
                onChange={handleChange}
              />
            </div>
            <div className='input-box'>
              <AiOutlineCheckCircle
                className='icon'
                color='#818181'
              />
              <input
                className='input-field'
                type='password'
                name='verifyPassword'
                placeholder='Repetir Contraseña'
                onChange={handleChange}
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
    </div>
  );
};

export default Register;
