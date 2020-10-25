import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const sidenav = (props) => {
  const closeBtn = <FontAwesomeIcon icon={faTimes} size="1x" color="white" />;
  let drawerClasses = "text-center side-drawer";
  let bg = "m-0 ml-lg-auto p-3 p-lg-0";
  if (props.show) {
    drawerClasses = "text-center side-drawer show";
    bg = "m-0 ml-lg-auto p-3 p-lg-0 bg-dark";
  }
  return (
    <nav className={drawerClasses} id="responsive-navbar-nav1">
      <Nav className={bg}>
        <li className="d-inline d-lg-none">
          <Navbar.Toggle
            data-toggle="collapse"
            data-target="#responsive-navbar-nav1"
            children={closeBtn}
          />
        </li>
        <li className="nav-item">
          <Link
            href="#accueil"
            to="accueil"
            activeClass="active"
            className="nav-link text-primary display-7"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Accueil
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="#presentation"
            to="presentation"
            activeClass="active"
            className="nav-link text-primary display-7"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Présentation
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="#assurances"
            to="assurance"
            activeClass="active"
            className="nav-link text-primary display-7"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Assurances
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="#avantages"
            to="avantages"
            activeClass="active"
            className="nav-link text-primary display-7"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Avantages
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="#contact"
            to="contact"
            activeClass="active"
            className="nav-link text-primary display-7"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </Nav>
    </nav>
  );
};

export default sidenav;
