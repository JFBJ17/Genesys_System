import React from "react";

//Components
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import MenuLateral from "../components/MenuLateral";

const LayoutClient: React.FC = ({ children, ...rest }) => {
  return (
    <>
      <Navbar />
      <MenuLateral />
      {children}
      <Footer />
    </>
  );
};



export default LayoutClient
