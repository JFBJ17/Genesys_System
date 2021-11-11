import React from 'react'
import {Link} from 'react-router-dom';
import '../assets/styles/reporteCompras.scss';
import { BsFillCartFill } from "react-icons/bs";
import DataTable from 'react-data-table-component';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const tablaCompras = [
    {
        id: 1,
        producto: "Laptop",
        categoria: "Hardware",
        fechaCompra: "07-05-2021",
        precio: "$25.99"
    },
    {
        id: 2,
        producto: "Impresora",
        categoria: "Hardware",
        fechaCompra: "03-06-2021",
        precio: "$20.99"
    },
    {
        id: 3,
        producto: "Usb",
        categoria: "Hardware",
        fechaCompra: "21-10-2021",
        precio: "$18.99"
    },
    {
        id: 4,
        producto: "Antivirus Ingenia",
        categoria: "Software",
        fechaCompra: "05-11-2021",
        precio: "$22.99"
    },
    {
        id: 5,
        producto: "Licencia Office",
        categoria: "Software",
        fechaCompra: "21-04-2021",
        precio: "$35.99"
    },
    {
        id: 6,
        producto: "Reparación de CPU",
        categoria: "Servicio",
        fechaCompra: "17-09-2021",
        precio: "$59.99"
    },
    {
        id: 7,
        producto: "Instalación de Office",
        categoria: "Servicio",
        fechaCompra: "21-02-2021",
        precio: "$25.99"
    },
    {
        id: 8,
        producto: "Mantenimiento de laptop",
        categoria: "Servicio",
        fechaCompra: "09-04-2021",
        precio: "$18.99"
    },
    {
        id: 9,
        producto: "Disco solido 500 GB",
        categoria: "Hardware",
        fechaCompra: "10-07-2021",
        precio: "$20.99"
    },
    {
        id: 10,
        producto: "Mouse Inalambrico Genius",
        categoria: "Hardware",
        fechaCompra: "19-03-2021",
        precio: "$9.99"
    },
    {
        id: 11,
        producto: "Laptop",
        categoria: "Hardware",
        fechaCompra: "07-05-2021",
        precio: "$25.99"
    },
    {
        id: 12,
        producto: "Impresora",
        categoria: "Hardware",
        fechaCompra: "03-06-2021",
        precio: "$20.99"
    },
    {
        id: 13,
        producto: "Usb",
        categoria: "Hardware",
        fechaCompra: "21-10-2021",
        precio: "$18.99"
    },
    {
        id: 14,
        producto: "Antivirus Ingenia",
        categoria: "Software",
        fechaCompra: "05-11-2021",
        precio: "$22.99"
    },
    {
        id: 15,
        producto: "Licencia Office",
        categoria: "Software",
        fechaCompra: "21-04-2021",
        precio: "$35.99"
    },
    {
        id: 16,
        producto: "Reparación de CPU",
        categoria: "Servicio",
        fechaCompra: "17-09-2021",
        precio: "$59.99"
    },
    {
        id: 17,
        producto: "Instalación de Office",
        categoria: "Servicio",
        fechaCompra: "21-02-2021",
        precio: "$25.99"
    },
    {
        id: 18,
        producto: "Mantenimiento de laptop",
        categoria: "Servicio",
        fechaCompra: "09-04-2021",
        precio: "$18.99"
    },
    {
        id: 19,
        producto: "Disco solido 500 GB",
        categoria: "Hardware",
        fechaCompra: "10-07-2021",
        precio: "$20.99"
    },
    {
        id: 20,
        producto: "Mouse Inalambrico Genius",
        categoria: "Hardware",
        fechaCompra: "19-03-2021",
        precio: "$9.99"
    }
]

const columnas = [
    {
        key: "id",
        name: "ID",
        selector: (row: any) => row.id,
        sortable: true
    },
    {
        key: "producto",
        name: "Producto",
        selector: (row: any) => row.producto,
        sortable: true
    },
    {
        key: "categoria",
        name: "Categoría",
        selector: (row: any) => row.categoria,
        sortable: true
    },
    {
        key: "fechaCompra",
        name: "Fecha de Compra",
        selector: (row: any) => row.fechaCompra,
        sortable: true
    },
    {
        key: "precio",
        name: "Precio",
        selector: (row: any) => row.precio,
        sortable: true
    }
]

const pageOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}

const customStyle = {
    headCells: {
        style: {
            fontWeight: 'bold',
            fontSize: '1rem'
        }
    }
}

const ReporteCompras = () => {

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text("Compras de productos", 20, 10);
        autoTable(doc, {
            body: tablaCompras,
            columns: columnas.map(col => ({ header: col.name, dataKey: col.key }))
        });
        doc.save("reporte de compras.pdf");
    }

    return (
        <>
            <div className="container-dir d-flex flex-row justify-content-end align-items-center p-3">
                <Link to="/ReporteCompras">
                    <h5 className="me-2 my-auto">
                        Inicio /
                    </h5>
                </Link>
                <Link to="/ReporteCompras">
                    <h5 className="me-2 my-auto text-decoration-underline">
                        Reporte de Compras
                    </h5>
                </Link>
                <a href="/ReporteCompras">
                <BsFillCartFill className="fs-3"></BsFillCartFill>
                </a>
                
            </div>
            <div className="container-fluid container-reporte">
                <h3 className="fw-bold text-decoration-underline ms-5">
                    Reporte de Compras
                </h3>
                <div className="container-button__download">
                    <button onClick={downloadPDF}>
                        <span>Descargar Reporte</span>
                    </button>
                </div>
                <div className="mx-auto p-2 history mt-5 mb-4 table-responsive">
                    <DataTable
                        columns={columnas}
                        data={tablaCompras}
                        pagination
                        paginationComponentOptions={pageOptions}
                        fixedHeader
                        fixedHeaderScrollHeight="600px"
                        customStyles={customStyle}
                    />
                </div>
            </div>

        </>
    );
};
export default ReporteCompras
