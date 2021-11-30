import axios from "axios";
import { Criterio } from "../interfaces/criterio.interface";

const API = process.env.REACT_APP_API;

export const addCriterio = (criterio: Criterio) => {
    return axios.post(`${API}criterio`, criterio);
}

export const allCriterio = () => {
    return axios.get<Criterio[]>(`${API}criterio`);
}

export const deleteCriterio = (id: string) => {
    return axios.delete(`${API}criterio/${id}`);
}

export const editCriterio = (criterio: Criterio, id: string) => {
    return axios.put(`${API}criterio/${id}`, criterio);
}