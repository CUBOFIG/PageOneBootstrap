import React from "react";

const SWeb = () => (
  <article className="container text-center">
    <h2>
      ¿Necesitas un nuevo <b>Sitio WEB</b>?
    </h2>
    <p className="u-flowText">
      Elaboro experiencias en linea, hermosas y actractivas.
    </p>
    <div
      id="carouselExampleControls"
      className="carousel slide pt-3"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={require("../../../IMG/p1.png")}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src={require("../../../IMG/p2.png")}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src={require("../../../IMG/p3.png")}
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </article>
);

export default SWeb;
