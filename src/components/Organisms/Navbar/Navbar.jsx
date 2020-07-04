import React, { useState } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

import { Navbar, Nav } from "react-bootstrap";

const NavbarE = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className="navbar fixed-top navbar-expand-lg navbar-dark bg-second p-0"
    >
      <div className="container container-me">
        <Navbar.Brand to="/">
          <Link
            to="Hola"
            activeClass="active"
            smooth={true}
            spy={true}
            duration={500}
            offset={-20}
            type="button"
          >
            <img
              src={require("../../../IMG/Sin título-5.png")}
              className="PaddingNavLogo"
              alt="CUBE STUDIO"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="basic-navbar-nav"
          className="navbar-togglers"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
          <Nav className="mr-auto">
            <Nav.Item className="p-2">
              <Link
                onClick={() => setExpanded(false)}
                to="Sitios"
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                offset={-50}
                type="button"
                className="navlink-m"
              >
                Sitios
              </Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Link
                onClick={() => setExpanded(false)}
                to="Clientes"
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                offset={-50}
                type="button"
                className="navlink-m"
              >
                Clientes
              </Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Link
                onClick={() => setExpanded(false)}
                to="Flujo"
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                offset={-50}
                type="button"
                className="navlink-m"
              >
                Flujo
              </Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Link
                onClick={() => setExpanded(false)}
                to="Packs"
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                offset={-50}
                type="button"
                className="navlink-m"
              >
                Packs
              </Link>
            </Nav.Item>
            <Nav.Item className="p-2">
              <Link
                onClick={() => setExpanded(false)}
                to="Contact"
                activeClass="active"
                smooth={true}
                spy={true}
                duration={500}
                offset={-50}
                type="button"
                className="navlink-m"
              >
                ¿interesado?
              </Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item className="p-2">
              <Link
                onClick={() => setExpanded(false)}
                to="/Ingresar"
                className="navlink-m s d-none d-md-block"
              >
                Ingresar
              </Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item className="p-2">
              <Link
                onClick={() => setExpanded(false)}
                exact
                to="/"
                type="button"
                className="btn btn-lg bg-succes text-white border-0 ss d-none d-md-block"
              >
                Registrate
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarE;

// {
//   /* <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-second p-0">
//       <div className="container">
//         <a className="navbar-brand pt-1 " to="#Hola">
//           <img
//             src={require("../../../IMG/Sin título-5.png")}
//             className="PaddingNavLogo"
//             alt="CUBE STUDIO"
//           />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item p-2">
//               <a
//                 className="nav-link"
//                 to="#Sitios"
//                 onClick={() => setExpanded(false)}
//               >
//                 Sitios
//               </a>
//             </li>
//             <li className="nav-item p-2">
//               <a className="nav-link" to="#Clientes">
//                 Clientes
//               </a>
//             </li>
//             <li className="nav-item p-2">
//               <a className="nav-link" to="#Flujo">
//                 Flujo
//               </a>
//             </li>
//             <li className="nav-item p-2">
//               <a className="nav-link" to="#Packs">
//                 Packs
//               </a>
//             </li>
//             <li className="nav-item p-2">
//               <a className="nav-link" to="#Interesado">
//                 ¿Interesado?
//               </a>
//             </li>
//           </ul>
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item p-2">
//               <a className="nav-link s" to="#Packs">
//                 Ingresar
//               </a>
//             </li>
//             <li className=" p-2">
//               <button
//                 type="button"
//                 to="s"
//                 className="btn btn-lg bg-suc text-white border-0"
//               >
//                 Registrate
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav> */
// }
