import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay,faStop,faMicrophone, faClock} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";

library.add(faPlay,faMicrophone,faClock);

class albumListHome extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  componentDidMount() {
    this.props.fetchAlbums();
    console.log(this.props)
    this.setState({Showbtn:this.props.isMusic})
  }

  render() {
    var isResponseData = false;
    if (this.props.albums.success === true)
      // Second step
      isResponseData = true;
    const image_url = "http://admin.urbandmusic.com/storage/";
    const albums = this.props.albums.result; // first step

    return (
      <div className="fullWrap">
        {isResponseData ? (
          <div>
            <section className="three-d-album sectionPaddding">
            <div className="container">
              <div className="section-title style-four">
                <h2>latest Music</h2>
                {/*<p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some injected
                  humour.
                </p>*/}
              </div>

            

              <div className="album-boxs d-flex">
                <div className="col-xl-10">
                  <div className="row justify-content-center">
                    {albums.length > 0
                      ? albums.map(item => {
                          return (
                            <div
                              className="col-md-12"
                              key={item.id}
                            >
                              <div className="albumList">
                                <div className="thumbnailCover">
                                <div className="thumbnail">
                              
                                    <img src={image_url + item.image} alt="" className="picture-img"
                                   
                                    />
                                    <span
                                    className="playBtn"
                                    onClick={() => this.props.PlayHandleBtn()}
                                    >
                                    
                                  
                                  
                                    {this.props.bottomPlayerActivated === "show" ? (
                                      <FontAwesomeIcon icon={faStop} className="play" />
                                     
                                    ) : (
                                      <FontAwesomeIcon icon={faPlay} />
                                    )}
                                  </span>

                                
                                  {/* <div className="icon float-right">
                                    <i className="tim-headphones"></i>
                                  </div> */}
                                  
                                </div>
                                <h3 className="album-name">{item.title}</h3>
                              </div>

                              <div className="artistName d-flex align-items-center">
                              <FontAwesomeIcon icon={faMicrophone} className="listIcon" />
                              <div className="name">Nasar Ali</div>
                              </div>

                              <div className="duration d-flex align-items-center">
                              <FontAwesomeIcon icon={faClock} className="listIcon" />
                              <div className="durationTime">03:03</div>
                              </div>

                              <div className="d-flex align-items-center">
                                <Link className="heroButton small">Download</Link>  
                              </div>

                               
                          




                           
                              </div>
                            </div>
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="page-padd"></div>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchAlbums: () => dispatch(actionCreators.fetchAlbums())
  };
};

const mapStateToProps = state => {
  return {
    albums: state.albums.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(albumListHome);
