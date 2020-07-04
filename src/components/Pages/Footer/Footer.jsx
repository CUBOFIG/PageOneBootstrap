import React from "react";

import "../../../index.css";
import "./Footer.css";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="Footer p-3 flex-column text-center">
      <div className="container">
        <ul className="list-unstyled d-flex justify-content-around aling-items-center u-flowText SocialMedia">
          <li>
            <a href="#s" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="#s" target="_blank">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=523122141726">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li>
            <a href="#s" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="#s" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
        <small className="text-white">
          {" "}
          &copy; {new Date().getFullYear()} @hfigueroa
        </small>
      </div>
    </footer>
  );
};

export default Footer;
