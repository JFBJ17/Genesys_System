import React, { useEffect, useRef, useState } from 'react'
import ContentHeader from '../../components/Admin/ContentHeader';
import MaterialTable from 'material-table';
import TableIcons from '../../components/Admin/TableIcons';
import * as ctgraServicesCriterio from '../../services/criterio';
import * as ctgraServicesCategory from '../../services/categoria';
import { Categoria } from '../../interfaces/categoria.interface'
import { toast } from 'react-toastify';
import ModalCriterio from '../../components/Admin/ModalCriterio';
import { Criterio } from '../../interfaces/criterio.interface';

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
        title: 'Porcentaje(%)',
        type: 'numeric',
        field: 'porcentaje',
        align: 'right'
    },
    {
        title: 'Descripción',
        field: 'descripcion'
    }
]

function DashboardCriterios() {

    const initialState = {
        nombre: '',
        descripcion: '',
        porcentaje: 0,
        id_Categoria: 0
    }

    const initialStateDataModal = {
        descripcion: '',
        nombre: '',
        porcentaje: 0,
        id_Criterio: 0
    }

    // States
    const [criterio, setCriterio] = useState(initialState);
    const [category, setCategory] = useState<Categoria[]>([]);
    const [criterioList, setCriterioList] = useState<Criterio[]>([]);
    const [modalBtn, setModalBtn] = useState(true);
    const [showDataModal, setShowDataModal] = useState(initialStateDataModal);

    // References
    const btnModalRef = useRef<HTMLButtonElement>(null);

    const getCategory = async () => {
        try {
            const res = await ctgraServicesCategory.allCategory();
            setCategory(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getCriterio = async () => {
        try {
            const res = await ctgraServicesCriterio.allCriterio();
            setCriterioList(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const editAction = (e: React.MouseEvent, rowData: any) => {
        setModalBtn(false);
        setCriterio({
            ...criterio,
            nombre: rowData.nombre,
            descripcion: rowData.descripcion,
            porcentaje: rowData.porcentaje,
            id_Categoria: rowData.id_Categoria
        });
        setShowDataModal(rowData);
        console.log(category);
        btnModalRef.current.click();
    }

    useEffect(() => {
        getCategory();
        getCriterio();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ContentHeader title="Criterios" />
            <div className="content">
                <div className="container-fluid">
                    <div className="row mb-4 justify-content-between">
                        <div className="col-md-3">
                            <select className="form-select w-100" aria-label="Default select example">
                                {
                                    category.map(element => {
                                        return (
                                            <option key={element.id_Categoria} value={element.id_Categoria}>{element.nombre}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ref={btnModalRef}>Agregar Criterio</button>
                                </div>
                                <div className="col-md-6">
                                    <button type="button" className="btn btn-info w-100">Ver Reporte</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MaterialTable
                        title="Tabla de criterios"
                        icons={TableIcons}
                        columns={columnas}
                        data={criterioList}
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
                                    const res = await ctgraServicesCriterio.deleteCriterio(rowData.id_Criterio);
                                    await getCriterio();
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
                    <ModalCriterio
                        initialStateDataModal={initialStateDataModal}
                        initialState={initialState}
                        setCriterio={setCriterio}
                        criterio={criterio}
                        category={category}
                        setData={setShowDataModal}
                        data={showDataModal}
                        modalBtn={modalBtn}
                        setModalBtn={setModalBtn}
                        reloadTable={getCriterio}
                    />
                </div>
            </div>
        </>
    )
}

export default DashboardCriterios
