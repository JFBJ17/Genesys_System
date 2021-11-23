import React from 'react';
import Aside from '../components/Admin/Aside';
import Navbar from '../components/Admin/Navbar';
import Footer from '../components/Admin/Footer';
import { ToastContainer } from 'react-toastify';

const LayoutAdmin: React.FC = ({ children, ...rest }) => {
    return (
        <div className="wrapper">
            <ToastContainer theme={"colored"} />
            <Navbar />
            <Aside />
            <div className="content-wrapper">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default LayoutAdmin
