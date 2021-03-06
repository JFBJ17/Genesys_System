import React, { useEffect, useState, useRef } from 'react'
import ContentHeader from '../../components/Admin/ContentHeader';
import ModalCategoria from '../../components/Admin/ModalCategoria';
import MaterialTable from 'material-table';
import TableIcons from '../../components/Admin/TableIcons';
import * as ctgraServices from '../../services/categoria';
import { Categoria } from '../../interfaces/categoria.interface'
import { toast } from 'react-toastify';

const columnas: object[] = [
    {
        title: 'Codigo',
        field: 'id_Categoria',
        type: 'numeric',
        align: 'center'
    },
    {
        title: 'Nombre',
        field: 'nombre'
    },
    {
        title: 'Descripción',
        field: 'descripcion'
    }
]

function DashboardCategoria() {

    const initialState = {
        nombre: '',
        descripcion: '',
    }

    const initialStateDataModal = {
        descripcion: '',
        nombre: '',
        id_Categoria: 0
    }

    // States
    const [producto, setProducto] = useState(initialState);
    const [category, setCategory] = useState<Categoria[]>([]);
    const [modalBtn, setModalBtn] = useState(true);
    const [showDataModal, setShowDataModal] = useState(initialStateDataModal);

    // References
    const btnModalRef = useRef<HTMLButtonElement>(null);

    const getCategory = async () => {
        const res = await ctgraServices.allCategory();
        setCategory(res.data);
    }

    const editAction = (e: React.MouseEvent, rowData: any) => {
        setModalBtn(false);
        setProducto({
            ...producto,
            nombre: rowData.nombre,
            descripcion: rowData.descripcion
        });
        setShowDataModal(rowData);
        btnModalRef.current.click();
    }

    useEffect(() => {
        getCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ContentHeader title="Categorias" />
            <div className="content">
                <div className="container-fluid">
                    <div className="row mb-4">
                        <div className="col-md-3">
                            <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ref={btnModalRef}>Agregar Categoria</button>
                        </div>
                    </div>
                    <MaterialTable
                        title="Tabla de categorias"
                        icons={TableIcons}
                        columns={columnas}
                        data={category}
                        actions={[
                            {
                                icon: TableIcons.Edit,
                                tooltip: 'Editar',
                                onClick: (e, rowData: any) => editAction(e, rowData)
                            },
                            {
                                icon: TableIcons.Delete,
                                tooltip: 'Eliminar',
                                onClick: async (e, rowData: any) => {
                                    const res = await ctgraServices.deleteCategory(rowData.id_Categoria);
                                    await getCategory();
                                    toast.error(res.data.message);
                                }
                            }
                        ]}
                        options={
                            {
                                actionsColumnIndex: -1
                            }
                        }
                        localization={
                            {
                                header: {
                                    actions: 'Acciones'
                                }
                            }
                        }
                    />
                    <ModalCategoria
                        initialStateDataModal={initialStateDataModal}
                        initialState={initialState}
                        setProducto={setProducto}
                        producto={producto}
                        setData={setShowDataModal}
                        data={showDataModal}
                        modalBtn={modalBtn}
                        setModalBtn={setModalBtn}
                        reloadTable={getCategory}
                    />
                </div>
            </div>
        </>
    )
}

export default DashboardCategoria
