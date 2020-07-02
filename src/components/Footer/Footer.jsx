import React from "react";

import "../../index.css";

const Footer = () => (
  <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-second p-0">
    <div className="container">
      <a className="navbar-brand p-0" href="#d">
        <img src={require("../../IMG/Sin título-5.png")} alt="CUBE STUDIO" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item p-2">
            <a className="nav-link" href="#Hola">
              Hola
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link" href="#Sitios">
              Sitios
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link" href="#Clientes">
              Clientes
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link" href="#Flujo">
              Flujo
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link" href="#Packs">
              Packs
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link" href="#Interesado">
              ¿Interesado?
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Footer;
