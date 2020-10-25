import React, { useState } from "react";
import { Link } from "react-scroll";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import logo_color from "../../../assets/images/assurances_logo.svg";
import logo_blanc from "../../../assets/images/assurances_logo_blanc.svg";

const Toolbar = (props) => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <header className={navbar ? "toolbar show" : "toolbar"}>
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <Link
            href="#accueil"
            to="accueil"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img
              alt="Logo_BonPlanAssurance"
              src={navbar ? logo_color : logo_blanc}
              className="logo-img d-inline-block align-top"
            />
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link
                href="#accueil"
                to="accueil"
                activeClass="active"
                className={navbar ? "display-7 text-blue" : "display-7"}
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
                className={navbar ? "display-7 text-blue" : "display-7"}
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
                className={navbar ? "display-7 text-blue" : "display-7"}
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
                className={navbar ? "display-7 text-blue" : "display-7"}
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
                className={navbar ? "display-7 text-blue" : "display-7"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="toolbar__toggle-button">
          <DrawerToggleButton
            click={props.drawerClickHandler}
            navbar={navbar}
          />
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
