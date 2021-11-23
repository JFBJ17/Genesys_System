// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages Client
import Home from '../pages/Client/Home';
import Login from '../pages/Client/Login';
import Register from '../pages/Client/Register';
import NotFound from '../pages/NotFound';
import ReporteCompras from '../pages/Client/ReporteCompras';

// Pages Admin
import AdminLogin from '../pages/Admin/AdminLogin';
import DashboardProductos from '../pages/Admin/DashboardProductos'

// Style
import '../assets/styles/index.scss';

// Toastify
import { ToastContainer } from 'react-toastify';

// Layouts
import LayoutClient from '../partials/LayoutClient';
import LayoutAdmin from './../partials/LayoutAdmin';
import DashboardCategoria from '../pages/Admin/DashboardCategoria';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <LayoutClient>
            <Home />
          </LayoutClient>
        } />
        <Route path='/login' element={
          <LayoutClient>
            <Login />
          </LayoutClient>
        } />
        <Route path='/register' element={
          <LayoutClient>
            <Register />
          </ LayoutClient>
        } />
        <Route path='/ReporteCompras' element={
          <LayoutClient>
            <ReporteCompras />
          </LayoutClient>
        } />
        <Route path='dashboard' element={
          <LayoutAdmin>
            <DashboardProductos />
          </LayoutAdmin>
        } />
        <Route path='dashboard/categorias' element={
          <LayoutAdmin>
            <DashboardCategoria />
          </LayoutAdmin>
        } />
        <Route path='/dashboard/login' element={
          <>
            <ToastContainer theme={"colored"} />
            <AdminLogin />
          </>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
