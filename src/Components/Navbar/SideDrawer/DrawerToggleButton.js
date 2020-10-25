import React from "react";

import "./DrawerToggleButton.css";

const drawerToggleButton = (props) => (
  <button className="toggle-button" onClick={props.click}>
    <div
      className={
        props.navbar ? "toggle-button__line bg-blue" : "toggle-button__line"
      }
    />
    <div
      className={
        props.navbar ? "toggle-button__line bg-blue" : "toggle-button__line"
      }
    />
    <div
      className={
        props.navbar ? "toggle-button__line bg-blue" : "toggle-button__line"
      }
    />
  </button>
);

export default drawerToggleButton;
