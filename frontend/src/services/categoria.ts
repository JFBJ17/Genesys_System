import axios from "axios";
import { Categoria } from '../interfaces/categoria.interface'

const API = process.env.REACT_APP_API;

export const addCategory = (categoria: Categoria) => {
    return axios.post(`${API}category`, categoria);
}

export const allCategory = () => {
    return axios.get<Categoria[]>(`${API}category`);
}

export const deleteCategory = (id: string) => {
    return axios.delete(`${API}category/${id}`);
}

export const editCategory = (categoria: Categoria, id: string) => {
    return axios.put(`${API}category/${id}`, categoria);
}