import React from 'react';
import { Container } from 'react-bootstrap';
import image1 from '../assets/images/products/product-1.png';
import image2 from '../assets/images/products/product-2.png';
import image3 from '../assets/images/products/product-3.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Router>
      <div className="product-hero-section">
        <Container>
          <h1 className="product-name text-center">Balloon Brace&reg; for Costal Flare Treatment</h1>
          <div className="product-tagline text-center single-col-max mx-auto">
            <h4>
              Rib Flare treatment without Surgically
              <br className="d-none d-md-block" /> removing the costal margin
            </h4>
            Rib Flare is where the costal margin cartilages grow in a protruding shape.
          </div>
          <div className="row mt-3 mt-md-5">
            <div className="col-12 col-lg-8 mb-3 mg-lg-5">
              <div className="product-figure text-center">
                <div
                  className="product-carousel carousel slide carousel-fade"
                  data-ride="carousel"
                  data-interval="3000"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Link to="/">
                        <img className="d-block img-fluid" src={image1} alt="the first" />
                      </Link>
                    </div>
                    <div className="carousel-item active">
                      <Link to="/">
                        <img className="d-block img-fluid" src={image2} alt="second" />
                      </Link>
                    </div>
                    <div className="carousel-item active">
                      <Link to="/">
                        <img className="d-block img-fluid" src={image3} alt="third" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 position-relative">
              <div className="product-promo-wrapper" data-aos="fade-right" data-aos-once="true">
                <div className="product-details shadow-lg mb-3">
                  <div className="product-intro single-col-max ma-auto mb-3">
                    try
                    <Link to="/">more stuff</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Router>
  );
};

export default Hero;
