import React, { Component } from "react";
import { Link } from "react-router-dom";
import LightBox from "../../uicomponents/lightBox/lightBox";
import "./style.css";
class Gallery extends Component {
  render() {
    return (
      <div>
        <section className="sectionPaddding">
          <div className="container">
          <div className="section-title style-four">
          <h2>New Shots</h2>
          </div>
              <LightBox/>
              <div className="btnWrap">
                <Link to="" className="heroButton">View More</Link>
              </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Gallery;
