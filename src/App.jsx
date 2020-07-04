import React from "react";
import NavbarE from "./components/Organisms/Navbar/Navbar";

import Hola from "./components/Pages/Hola/Hola";
import Servicios from "./components/Pages/Servicios/Servicios";
import Sitios from "./components/Pages/Sitios/Sitios";
import Clientes from "./components/Pages/Clientes/Clientes";
import Flujo from "./components/Pages/Flujo/Flujo";
import Packs from "./components/Pages/Packs/Packs";
import Interesados from "./components/Pages/Interesados/Interesados";
import Footer from "./components/Pages/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <NavbarE />
        <Hola />
        <Servicios />
        <Sitios />
        <Clientes />
        <Flujo />
        <Packs />
        <Interesados />
        <Footer />
      </div>
    </>
  );
}

export default App;
