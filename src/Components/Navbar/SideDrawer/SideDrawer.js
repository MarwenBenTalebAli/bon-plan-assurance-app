import React from "react";
import { Link } from "react-scroll";

import "./SideDrawer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li to="#" className="menu-bars text-right mr-4">
          <FontAwesomeIcon
            onClick={props.drawerClickHandler}
            icon={faTimes}
            size="1x"
            color="white"
            className="btn-close"
          />
        </li>
        <li>
          <Link
            href="#accueil"
            to="accueil"
            activeClass="active"
            className="nav-link display-7"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="#presentation"
            to="presentation"
            activeClass="active"
            className="nav-link display-7"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Présentation
          </Link>
        </li>
        <li>
          <Link
            href="#assurances"
            to="assurances"
            activeClass="active"
            className="nav-link display-7"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Assurances
          </Link>
        </li>
        <li>
          <Link
            href="#avantages"
            to="avantages"
            activeClass="active"
            className="nav-link display-7"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Avantages
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            to="contact"
            activeClass="active"
            className="nav-link display-7"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
