import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../assets/styles/Admin/Login.scss';
import { toast } from 'react-toastify'
import * as authAdm from '../../services/auth';

function AdminLogin() {

    const initialState = {
        email: '',
        password: ''
    }

    const [loginAdm, setLoginAdm] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginAdm({
            ...loginAdm,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await authAdm.signinAdm(loginAdm);
        if (res.data.success) {
            return window.location.href = "/dashboard"
        } else {
            toast.error(res.data.info.message);
        }
    }

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center px-3 p-lg-0" style={{ background: '#e9ecef' }}>
            {/* /.login-logo */}
            <div className="card card-outline card-primary card-size">
                <div className="card-header text-center">
                    <Link to="/" className="header-loginAdm"><b>Genesys</b>SYSTEM</Link>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">Inicia tu nueva sesión</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" name="email" placeholder="Email" onChange={handleChange} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* /.col */}
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
                            </div>
                            {/* /.col */}
                        </div>
                    </form>
                </div>
                {/* /.card-body */}
            </div>
            {/* /.card */}
        </div>

    )
}

export default AdminLogin
