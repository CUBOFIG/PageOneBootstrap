import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";
const Card = ({ nombre, descripcion, imagenCurso }) => (
  <div className="col-12 col-sm-6 col-lg-3 d-flex ">
    <article className="card mb-3 color">
      <img className="card-img-top " src={imagenCurso} alt="Nuevo sitio web" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <a href="#sitios" className="card-link">
          Más detalles
          <FontAwesomeIcon
            icon={faChevronRight}
            className="ml-2"
          ></FontAwesomeIcon>
        </a>
      </div>
    </article>
  </div>
);

export default Card;
