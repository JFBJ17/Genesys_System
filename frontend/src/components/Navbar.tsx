import { useEffect, useRef } from 'react';
//Router
import { Link } from 'react-router-dom';

//Assets
import '../assets/styles/navbar.scss';
import logoIcon from '../assets/img/logo.png';
import { useUsuario } from '../context/user-context';

// Services
import * as Auth from '../services/auth';

const Navbar = () => {

  // REFERENCES
  const btnPerfil = useRef<HTMLImageElement>(null);
  const menuPerfil = useRef<HTMLUListElement>(null);

  // STATES
  const { usuario } = useUsuario();

  const visibleBox = (e: MouseEvent) => {
    if (e.target === btnPerfil.current) {
      return menuPerfil.current.classList.toggle("d-none");
    }

    if (e.target !== menuPerfil.current) {
      if (menuPerfil.current) {
        return menuPerfil.current.classList.add("d-none");
      }
    }
  }

  const handleClose = async () => {
    const res = await Auth.signOff();
    if (res.data.success) return window.location.href = "/";
  }

  useEffect(() => {
    document.addEventListener("click", visibleBox, true);
    return () => {
      document.removeEventListener("click", visibleBox, true);
    }
  })


  return (
    <header>
      <Link to='/'>
        <img className='logo' src={logoIcon} alt='logo de Genesys' />
      </Link>
      <ul>
        {
          usuario ?
            <>
              <li className='link'>
                <span>{usuario.username}</span>
              </li>
              <li className="perfil-link">
                <img src="https://picsum.photos/50" alt="perfil" ref={btnPerfil} />
                <ul className="desplegable rounded py-2 d-none" ref={menuPerfil}>
                  <li><Link to="/profile" className="fs-5">Perfil</Link></li>
                  <li className="w-100"><hr className="dropdown-divider" /></li>
                  <li><Link to="#" className="fs-5 mx-1" role="button" onClick={handleClose}>Salir</Link></li>
                </ul>
              </li>
            </>
            :
            <>
              <li className='link login-link'>
                <Link to='/login'>Iniciar Sesión</Link>
              </li>
              <li className='link'>
                <Link to='/register'>Registrarse</Link>
              </li>
            </>
        }
      </ul>
    </header>
  );
};

export default Navbar;
