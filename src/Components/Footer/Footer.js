import React from "react";
import FooterTop from "./Footer-top/FooterTop";
import FooterSocialNetWorks from "./Footer-social-networks/FooterSocialNetWorks";
import "./Footer.css";
import { Link } from "react-scroll";
import logo from "../../assets/images/assurances_logo_blanc.svg";


const footer = () => {
  return (
    <section className="section-footer">
      <FooterSocialNetWorks/>
      <FooterTop />
      <footer className="footer-bottom py-3">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 text-md-left">
            <Link
                to="accueil"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-left"
              >
                <img src={logo} className="logo-footer" alt="logo" />
              </Link>
            </div>
            <div className="col-12 col-md-6 text-md-right">
              <span className="copyright text-white">
                  Copyright &copy; 2020&nbsp;
                  <a  
                    href="https://www.msit-digital.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MSIT Digital
                  </a>.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default footer;
