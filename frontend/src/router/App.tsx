//Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import ReporteCompras from '../pages/ReporteCompras';

//Style
import '../assets/styles/index.scss';
import LayoutClient from '../partials/LayoutClient';

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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
