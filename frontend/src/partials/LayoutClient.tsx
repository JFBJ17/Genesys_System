import React from "react";

//Components
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import MenuLateral from "../components/MenuLateral";

// Toastify
import { ToastContainer } from 'react-toastify';

const LayoutClient: React.FC = ({ children, ...rest }) => {
  return (
    <>
      <ToastContainer theme={"colored"} />
      <Navbar />
      <MenuLateral />
      {children}
      <Footer />
    </>
  );
};



export default LayoutClient
