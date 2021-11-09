import React from 'react'
import '../assets/styles/reporteCompras.scss';
import { BsFillCartFill } from "react-icons/bs";

const ReporteCompras = () => {
    return (
        <>
            <div className="container-dir d-flex flex-row justify-content-end align-items-center p-3">
                <a href="/ReporteCompras">
                    <h5 className="me-2 my-auto">
                        Inicio /
                    </h5>
                </a>
                <a href="/ReporteCompras">
                    <h5 className="me-2 my-auto text-decoration-underline">
                        Reporte de Compras
                    </h5>
                </a>
                <a href="/ReporteCompras">
                <BsFillCartFill className="fs-3"></BsFillCartFill>
                </a>
                
            </div>
            <div className="container-fluid container-reporte">
                <h3 className="fw-bold text-decoration-underline ms-5">
                    Reporte de Compras
                </h3>

                <div className="container-fluid history mt-5">

                </div>
                <div className="container-button__download">
                    <button type="submit">
                        <span>Descargar Reporte</span>
                    </button>
                </div>
            </div>

        </>
    );
};
export default ReporteCompras
