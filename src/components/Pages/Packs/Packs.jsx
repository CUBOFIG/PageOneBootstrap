import React from "react";
import {
  faChevronRight,
  faCheck,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Packs.css";

const Packs = () => (
  <section className="container-fluid no-gutters px-0 pt-5 Packs" id="Packs">
    <article className="container  pb-4 ">
      <div className="text-center pt-5 pb-3">
        <FontAwesomeIcon icon={faEye} size="lg" className="eyecolor " />
        <p>NOTA</p>
      </div>
      <p class="u-flowText ">
        Me parece importante ofrecer un producto de calidad a un precio justo.
      </p>
      <p class="u-flowText">
        Un precio que al mismo tiempo sea cómodo para que mi cliente acepte y
        cómodo para sentirme a gusto trabajando en el proyecto.
      </p>
      <p class="u-flowText">
        Aunque soy un profesional independiente, tengo mucha experiencia en
        diferentes proyectos, que van desde el diseño web hasta el desarrollo de
        aplicaciones web empresariales.
      </p>
    </article>
    <aside className="conteiner-fluid SinglePage no-gutters px-0">
      <div className="u-fullScreen d-flex justify-content-center align-items-center BackOver text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-6">
              <a
                href="#interesado"
                className="btn btn-lg active bg-succes text-white border-0 float-left"
                role="button"
                aria-pressed="true"
              >
                <b>
                  Desde $400 <small>USD</small>
                </b>
              </a>
              <div className="clearfix pb-4"></div>
              <h3>Sitio de una sola página</h3>
              <small>
                El precio puede ser más bajo (o más alto) dependiendo de los
                requisitos de su proyecto.
              </small>
              <p className="u-TextSer pt-2">
                Una <b>sola página</b> o <b>página de destino</b> es un sitio
                web que consta de una página. Perfecto para presentar a tu
                empresa, organización, producto o servicio de una manera hermosa
                y moderna en Internet.
              </p>
              <a href="#interesado">
                Solicite una cotización ahora
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="ml-2"
                ></FontAwesomeIcon>
              </a>
              <div className="row mt-3">
                <div className="col ">
                  <p>
                    <FontAwesomeIcon
                      className="mr-2 "
                      icon={faCheck}
                      size="lg"
                    />
                    Sitio web de una sola página.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="mr-2 "
                      icon={faCheck}
                      size="lg"
                    />
                    100% Responsivo.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="mr-2 "
                      icon={faCheck}
                      size="lg"
                    />
                    Diseño personalizado.
                  </p>
                </div>
                <div class="col">
                  <p>
                    <FontAwesomeIcon
                      className="mr-2 "
                      icon={faCheck}
                      size="lg"
                    />
                    Corrección de estilo.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="mr-2 "
                      icon={faCheck}
                      size="lg"
                    />
                    Edición de imágenes.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="mr-2 "
                      icon={faCheck}
                      size="lg"
                    />
                    Soporte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <aside className="conteiner-fluid MultiPage no-gutters px-0 ">
      <div className="u-fullScreen d-flex justify-content-center align-items-center BackOver text-white">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-lg-6 ">
              <a
                href="#interesado"
                class="btn btn-lg active bg-succes text-white border-0 float-right"
                role="button"
                aria-pressed="true"
              >
                <b>
                  Desde $1000 <small>USD</small>
                </b>
              </a>
              <div class="clearfix pb-4"></div>
              <h3>Sitio multipágina</h3>
              <small>
                El precio puede ser más bajo (o más alto) dependiendo de los
                requisitos de su proyecto.
              </small>
              <p className="u-TextSer pt-2">
                Un <b>sitio web de varias páginas</b> consta de dos o más
                páginas. Este formato es útil si tiene ciertos elementos que
                desea mantener separados por páginas y urls diferentes.
              </p>
              <a href="#interesado">
                Solicite una cotización ahora
                <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
              </a>
              <div class="row mt-3">
                <div class="col">
                  <p>
                    <FontAwesomeIcon
                      className="mr-2 "
                      icon={faCheck}
                      size="lg"
                    />
                    2 a 6 páginas.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="mr-2 "
                      icon={faCheck}
                      size="lg"
                    />
                    100% Responsivo.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="mr-2 "
                      icon={faCheck}
                      size="lg"
                    />
                    Diseño personalizado.
                  </p>
                </div>
                <div class="col">
                  <p>
                    <FontAwesomeIcon
                      className="mr-2 "
                      icon={faCheck}
                      size="lg"
                    />
                    Corrección de estilo.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="mr-2 "
                      icon={faCheck}
                      size="lg"
                    />
                    Edición de imágenes.
                  </p>
                  <p>
                    <FontAwesomeIcon
                      className="mr-2 "
                      icon={faCheck}
                      size="lg"
                    />
                    Soporte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <aside className="conteiner-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>
    </aside>
  </section>
);

export default Packs;
