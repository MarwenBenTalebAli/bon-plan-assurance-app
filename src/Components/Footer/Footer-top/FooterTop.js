import React from "react";
import "./FooterTop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { faEnvelope, faHome, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const footerTop = () => {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="row justify-content-center text-white">

          <div className="col-12 text-center">
              <section className='footer-subscription'>
                <h5 className='footer-subscription-heading'>
                Rejoignez nous
                </h5>
                <p className='footer-subscription-text'>
                Vous pouvez vous désinscrire à tout moment.
                </p>
                <div className='input-areas'>
                  <form>
                    <input
                      className='footer-input'
                      name='email'
                      type='email'
                      placeholder='Votre Email'
                    />
                    <button type="button" className='btn-outline'>Souscrire</button>
                  </form>
                </div>
              </section>
          </div>
          <div className="col-12 col-md-4 align-content-center box">
            <h5 className="mt-3 mb-3">
              Bon plan assurance
            </h5>
            <div className="content">
              <p className="text">
                Forte des savoir-faire et de la compétence de ses équipes, Bon
                Plan Assurances entend jouer un rôle de premier plan sur le
                marché de l’assurance et se positionne parmi les leaders sur le
                marché français.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 box">
            <h5 className="mt-3 mb-3">Liens Rapides</h5>
            <div className="content">
              <p className="text">
                <Link
                  to="accueil"
                  className="text-white"
                  href="#accueil"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Accueil
                </Link>
                <br />
                <Link
                  to="presentation"
                  className="text-white"
                  href="#presentation"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Présentation
                </Link>
                <br />
                <Link
                  to="assurance"
                  className="text-white"
                  href="#assurances"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Assurances
                </Link>
                <br />
                <Link
                  to="avantages"
                  className="text-white"
                  href="#avantages"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Avantages
                </Link>
                <br />
                <Link
                  to="contact"
                  className="text-white"
                  href="#contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </p>
            </div>
          </div>
      
          <div className="col-12 col-md-4 box">
            <h5 className="mt-3 mb-3">Contacts</h5>
            <div className="content">
              <p className="text">
              <FontAwesomeIcon
                      icon={faHome}
                      size="1x"
                      className="mr-2"
                    />32 Avenue Anatole France, 92700 Colombes
                <br />
                <FontAwesomeIcon
                      icon={faEnvelope}
                      size="1x"
                      className="mr-2"
                    />email@email.com
                <br />
                <FontAwesomeIcon
                      icon={faPhoneAlt}
                      size="1x"
                      className="mr-2"
                    />+33 1 00 00 00 00
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default footerTop;
