import '../../assets/styles/home.scss';
import ListProduct from '../../components/ListProduct';

const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="w-75 h-50 fw-bold fs-1 text-uppercase container-welcome">
          <span className="text-center">Bienvenido a nuestra tienda</span>
          <a href="#main" className="btn btn-warning mt-2">Empieza a comprar</a>
        </div>
      </div>
      <div className="container-fluid my-5 px-5" id="main">
        <div className="row mb-4">
          <div className="col-12">
            <span className="title">Hardware</span>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-3 mb-4 mb-lg-0">
            <ListProduct title="Producto" price={5} />
          </div>
          <div className="col-md-3 mb-4 mb-lg-0">
            <ListProduct title="Producto" price={5} />
          </div>
          <div className="col-md-3 mb-4 mb-lg-0">
            <ListProduct title="Producto" price={5} />
          </div>
          <div className="col-md-3 mb-4 mb-lg-0">
            <ListProduct title="Producto" price={5} />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-warning btn-ver">Ver más</button>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <span className="title">Software</span>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-3 mb-4 mb-lg-0">
            <ListProduct title="Producto" price={5} />
          </div>
          <div className="col-md-3 mb-4 mb-lg-0">
            <ListProduct title="Producto" price={5} />
          </div>
          <div className="col-md-3 mb-4 mb-lg-0">
            <ListProduct title="Producto" price={5} />
          </div>
          <div className="col-md-3 mb-4 mb-lg-0">
            <ListProduct title="Producto" price={5} />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-warning btn-ver">Ver más</button>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <span className="title">Servicios</span>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-3 mb-4 mb-lg-0">
            <ListProduct title="Producto" price={5} />
          </div>
          <div className="col-md-3 mb-4 mb-lg-0">
            <ListProduct title="Producto" price={5} />
          </div>
          <div className="col-md-3 mb-4 mb-lg-0">
            <ListProduct title="Producto" price={5} />
          </div>
          <div className="col-md-3 mb-4 mb-lg-0">
            <ListProduct title="Producto" price={5} />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-warning btn-ver">Ver más</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
