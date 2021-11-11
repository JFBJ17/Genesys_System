import React from "react";
import Footer from "../components/Footer";

//Components
import Navbar from '../components/Navbar';

const LayoutClient: React.FC = ({ children, ...rest }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};



export default LayoutClient
