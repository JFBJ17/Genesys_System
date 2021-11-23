import React from 'react'
import ContentHeader from '../../components/Admin/ContentHeader';
import ModalProducto from '../../components/Admin/ModalProducto';

function DashboardProductos() {
    return (
        <>
            <ContentHeader title="Productos" />
            <div className="content">
                <div className="container-fluid">
                    <div className="row justify-content-end">
                        <div className="col-md-3">
                            <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar Producto</button>
                        </div>
                        <div className="col-md-3 mt-2 mt-md-0 mt-lg-0">
                            <button className="btn btn-info w-100">Ver Reporte</button>
                        </div>
                    </div>
                    <ModalProducto title="Agregar Producto" enviar="Enviar"/>
                </div>
            </div>
        </>
    )
}

export default DashboardProductos
