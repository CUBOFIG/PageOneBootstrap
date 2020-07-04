import React from "react";

import "../../../index.css";
import "./Interesados.css";

const Interesados = () => (
  <section id="/contact" className="pt-5 Contact">
    <div className="container">
      <div className="row justify-content-lg-center align-items-lg-center">
        <article className="col-12 col-lg-7 text-center">
          <h3 className="mb-5">¿Interesado?</h3>
          <h4 className="mb-5">Enviame Tus comentarios</h4>
          <p>
            Para más informacion, puedes contactarme en{" "}
            <a href="mailto:hfigueroa@ucol.mx">hfigueroa@ucol.mx</a>
          </p>
        </article>
        <article className="col-12 col-lg-5">
          <form class="u-flowText">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                class="form-control"
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                pattern="^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$"
              />
            </div>
            <div class="form-group">
              <label for="comments">Comentarios</label>
              <textarea
                name="comments"
                id="comments"
                class="form-control"
              ></textarea>
            </div>
            <div class="form-group ">
              <input
                class="btn btn-lg active  bg-success text-white"
                type="submit"
                value="Enviar"
              />
            </div>
          </form>
        </article>
      </div>
    </div>
    <div
      id="carouselExampleControls2"
      className="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div className="carousel-caption">
          <article className="AboutInfo">
            <h3 className="tt">Hola, soy</h3>
            <h2 className="tt">Heriberto Figueroa Michel</h2>
            <h4 className=" tt ">Programador Web.</h4>
            <div className="d-none d-md-block ">
              <p>
                Comencé a crear sitios y aplicaciones web en <b>2018</b>.
              </p>
              <p>
                Valoro mucho el concepto de{" "}
                <em>
                  "<b>menos es más</b>"
                </em>
                .
              </p>
              <p>Trabajo de forma remota e independiente.</p>
            </div>
          </article>
        </div>
        <div class="carousel-item active">
          <img
            src={require("../../../IMG/Carousel2/C1.png")}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src={require("../../../IMG/Carousel2/C2.png")}
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src={require("../../../IMG/Carousel2/C3.png")}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption"></div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls2"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls2"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </section>
);

export default Interesados;
