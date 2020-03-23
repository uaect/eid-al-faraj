import React, { Component } from "react";
import "./style.css";
import Pattern from '../../../media/about/pattern.png';
class Achievements extends Component {
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
                  <img src={require("../../../media/about/5.jpg")} alt="about-img" />
                </div>
                
              </div>
              </div>
              </div>
              <div className="col-md-5">
              <h2 className="pageHead"> Achievements</h2>
              <p className="pageDesc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus turpis nisl, vitae dictum mi
                  semper convallis. Ut sapien leo, varius ac dapibus a, cursus quis ante. </p>
              </div>
          </div>

          <div className="achievementsWrap sectionPaddding innerMargin">
            <ul>
            <li>
            <div className="row">
            <div className="col-md-3">
             <figure><img src={require("../../../media/about/4.jpg")} alt="img" /></figure>
            </div>
            <div className="col-md-9 descriptionRight">
              <h3 className="head">Dubai opera house</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus turpis nisl, vitae dictum mi semper convallis. Ut sapien leo, varius ac dapibus a, cursus quis ante.</p>
           </div>
              </div>
            </li>
            <li>
            <div className="row">
            <div className="col-md-3">
             <figure><img src={require("../../../media/about/3.jpg")} alt="img" /></figure>
            </div>
            <div className="col-md-9 descriptionRight">
              <h3 className="head">Dubai opera house</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus turpis nisl, vitae dictum mi semper convallis. Ut sapien leo, varius ac dapibus a, cursus quis ante.</p>
           </div>
              </div>
            </li>
            <li>
            <div className="row">
            <div className="col-md-3">
             <figure><img src={require("../../../media/about/2.jpg")} alt="img" /></figure>
            </div>
            <div className="col-md-9 descriptionRight">
              <h3 className="head">Dubai opera house</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus turpis nisl, vitae dictum mi semper convallis. Ut sapien leo, varius ac dapibus a, cursus quis ante.</p>
           </div>
              </div>
            </li>
            </ul>

          </div>
            
            
          </div>
          
        </section>
      </div>
    );
  }
}
export default Achievements;
