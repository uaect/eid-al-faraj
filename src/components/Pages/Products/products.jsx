import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
class ProductList extends Component {
  render() {
    return (
      <div>
      <section className="sectionPaddding">
      <div className="container">
      <div className="section-title style-four">
      <h2>New Arrivals</h2>
      </div>
          <div className="listWrap">
            <div className="listBox">
              <div className="imageHolder"><img  src={require("../../../media/album/4.jpg")} alt="New Album" /></div>
              <div className="tvs-block-artist">
                <div className="info">
                <div className="name"><Link to="">Opera Sound</Link></div>
                <div className="genere">Video</div>
                </div>
                  <div className="download">
                    <Link to="" className="heroButton small">Download</Link>
                  </div>
              </div>
            </div>
            <div className="listBox">
              <div className="imageHolder"><img  src={require("../../../media/album/6.jpg")} alt="New Album" /></div>
              <div className="tvs-block-artist">
                <div className="info">
                <div className="name"><Link to="">Opera Sound</Link></div>
                <div className="genere">MP3</div>
                </div>
                  <div className="download">
                    <Link to="" className="heroButton small">Download</Link>
                  </div>
              </div>
            </div>
            <div className="listBox">
            <div className="imageHolder"><img  src={require("../../../media/album/7.jpg")} alt="New Album" /></div>
            <div className="tvs-block-artist">
              <div className="info">
              <div className="name"><Link to="">Opera Sound</Link></div>
              <div className="genere">MP3</div>
              </div>
                <div className="download">
                  <Link to="" className="heroButton small">Download</Link>
                </div>
            </div>
          </div>
          <div className="listBox">
          <div className="imageHolder"><img  src={require("../../../media/album/8.jpg")} alt="New Album" /></div>
          <div className="tvs-block-artist">
            <div className="info">
            <div className="name"><Link to="">Opera Sound</Link></div>
            <div className="genere">Book</div>
            </div>
              <div className="download">
                <Link to="" className="heroButton small">Download</Link>
              </div>
          </div>
        </div>
          </div>
          <div className="btnWrap">
                <Link to="" className="heroButton">View More</Link>
            </div>
      </div>
    </section>
        
      </div>
    );
  }
}

export default ProductList;
