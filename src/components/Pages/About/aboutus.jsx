import React, { Component } from "react";
import Pattern from '../../../media/about/pattern.png';
import "./style.css";
class AboutUs extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="fullWrap">
        <section className="sectionPaddding innerMargin">
          <div className="container">
            <div className="row">
            <div className="col-md-7">
              <div className="cover">
                <div className="card-box">
                <img src={Pattern} className="back-pattern" alt="PATTERN" />
                  <div className="aboutImg">
                    <img src={require("./about.jpg")} alt="about-img" />
                  </div>
                  
                </div>
                </div>
                </div>
                <div className="col-md-5">
                <h2 className="pageHead"> About Us</h2>
                <p className="pageDesc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus turpis nisl, vitae dictum mi
                    semper convallis. Ut sapien leo, varius ac dapibus a, cursus quis ante. </p>
                </div>
            </div>
          </div>
          
        </section>
        <section className="get-started">
            <div className="container-1200">
                <div className="backStage">
                  <div className="stage">
                    <h4>2k+</h4>
                    <div className="stageCaption">songs</div>
                  </div>
                  <div className="stage">
                    <h4>10k+</h4>
                    <div className="stageCaption">albums</div>
                  </div>
                  <div className="stage">
                    <h4>20k</h4>
                    <div className="stageCaption">tracks</div>
                  </div>
                </div>
             
           
            </div>
          </section>

          <section className="sectionPaddding innerMargin">
          <div className="container">
            <div className="row">
            <div className="col-md-5">
            <h2 className="pageHead"> Meet Our Team</h2>
            <p className="pageDesc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus turpis nisl, vitae dictum mi
                semper convallis. Ut sapien leo, varius ac dapibus a, cursus quis ante. </p>
            </div>
            <div className="col-md-7">
              <div className="cover">
                <div className="card-box align-items-end">
                <img src={Pattern} className="back-pattern" alt="PATTERN" />
                  <div className="aboutImg">
                    <img src={require("./about.jpg")} alt="about-img" />
                  </div>
                  
                </div>
                </div>
                </div>
            
            </div>
          </div>
          
        </section>
      </div>
    );
  }
}
export default AboutUs;
