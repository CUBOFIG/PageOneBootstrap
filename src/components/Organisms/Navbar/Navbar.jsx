import React from "react";

import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-second p-0">
    <div className="container">
      <a className="navbar-brand pt-1 " href="#Hola">
        <img
          src={require("../../../IMG/Sin título-5.png")}
          className="PaddingNavLogo"
          alt="CUBE STUDIO"
        />
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
        <ul className="navbar-nav mr-auto">
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
        <ul className="navbar-nav ml-auto">
          <li className="nav-item p-2">
            <a className="nav-link s" href="#Packs">
              Ingresar
            </a>
          </li>
          <li className=" p-2">
            <button
              type="button"
              href="s"
              className="btn btn-lg bg-suc text-white border-0"
            >
              Registrate
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
