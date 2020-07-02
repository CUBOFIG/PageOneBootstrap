import React from "react";
import SWeb from "../../Organisms/SWeb/SWeb";
import SWebR from "../../Organisms/SWebR/SWebR";

const Sitios = () => (
  <section id="Sitios" className="WebSitios">
    <div className="d-flex flex-column justify-content-center align-items-center u-fullScreen ">
      <SWeb />
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center u-fullScreen bg-white">
      <SWebR />
    </div>
  </section>
);

export default Sitios;
