import React from 'react';
import { Link } from 'react-router-dom';
import LogoDash from '../../assets/img/logoDash.png';
import AdminPerfil from '../../assets/img/AdminPerfil.png';
import { IoStorefrontSharp } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa';

function Aside() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                <img src={LogoDash} alt="Genesys System Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">Genesys System</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={AdminPerfil} className="img-circle elevation-2 bg-white" alt="Admin Perfil" />
                    </div>
                    <div className="info">
                        <Link to="'#" className="d-block">Administrador</Link>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <Link to="/dashboard/productos" className="nav-link">
                                <i className="nav-icon fas fa-th" />
                                <p>
                                    Productos
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard/sucursales" className="nav-link">
                                <IoStorefrontSharp className="nav-icon" />
                                <p>
                                    Sucursales
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                <i className="nav-icon fas fa-edit" />
                                <p>
                                    Evaluaciones
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="/dashboard/criterios" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Criterios</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/dashboard/categorias" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Categorias</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard/empleados" className="nav-link">
                                <FaUsers className="nav-icon" />
                                <p>
                                    Empleados
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard/encuesta-de-clientes" className="nav-link">
                                <i className="nav-icon fas fa-file" />
                                <p>
                                    Encuesta de clientes
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    )
}

export default Aside
