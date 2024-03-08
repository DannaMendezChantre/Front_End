import React from "react";
import './styles/animate.css'; 
import './styles/foodhut.css'; 
import './styles/themify-icons.css'

function Index() {
    return(
<div>
  <header id="home" className="header">
    <div className="overlay text-white text-center">
      <h1 className="display-2 font-weight-bold my-3">La Pescadería
      </h1>
      <h2 className="display-4 mb-5">Tú controlas la orden</h2>
      <a className="btn btn-lg btn-primary" href="#foods">Menú</a>
    </div>
  </header>
  {/*  About Section  */}
  <div id="about" className="container-fluid wow fadeIn" data-wow-duration="1.5s">
    <div className="row">
      <div className="col-lg-6 has-img-bg" />
      <div className="col-lg-6">
        <div className="row justify-content-center">
          <div className="col-sm-8 py-5 my-5">
            <h2 className="mb-4">¿Quienes somos?</h2>
            <p>La Pescadería es una cadena de restaurantes especializada en cocina del mar. Ofrecemos una experiencia gastronómica única y de calidad, en la que el producto fresco es el protagonista indiscutible. Trabajamos con proveedores locales comprometidos con la pesca sostenible, y contamos con un equipo humano apasionado por la gastronomía. En La Pescadería, nos esforzamos por hacer que cada visita sea única e inolvidable.</p>
          </div>
        </div>
      </div>
    </div>
    {/* BLOG Section  */}
    <div id="blog" className="container-fluid bg-dark text-light py-5 text-center wow fadeIn">
      <h2 className="section-title py-5">Menú</h2>
      <div className="row justify-content-center">
        <div className="col-sm-7 col-md-4 mb-5">
          <ul className="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#foods" role="tab" aria-controls="pills-home" aria-selected="true">Comidas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#juices" role="tab" aria-controls="pills-profile" aria-selected="false">Bebidas</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="foods" role="tabpanel" aria-labelledby="pills-home-tab">
          <div className="row">
            <div className="col-md-4">
              <div className="card bg-transparent border my-3 my-md-0">
                <img src="assets/imgs/blog-1.png" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
                <div className="card-body">
                  <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$38.000</a></h1>
                  <h4 className="pt20 pb20">Salmón </h4>
                  <p className="text-white">Salmón acompañado de papas a la francesa, arroz, patacón, ensalada y consomé.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-transparent border my-3 my-md-0">
                <img src="assets/imgs/blog-2.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
                <div className="card-body">
                  <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$20.000</a></h1>
                  <h4 className="pt20 pb20">Ceviche de camarón</h4>
                  <p className="text-white">Ceviche acompañado de platano, galletas saladas y consomé. </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-transparent border my-3 my-md-0">
                <img src="assets/imgs/blog-3.jpeg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
                <div className="card-body">
                  <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$28.000</a></h1>
                  <h4 className="pt20 pb20">Mojarra frita</h4>
                  <p className="text-white">Mojarra acompañada de papas a la francesa, patacón, ensalada y consomé. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="juices" role="tabpanel" aria-labelledby="pills-profile-tab">
          <div className="row">
            <div className="col-md-4 my-3 my-md-0">
              <div className="card bg-transparent border">
                <img src="assets/imgs/blog-4.jpeg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
                <div className="card-body">
                  <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$8.000</a></h1>
                  <h4 className="pt20 pb20">Limonada de coco</h4>
                  <p className="text-white">Sumérgete en una explosión de sabores tropicales con cada sorbo de nuestra deliciosa Limonada de Coco.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3 my-md-0">
              <div className="card bg-transparent border">
                <img src="assets/imgs/blog-5.jpeg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
                <div className="card-body">
                  <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$8.000</a></h1>
                  <h4 className="pt20 pb20">Limonada de hierbabuena</h4>
                  <p className="text-white">Refresca tu paladar con nuestra deliciosa limonada de hierbabuena. Un equilibrio perfecto entre el sabor cítrico de los limones frescos y el toque refrescante de la hierbabuena.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3 my-md-0">
              <div className="card bg-transparent border">
                <img src="assets/imgs/blog-6.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
                <div className="card-body">
                  <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$8.000</a></h1>
                  <h4 className="pt20 pb20">Cerezada</h4>
                  <p className="text-white">Sumérgete en una explosión de sabor con nuestra deliciosa bebida 'Cerezada'. Una mezcla refrescante de jugo de cereza natural y toques cítricos que te cautivarán desde el primer sorbo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>                  
    {/* REVIEWS Section  */}
    <div id="testmonial" className="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
      <h2 className="section-title my-5 text-center">Reseñas</h2>
      <div className="row mt-3 mb-5">
        <div className="col-md-4 my-3 my-md-0">
          <div className="testmonial-card">
            <h3 className="testmonial-title">Laura Camila</h3>
            <div className="testmonial-body">
              <p>Buen lugar para ir con la familia, ¡100% recomendado!</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-3 my-md-0">
          <div className="testmonial-card">
            <h3 className="testmonial-title">Paola Tovar</h3>
            <div className="testmonial-body">
              <p>Es un sitio acogedor, cuenta con parqueadero y siguen los protocolos de seguridad. Los platos y sus porciones son generosos, tienen precios  asequibles y una muy biena atención al cliente.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-3 my-md-0">
          <div className="testmonial-card">
            <h3 className="testmonial-title">Maluma</h3>
            <div className="testmonial-body">
              <p>Buen restaurante, el establecimiento es agradable, tienen servicio de parqueadero y ofrecen decoración para fechas especiales, además tiene sillas para niños. El personal atento y dispuesto en cuanto al servicio, en general es una buena opción para comer en este sector.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi página web</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <style dangerouslySetInnerHTML={{__html: "\n        .help-button {\n            position: fixed;\n            bottom: 20px;\n            right: 20px;\n            z-index: 9999;\n            width: 50px;\n            height: 50px;\n            border-radius: 50%;\n            background-color: #007bff;\n            color: #fff;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 24px;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n            transition: background-color 0.3s;\n        }\n\n        .help-button:hover {\n            background-color: #ff0000;\n            cursor: pointer;\n        }\n    " }} />
    {/* Resto del código HTML */}
    {/* Contenido de la página */}
    {/* Botón de ayuda */}
    <a href="ayuda.html" className="help-button">
      <span>?</span>
    </a>
    {/* Resto del código HTML */}
    {/* Scroll to top */}
    <div className="scroll-top">
      <a className="smoothscroll" href="#home"><i className="fa fa-angle-up" /></a>
    </div>
    {/* jQuery first, then Popper.js, then Bootstrap JS */}
    {/* Script para mostrar la ayuda */}
    {/* CONTACT Section  */}
    <div id="contact" className="container-fluid bg-dark text-light border-top wow fadeIn">
      <div className="row">
        <div className="col-md-6 px-0">
          <div id="map" style={{width: '100%', height: '100%', minHeight: 400}} />
        </div>
        <div className="col-md-6 px-5 has-height-lg middle-items">
          <h3>Encuentranos</h3>
          <p>Puedes encontrarnos en Carrera 69 #31-33 sur, Bogotá, Colombia </p>
          <h4>Horarios</h4>
          <p>Lunes 11:00-19:00
            Martes 11:00-19:00
            Miércoles 11:00-19:00
            Jueves 11:00-19:00
            Viernes 11:00-19:00
            Sábado 11:00-19:00
            Domingo 11:00-19:00</p>
          <div className="text-muted">
            <p><span className="ti-location-pin pr-3" />Carrera 69 #31-33 Sur</p>
            <p><span className="ti-support pr-3" />+57 320 3383443</p>
          </div>
        </div>
      </div>
    </div>
    {/* page footer  */}
    <div className="container-fluid bg-dark text-light has-height-md middle-items border-top text-center wow fadeIn">
      <div className="row">
        <div className="col-sm-4">
          <h3>Llámanos</h3> 
          <p className="text-muted">+57 320 3383443</p>
        </div>
        <div className="col-sm-4">
          <h3>Encuentranos</h3>  
          <p className="text-muted">Carrera 69 #31-33 sur, Bogotá, Colombia</p>
        </div>
        <div className="col-sm-4">
          <h3>¿Necesitas ayuda?</h3>  
          <p className="text-muted">Utiliza nuestro servicio de ayuda ubicada en la parte derecha de la pantalla de color azul.</p>
        </div>
      </div>
      <div className="bg-dark text-light text-center border-top wow fadeIn">
        <p className="mb-0 py-3 text-muted small">© Copyright  Made with <i className="ti-heart text-danger" /> By <a href="https://youtu.be/mCdA4bJAGGk">Orden Brivs</a></p>
      </div>
      {/* end of page footer */}
      {/* core  */}
      {/* bootstrap affix */}
      {/* wow.js */}
      {/* google maps */}
      {/* FoodHut js */}
    </div></div></div>

    );
}

export default Index;