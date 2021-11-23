import React, { ChangeEvent, useState } from 'react'

interface Props {
    title: string;
    enviar: string;
}

function Modal(props: Props) {

    const initialState = {
        modelo: '',
        marca: '',
        id_Categoria: '',
        fecha_fabricacion: '',
        peso: '',
        garantia: ''
    }

    const [producto, setProducto] = useState(initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(producto);
        console.log('click');
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
                            <label htmlFor="modelo">Modelo</label>
                            <input type="text" name="modelo" id="modelo" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="marca">Marca</label>
                            <input type="text" name="marca" id="marca" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="categoria">Categoría</label>
                            <select className="form-select" id="categoria" name="id_Categoria" aria-label="Default select example" onChange={handleChange}>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fecha-fabricacion">Fecha de Fabricación</label>
                            <input type="date" name="fecha_fabricacion" id="fecha-fabricacion" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="peso">Peso (kg)</label>
                            <input type="number" name="peso" id="peso" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="garantia">Garantia (años)</label>
                            <input type="number" name="garantia" id="garantia" className="form-control" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="submit" className="btn btn-primary">{props.enviar}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
