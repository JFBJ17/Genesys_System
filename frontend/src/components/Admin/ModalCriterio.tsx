import React, { ChangeEvent, useRef } from 'react'
import * as ctgaServices from '../../services/criterio';
import { toast } from 'react-toastify';
import { Categoria } from '../../interfaces/categoria.interface';
import { Criterio } from '../../interfaces/criterio.interface';

interface Props {
    initialStateDataModal: object;
    initialState: object;
    setCriterio: any;
    criterio: Criterio;
    category: Array<Categoria>;
    data: any;
    modalBtn: boolean;
    setData: any;
    setModalBtn: (active: boolean) => void;
    reloadTable?: () => void;
}

function ModalCriterio(props: Props) {

    const btnCloseRef = useRef<HTMLButtonElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        props.setCriterio({
            ...props.criterio,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (props.data.id_Categoria) {
            const res = await ctgaServices.editCriterio(props.criterio, props.data.id_Criterio);
            toast.success(res.data.message);
            props.setData(props.initialStateDataModal)
            props.reloadTable();
            btnCloseRef.current.click();
            return;
        }
        try {
            const res = await ctgaServices.addCriterio(props.criterio);
            toast.success(res.data.message);
            props.setCriterio(props.initialState);
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
                        <h5 className="modal-title" id="staticBackdropLabel">{props.modalBtn ? "Agregar Criterio" : "Editar Criterio"}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                            props.setModalBtn(true);
                            props.setCriterio(props.initialState)
                        }} />
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre" className="form-control" value={props.criterio.nombre} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descripcion">Descripción</label>
                            <textarea name="descripcion" id="descripcion" className="form-control" value={props.criterio.descripcion} rows={10} onChange={handleChange}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="porcentaje">Porcentaje(%)</label>
                            <input type="number" value={props.criterio.porcentaje} name="porcentaje" min={0} max={100} className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <select name="id_Categoria" value={props.criterio.id_Categoria} className="form-select" aria-label="Default select example" onChange={handleChange}>
                                {
                                    props.category.map(element => {
                                        return (
                                            <option key={element.id_Categoria} value={element.id_Categoria}>{element.nombre}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={() => {
                                props.setModalBtn(true);
                                props.setCriterio(props.initialState);
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

export default ModalCriterio