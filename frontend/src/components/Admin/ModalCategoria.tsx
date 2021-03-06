import React, { ChangeEvent, useRef } from 'react'
import * as ctgaServices from '../../services/categoria';
import { toast } from 'react-toastify';
import { Categoria } from '../../interfaces/categoria.interface';

interface Props {
    initialStateDataModal: object;
    initialState: object;
    setProducto: any;
    producto: Categoria;
    data: any;
    modalBtn: boolean;
    setData: any;
    setModalBtn: (active: boolean) => void;
    reloadTable?: () => void;
}

function ModalCategoria(props: Props) {

    const btnCloseRef = useRef<HTMLButtonElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        props.setProducto({
            ...props.producto,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (props.data.id_Categoria) {
            const res = await ctgaServices.editCategory(props.producto, props.data.id_Categoria);
            toast.success(res.data.message);
            props.setData(props.initialStateDataModal)
            props.reloadTable();
            btnCloseRef.current.click();
            return;
        }
        try {
            const res = await ctgaServices.addCategory(props.producto);
            toast.success(res.data.message);
            props.setProducto(props.initialState);
            props.reloadTable();
            btnCloseRef.current.click();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form className="modal-content" onSubmit={handleSubmit}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{props.modalBtn ? "Agregar Categoría" : "Editar Categoría"}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                            props.setModalBtn(true);
                            props.setProducto(props.initialState)
                        }} />
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre" className="form-control" value={props.producto.nombre} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descripcion">Descripción</label>
                            <textarea name="descripcion" id="descripcion" className="form-control" value={props.producto.descripcion} rows={10} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={() => {
                                props.setModalBtn(true);
                                props.setProducto(props.initialState);
                            }}
                            ref={btnCloseRef}
                        >
                            Cerrar
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            {props.modalBtn ? "Agregar" : "Editar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalCategoria