//Style
import '../assets/styles/register.scss';

const Register = () => {
  return (
    <div className='register-container'>
      <div className='register'>
        <h2>Registrarse</h2>
        <form action=''>
          <input type='text' placeholder='Nombre' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Contraseña' />
          <input type='password' placeholder='Repetir Contraseña' />
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
