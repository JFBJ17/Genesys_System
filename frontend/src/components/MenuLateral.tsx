import React, { useRef } from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io"
import { CgClose } from "react-icons/cg"
import { MdMenuOpen } from "react-icons/md"
import { Link } from 'react-router-dom'

import "../assets/styles/menuLateral.scss"

function MenuLateral() {

    const menuRef = useRef<HTMLDivElement>(null);
    const arrowMenuRef = useRef<HTMLDivElement>(null);

    const handleClose = () => {
        menuRef.current.classList.add("d-none");
        arrowMenuRef.current.classList.remove("d-none");
    }

    const handleOpen = () => {
        menuRef.current.classList.remove("d-none");
        arrowMenuRef.current.classList.add("d-none");
    }

    return (
        <>
            <div className="arrow-menu d-none" ref={arrowMenuRef} onClick={handleOpen}>
                <MdMenuOpen />
            </div>
            <div className="container-menu" ref={menuRef}>
                <div className="w-100 text-end px-4 pt-2">
                    <CgClose className="text-white fs-4" style={{ cursor: "pointer" }} onClick={handleClose} />
                </div>
                <ul className="text-white">
                    <li className="w-75 mb-3"><Link className="text-white" to="/">Inicio</Link></li>
                    <li className="w-75 mb-3">
                        <div className="w-100 d-flex justify-content-between">
                            Productos
                            <IoIosArrowDropdownCircle className="fs-4" />
                        </div>
                    </li>
                    <li className="w-75 mb-3">
                        <div className="w-100 d-flex justify-content-between">
                            Servicios
                            <IoIosArrowDropdownCircle className="fs-4" />
                        </div>
                    </li>
                    <li className="w-75 mb-3">
                        <div className="w-100 d-flex justify-content-between">
                            Calificar
                            <IoIosArrowDropdownCircle className="fs-4" />
                        </div>
                    </li>
                    <li className="w-75 mb-3"><Link className="text-white" to="/about">Sobre Nosotros</Link></li>
                    <li className="w-75 mb-3"><Link className="text-white" to="/contact">Contactanos</Link></li>
                </ul>
            </div>
        </>
    )
}

export default MenuLateral
