import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import right_arrow from "../../assets/images/icons/arrow-right.svg";
import left_arrow from "../../assets/images/icons/arrow-left.svg";

import slide_1 from "../../assets/images/slides/slide-1.jpg";
import slide_2 from "../../assets/images/slides/slide-2.jpg";
import slide_3 from "../../assets/images/slides/slide-3.jpg";


const slider = () => {
  return (
    <Carousel
      nextIcon={<img src={right_arrow} alt="right_arrow" />}
      prevIcon={<img src={left_arrow} alt="left_arrow" />}
      className="slider1 m-0"
    >
      <Carousel.Item className="slider-fullscreen-image">
        <div className="slider-overlay"></div>
        <div className="carousel-caption">
          <div className="container-fluid container-slide">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-6 order-2 order-md-1">
                  <div className="col-12 col-lg-8 m-auto  text-center text-md-left">
                    <h1 className="slogon-title display-2 mt-3">
                      Seul dans le passé <br />
                      ensemble dans le futur
                    </h1>
                </div>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2">
                <div className="image_wrapper">
                  <img
                    src={slide_1}
                    alt="slide_1"
                    className="border-image float-md-left float-lg-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-fullscreen-image">
        <div className="slider-overlay"></div>
        <div className="carousel-caption">
          <div className="container-fluid container-slide">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-md-6 order-2 order-md-1">
                  <div className="col-12 col-lg-8 m-auto text-center text-md-left">
                    <h1 className="slogon-title display-2 mt-3">
                      Plus qu’une sensation <br />
                      d’être protégé
                    </h1>
                  </div>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2">
              <div className="image_wrapper">
                <img
                  src={slide_2}
                  alt="slide_2"
                  className="border-image float-md-left float-lg-none"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="slider-fullscreen-image">
        <div className="slider-overlay"></div>
        <div className="carousel-caption">
          <div className="container-fluid container-slide">
            <div className="row justify-content-center justify-content-md-center align-items-center">
              <div className="col-12 col-md-6 order-2 order-md-1">
                  <div className="col-12 col-lg-8 m-auto text-center text-md-left">
                    <h1 className="slogon-title display-2 mt-3 mt-sm-3">
                      Nous voulons chasser <br />
                      la récession ensemble!
                    </h1>
                  </div>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2">
                <div className="image_wrapper">
                  <img
                    src={slide_3}
                    alt="slide_3"
                    className="border-image float-md-left float-lg-none"
                  />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default slider;
