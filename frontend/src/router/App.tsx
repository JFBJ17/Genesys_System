//Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import ReporteCompras from '../pages/ReporteCompras';

//Components
import Navbar from '../components/Navbar';

//Style
import '../assets/styles/index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/ReporteCompras' element={<ReporteCompras/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
