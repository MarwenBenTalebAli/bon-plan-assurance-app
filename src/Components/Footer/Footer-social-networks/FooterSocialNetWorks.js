import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./FooterSocialNetWorks.css";


const FooterSocialNetWorks = () => {
    return (
        <div className="social-list">
        <div className="container">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 text-white">Connectez-vous avec nous sur les réseaux sociaux!</h6>
            </div>
            <div className="col-md-6 col-lg-7 text-center text-md-right">
              <a 
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                <FontAwesomeIcon
                      icon={faFacebookSquare}
                      size="2x"
                      color="#adcb53"
                      className="mr-3"
                    />
              </a>
              <a  href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                   <FontAwesomeIcon
                      icon={faTwitterSquare}
                      size="2x"
                      color="#adcb53"
                      className="mr-3"
                    />
              </a>
              <a  
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2x"
                      color="#adcb53"
                      className="mr-3"
                    />
              </a>
              <a 
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                <FontAwesomeIcon
                      icon={faInstagramSquare}
                      size="2x"
                      color="#adcb53"
                    />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FooterSocialNetWorks
