import React from 'react'
import { Link } from 'react-router-dom';
import { RiLogoutCircleFill } from 'react-icons/ri';
import * as authAdm from '../../services/auth';

function Navbar() {

    const closeAdm = async () => {
        const res = await authAdm.signOffAdm();
        if (res.data.success) return window.location.href = "/dashboard/login";
    }

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="'#" role="button"><i className="fas fa-bars" /></a>
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" data-widget="fullscreen" to="#" role="button">
                        <i className="fas fa-expand-arrows-alt" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link d-flex justify-content-center align-items-center" data-widget="control-sidebar" data-slide="true" to="#" role="button" onClick={closeAdm}>
                        <RiLogoutCircleFill className="fs-4" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
