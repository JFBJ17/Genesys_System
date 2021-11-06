//Router
import { Link } from 'react-router-dom';

//Assets
import '../assets/styles/navbar.scss';
import logoIcon from '../assets/img/logoIcon.png';

const Navbar = () => {
  return (
    <header>
      <Link to='/'>
        <img className='logo' src={logoIcon} alt='logo de Genesys' />
      </Link>
      <ul>
        <li>Iniciar Sesión</li>
        <li>Registrarse</li>
      </ul>
    </header>
  );
};

export default Navbar;
