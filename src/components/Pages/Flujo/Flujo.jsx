import React from "react";
import "./Flujo.css";

const Flujo = () => (
  <section
    id="Flujo"
    className=" p-5 bg-white WorkFlow d-flex justify-content-center align-items-center u-fullScreen Flujo-section"
  >
    <div className="container ">
      <article>
        <h3 class="text-center pb-4  pt-5">
          Comencemos con tu nuevo <b>Proyecto</b>.
        </h3>
        <p>
          Me encanta la colaboración mutua entre profesional-cliente, prefiero
          la frase:
          <em>
            Trabajo <b>contigo</b>
          </em>
          .
        </p>
        <p>
          En vez de:
          <em>
            Trabajo <b>para ti</b>
          </em>
          .
        </p>
        <p>
          Me gusta tener contacto directo con el cliente, lo que permite una
          comunicación clara y actualizaciones periódicas del proyecto, haciendo
          todo lo posible para no causar demoras. Intento definir las
          características y experiencias más adecuadas que brinden la máxima
          satisfacción.
        </p>
        <p>
          Me parece importante ofrecer a mis clientes una comprensión clara de
          lo que pueden y deben esperar de mí. Si trabajamos juntos en su sitio
          web, el proceso será como se describe a continuación:
        </p>
      </article>
      <aside className="WorkFlow-steps">
        <div className="row justify-content-lg-center align-items-lg-center ">
          <div className="col-12 col-lg-6 text-right ">
            <h3>Paso 1</h3>
            <h4>Concepto y Presupuesto</h4>
            <p>
              Discutimos las primeras ideas durante una breve reunión en sitio,
              por correo electrónico o video llamada. Siguiendo las ideas
              iniciales, te presentaré un presupuesto oficial para el proyecto.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img
              src={require("../../../IMG/Flujos/F1.png")}
              alt="videollamada"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row justify-content-lg-center align-items-lg-center ">
          <div className="col-12 col-lg-6  order-lg-1">
            <h3>Paso 2</h3>
            <h4>Propuesta de Diseño</h4>
            <p>
              Una vez que se firme y/o acepte la cotización, recibirás la
              primera factura (50% del monto total acordado). Después del pago
              iniciaré el proyecto. Estudiaré tu empresa, producto o servicio.
              Para acelerar el proceso, es necesario que me entregues todo el
              material del proyecto en este momento (Logo, Textos, Fotos, Mapa
              del sitio, etc.). En 7 días te presentaré un diseño profesional y
              apropiado para tu sitio web.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img
              src={require("../../../IMG/Flujos/F2.png")}
              alt="videollamada"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row justify-content-lg-center align-items-lg-center ">
          <div className="col-12 col-lg-6 text-right ">
            <h3>Paso 3</h3>
            <h4>Retroalimentación</h4>
            <p>
              Después de la primera presentación del diseño, puedes dar tu
              opinión y compartir comentarios. Tendrás un máximo de 2 rondas de
              comentarios
              <sup>
                <b>*</b>
              </sup>
              . De esta manera no nos detenemos en un círculo sin fin de cambios
              menores. Esto evita perder tiempo y presupuesto. Es importante
              compartir buenos comentarios.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img
              src={require("../../../IMG/Flujos/F3.png")}
              alt="videollamada"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row justify-content-lg-center align-items-lg-center ">
          <div className="col-12 col-lg-6 order-lg-1">
            <h3>Paso 4</h3>
            <h4>Acabado de Diseño y Contenido</h4>
            <p>
              Después de la última ronda de comentarios, haré los cambios
              finales y terminaré el diseño completamente. En consulta contigo,
              también se procesa el contenido final, como textos y fotos.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img
              src={require("../../../IMG/Flujos/F4.png")}
              alt="videollamada"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row justify-content-lg-center align-items-lg-center pb-4">
          <div className="col-12 col-lg-6 text-right ">
            <h3>Paso 5</h3>
            <h4>Fin del Proyecto</h4>
            <p>
              Dependiendo de la complejidad del proyecto, se terminará de 2 a 8
              semanas. Una vez finalizado, recibirás la factura final (a menos
              que se acuerde de otra manera). Después del pago, te enviaré una
              copia de todos los archivos originales y pondré en línea tu sitio.
              Después de esta etapa, los cambios menores y los errores se
              procesarán de forma gratuita. Los cambios mayores tendrán costos
              adicionales
              <sup>
                <b>*</b>
              </sup>
              .
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img
              src={require("../../../IMG/Flujos/F5.png")}
              alt="videollamada"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <small>
              <sup>
                <b>*</b>
              </sup>
              Todo cambio adicional generará cargos extras. Tarifa por hora:{" "}
              <b>$50usd + impuestos</b>.
            </small>
          </div>
        </div>
      </aside>
    </div>
  </section>
);

export default Flujo;

// d-flex justify-content-center align-items-center Services u-fullScreen
