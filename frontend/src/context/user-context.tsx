import React, { useState, useEffect, useMemo, PropsWithChildren } from 'react';
import axios from 'axios';

const usuarioContext = React.createContext<any>({});
const API = process.env.REACT_APP_API;

export function UsuarioProvider(props: PropsWithChildren<any>) {
    const [usuario, setUsuario] = useState<any>();

    const getUser = async () => {
        try {
            const res = await axios.get(`${API}whoami`, { withCredentials: true });
            if (!res.data.message) {
                setUsuario(res.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    const value = useMemo(() => {
        return ({
            usuario
        });
    }, [usuario]);

    return <usuarioContext.Provider value={value}>{props.children}</usuarioContext.Provider>
}

export function useUsuario() {
    const context = React.useContext(usuarioContext);
    if (!context) throw new Error('useUsuario debe estar dentro del proveedor UsuarioContext');
    return context;
}