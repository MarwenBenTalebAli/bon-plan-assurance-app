import React, { Component } from "react";
import "./App.css";

import Toolbar from "./Components/Navbar/Toolbar/Toolbar";
import SideDrawer from "./Components/Navbar/SideDrawer/SideDrawer";
import Backdrop from "./Components/Navbar/Backdrop/Backdrop";

import Accueil from "./Components/Accueil/Accueil";
import Presentation from "./Components/Presentation/Presentation";
import Assurances from "./Components/Assurances/Assurances";
import Avantages from "./Components/Avantages/Avantages";
import Contact from "./Components/Contact/Contact";
import ScrollToTopBtn from "./Components/ScrollToTop/ScrollToTop";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        {backdrop}
        <div className="container-fluid p-0">
          <Accueil />
          <Presentation />
          <Assurances />
          <Avantages />
          <Contact />
          <Footer />
          <ScrollToTopBtn />
        </div>
      </div>
    );
  }
}

export default App;
