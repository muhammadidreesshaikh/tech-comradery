import React from "react";
import { Link } from 'react-router-dom';
import "../assets/scss/slider.scss";

function Slider() {

  return (
    <div>
      <div className="slider">
        <div className="container">
          <div className="row justify-content-center">

              <div className="col-8">
                  <div className="headings">
                      <h1>How Work Should Work</h1>
                      <p>Forget the old rules. You can have the best people. <br/> Right now. Right here.</p>

                      <div className="slider-btn">
                        <Link to="/" className="white">Get Started</Link>
                      </div>
                  </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Slider;