import React from "react";
import Navbar from "./components/Organisms/Navbar/Navbar";

import Hola from "./components/Pages/Hola/Hola";
import Servicios from "./components/Pages/Servicios/Servicios";
import Sitios from "./components/Pages/Sitios/Sitios";
import Clientes from "./components/Pages/Clientes/Clientes";
import Flujo from "./components/Pages/Flujo/Flujo";
import Packs from "./components/Pages/Packs/Packs";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hola />
        <Servicios />
        <Sitios />
        <Clientes />
        <Flujo />
        <Packs />
        <section id="packs"></section>
        <section id="interesado"></section>
      </div>
    </>
  );
}

export default App;
