import React from "react";
import { Route } from "react-router-dom";

// Componentes
import NavBar from "../components/Navbar";

const LayoutClient: React.FC = ({ children, ...rest }) => {
  return (
    <>
      {children}
    </>
  );
};



export default LayoutClient
