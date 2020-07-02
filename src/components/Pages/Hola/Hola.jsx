import React from "react";
import "../../../index.css";

const Hola = () => (
  <section
    id="Hola"
    className="text-white d-flex justify-content-center align-items-center HImg u-fullScreen pt-6"
  >
    <div className="container ">
      <div className="row">
        <article className="col-12 col-lg-7">
          <h2>
            ¿Necesitas un <b>Sitio Web</b> a tu medida?
          </h2>
          <p className="u-flowText">
            Consigue un sitio con todo lo necesario para tu negocio, que sea
            hermoso, responsivo, personalizado y que te permita representar tu
            compañia, marca, negocio o servicio.
          </p>
          <a
            href="#Servicios"
            className="btn btn-lg active bg-succes text-white border-0 "
            role="button"
            aria-pressed="true"
          >
            Sí, ¡Empecemos!
          </a>
        </article>
        <article className="col-12 col-lg-5 ">
          <img
            src={require("../../../IMG/Sin título-4.png")}
            alt="web"
            className="img-fluid"
          />
        </article>
      </div>
    </div>
  </section>
);

export default Hola;
