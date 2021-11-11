import React from 'react'
import "../assets/styles/listproduct.scss"

interface Props {
    title: string;
    url?: string;
    price: number;
}

function ListProduct(props: Props) {
    return (
        <div className="card card-container mx-auto">
            <div className="card-header">
                <h3>{props.title}</h3>
            </div>
            <div className="card-body">
                <img className="img-card" src="https://picsum.photos/70/40" alt="producto" />
                <span className="fw-bold d-block my-3">Precio: ${props.price}</span>
                <button className="btn btn-success d-block w-100">Agregar</button>
            </div>
        </div>
    )
}

export default ListProduct
