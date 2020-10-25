import React from "react";
import { Navbar } from "react-bootstrap";

import "./DrawerToggleButton.css";

const drawerToggleButton = (props) => (
  <Navbar.Toggle
    aria-controls="responsive-navbar-nav"
    data-toggle="collapse"
    data-target="#responsive-navbar-nav1"
    aria-expanded="false"
    onClick={props.click}
  />
);

export default drawerToggleButton;
