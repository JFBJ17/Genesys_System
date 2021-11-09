//Router
import { Link } from 'react-router-dom';

//Assets
import '../assets/styles/navbar.scss';
import logoIcon from '../assets/img/logo.png';

const Navbar = () => {
  return (
    <header>
      <Link to='/'>
        <img className='logo' src={logoIcon} alt='logo de Genesys' />
      </Link>
      <ul>
        <li className='link'>
          <Link to='/login'>Iniciar Sesión</Link>
        </li>
        <li className='link'>
          <Link to='/register'>Registrarse</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
