import React from "react";

import Card from "../../Molecules/Card/Card";

const CardView = ({ cursos }) => (
  <section
    id="Servicios"
    className="bg-white p-5 d-flex justify-content-center align-items-center Services u-fullScreen"
  >
    <div className="container">
      <div className="pb-2 text-center">
        <p className="u-flowText">
          Contamos con una gran variedad de<b> Cursos</b> para ti.
        </p>
      </div>
      <div>
        <article className="row">
          {cursos.map((cursos) => (
            <Card
              nombre={cursos.nombre}
              descripcion={cursos.des}
              imagenCurso={cursos.imagenCurso}
            />
          ))}
        </article>
      </div>
    </div>
  </section>
);

export default CardView;
