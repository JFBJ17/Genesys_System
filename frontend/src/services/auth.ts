import axios from 'axios';
import { Usuario } from '../interfaces/auth.interface'

const API = process.env.REACT_APP_API;

// Cliente
export const userRegister = async (data: Usuario) => {
    return await axios.post(`${API}signup`, data, { withCredentials: true });
}

export const signin = async (data: Usuario) => {
    return await axios.post(`${API}signin`, data, { withCredentials: true });
}

export const signOff = async () => {
    return await axios.get(`${API}logout`, { withCredentials: true });
}

// Administrador
export const signinAdm = async (data: Usuario) => {
    return await axios.post(`${API}signinAdm`, data, { withCredentials: true });
}

export const signOffAdm = async () => {
    return await axios.get(`${API}logoutAdm`, { withCredentials: true });
}