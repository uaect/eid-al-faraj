import React, { Component } from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from 'simple-react-lightbox'
import "./style.css";
class LightBox extends Component {
  render() {
    return (
      <div>
      <SimpleReactLightbox>
      <SRLWrapper>
          <div className="galleryWrap">
              <div className="galleryBox">
                <img  src={require("../../../media/album/1.jpg")} alt="New York City - Architecture" />
              </div>
              <div className="galleryBox">
              <img  src={require("../../../media/album/2.jpg")} alt="New York City - Architecture" />
            </div>
            <div className="galleryBox">
            <img  src={require("../../../media/album/4.jpg")} alt="New York City - Architecture" />
          </div>
          <div className="galleryBox">
          <img  src={require("../../../media/album/5.jpg")} alt="New York City - Architecture" />
        </div>
             
           
            </div>
            </SRLWrapper>
            </SimpleReactLightbox>
        
      </div>
    );
  }
}

export default LightBox;
