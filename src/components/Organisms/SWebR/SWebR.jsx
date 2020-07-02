import React from "react";

const SWebR = () => (
  <article className="container">
    <div className="row">
      <div className="col-12 col-lg-6">
        <h3 className="text-center">Sitios web responsivos</h3>
        <p>
          Es importante proporcionar a tus visitantes una experiencia web óptima
          en dispositivos móviles.
        </p>
        <p>
          El diseño web responsivo significa que tu sitio se adapta
          instantáneamente al dispositivo que el visitante utiliza. ¡Mi trabajo
          es hacer, que la visita de tus usuarios sea lo más agradable e
          intuitiva para ellos!
        </p>
        <aside className="row">
          <div className="col">
            <figure className="bg-ca">
              <img
                className="img-fluid "
                src="https://img.icons8.com/pastel-glyph/2x/monitor.png"
                alt="Escritorio"
              />
              <figcaption>Escritorio</figcaption>
            </figure>
          </div>
          <div className="col">
            <figure className="bg-ca">
              <img
                className="img-fluid "
                src="https://images.vexels.com/media/users/3/128862/isolated/preview/5b021d17fb3643d144434b4cc6c3a74c-icono-de-tableta-plana-by-vexels.png"
                alt="Tableta"
              />
              <figcaption>Tableta</figcaption>
            </figure>
          </div>
          <div className="col">
            <figure className="bg-ca">
              <img
                className="img-fluid "
                src="https://cdn.pixabay.com/photo/2016/10/05/17/11/smartphone-1717163_960_720.png"
                alt="Móvil"
              />
              <figcaption>Móvil</figcaption>
            </figure>
          </div>
          <div class="col">
            <figure className="bg-ca">
              <img
                className="img-fluid "
                src="https://images.vexels.com/media/users/3/158671/isolated/preview/c051cb3ce81ebb07373aaef516f8f421-ilustraci--n-port--til-port--til-by-vexels.png"
                alt="Móvil "
              />
              <figcaption>Laptop</figcaption>
            </figure>
          </div>
        </aside>
      </div>
      <div className="col-12 col-lg-6">
        <img
          src={require("../../../IMG/home.png")}
          className="img-fluid"
          alt="..."
        />
      </div>
    </div>
  </article>
);

export default SWebR;
