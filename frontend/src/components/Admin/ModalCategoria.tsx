import React, { ChangeEvent, useState, useRef } from 'react'
import * as ctgaServices from '../../services/categoria';
import { toast } from 'react-toastify';

interface Props {
    title: string;
    enviar: string;
    reloadTable?: () => void;
}

function ModalCategoria(props: Props) {

    const initialState = {
        nombre: '',
        descripcion: '',
    }

    const [producto, setProducto] = useState(initialState);
    const btnCloseRef = useRef<HTMLButtonElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await ctgaServices.addCategory(producto);
        toast.success(res.data.message);
        setProducto(initialState);
        props.reloadTable();
        btnCloseRef.current.click();
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form className="modal-content" onSubmit={handleSubmit}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre" className="form-control" value={producto.nombre} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descripcion">Descripción</label>
                            <textarea name="descripcion" id="descripcion" className="form-control" value={producto.descripcion} rows={10} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={btnCloseRef}>Cerrar</button>
                        <button type="submit" className="btn btn-primary">{props.enviar}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalCategoria