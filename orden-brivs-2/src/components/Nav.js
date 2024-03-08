import React from "react";
import {Link} from "react-router-dom";

const Nav = () =>{
    return (
    <nav className="custom-navbar navbar navbar-expand-lg navbar-dark fixed-top" data-spy="affix" data-offset-top={10}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#home">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">Sobre nosotros</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="staff">Empleado</a> <span className="sr-only">(current)</span>
      </li>
    </ul>
    <a className="navbar-brand m-auto" href="#">
      <img src="assets/imgs/logo.png" className="brand-img" alt />
      <span className="brand-txt">La Pescadería</span>
    </a>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="admin">Administrador</a> <span className="sr-only">(current)</span>
        <li className="nav-item"><link to="/LoginAdmin" className="nav-link me-lg-3">Administrador</link></li>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#blog">Menú<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#testmonial">Opiniones</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contáctanos</a>
      </li></ul>
  </div>
</nav>

    )
}

export default Nav;