import React from "react";
import "../../../index.css";

const Clientes = () => (
  <section
    id="Clientes"
    className=" p-5 d-flex justify-content-center align-items-center Services u-fullScreen"
  >
    <div className="container ">
      <div className="pb-2 text-center">
        <h2>
          Clientes <b>Felicess</b>
        </h2>
        <p className="u-flowText">Colaboraciones Perfectas</p>
      </div>
      <div className="row no-gutters">
        <div className="col-12 ">
          <article className="card bg-dark text-white border-0 rounded-0">
            <img
              src="https://img.culturacolectiva.com/cdn-cgi/image/f=auto,w=1600,q=80,fit=contain/featured_image/2018/02/23/1519432827293/descarga.jpeg"
              className="card-img"
              alt="Cliente Jose"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-sm-center">
              <h5 className="card-title">Jose Jose</h5>
              <p className="card-text">
                <small>CEO/Co-Fundador, CPE</small>
                <br />
                <a href="#s">Ver Proyecto</a>
              </p>
              <p className="card-text">
                <blockquote className="d-none d-md-block u-flowText  ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                  non commodi laudantium fuga! Beatae temporibus consectetur
                  placeat consequatur! <i>Omnis officiis</i> suscipit vero
                  incidunt provident culpa cum quo asperiores quas. Suscipit.S
                </blockquote>
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Clientes;

// {
//   /* <section id="Clientes" className=" container p-5">
//     <div className="row no-gutters">

//       <div className="col-12 col-sm-6 col-lg-4 ">
//         <article className="card bg-dark text-white border-0 rounded-0">
//           <img
//             src="https://img.culturacolectiva.com/cdn-cgi/image/f=auto,w=1600,q=80,fit=contain/featured_image/2018/02/23/1519432827293/descarga.jpeg"
//             className="card-img"
//             alt="Cliente Jose"
//           />
//           <div className="card-img-overlay d-flex flex-column justify-content-sm-center">
//             <h5 className="card-title">Jose Jose</h5>
//             <p className="card-text">
//               <small>CEO/Co-Fundador, CPE</small>
//               <br />
//               <a href="#s">Ver Proyecto</a>
//             </p>
//             <p className="card-text">
//               <blockquote className="d-none d-md-block u-flowText  ">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
//                 non commodi laudantium fuga! Beatae temporibus consectetur
//                 placeat consequatur! <i>Omnis officiis</i> suscipit vero
//                 incidunt provident culpa cum quo asperiores quas. Suscipit.S
//               </blockquote>
//             </p>
//           </div>
//         </article>
//       </div>
//     </div>
//   </section> */
// }
