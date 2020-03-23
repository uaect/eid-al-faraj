import React, { Component } from "react";
import VideoCarousel from "../../Urband-MultiCarousel/multi-carousel";
import "./style.css";
class Videos extends Component {
  render() {
    return (
      <div>
        <section className="sectionPaddding">
          <div className="container">
          <div className="section-title style-four">
          <h2>latest Videos</h2>
          </div>
          <VideoCarousel/>
          </div>
        </section>
      </div>
    );
  }
}

export default Videos;
