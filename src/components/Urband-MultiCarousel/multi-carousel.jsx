import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-multi-carousel/lib/styles.css";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";

library.add(faPlay);
class multiCarouselHero extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    const posts = this.props.posts;
    //console.log(posts);

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <section className="artist-lineup hero">
        <Carousel responsive={responsive} arrows={true}>
          <div className="videoList">
            <Link
              to={{
                pathname: `/artist`
              }}
            >
              <div className="artist-single home-page">
                <img
                  src={require("../../media/about/1.jpg")}
                  className="ink-pattern"
                  alt="Album"
                />

                <div className="artist-single-content">
                  <h6>Kina Kiss forever</h6>
                  <p>live perform</p>
                </div>
                <span className="playBtn large alignMiddle"><FontAwesomeIcon icon={faPlay} /></span>
              </div>
            </Link>
          </div>
          <div className="videoList">
          <Link
            to={{
              pathname: `/artist`
            }}
          >
            <div className="artist-single home-page">
              <img
                src={require("../../media/about/2.jpg")}
                className="ink-pattern"
                alt="Album"
              />

              <div className="artist-single-content">
                <h6>Kina Kiss forever</h6>
                <p>live perform</p>
              </div>
              <span className="playBtn large alignMiddle"><FontAwesomeIcon icon={faPlay} /></span>
            </div>
          </Link>
        </div>  
        <div className="videoList">
        <Link
          to={{
            pathname: `/artist`
          }}
        >
          <div className="artist-single home-page">
            <img
              src={require("../../media/about/3.jpg")}
              className="ink-pattern"
              alt="Album"
            />

            <div className="artist-single-content">
              <h6>Kina Kiss forever</h6>
              <p>live perform</p>
            </div>
            <span className="playBtn large alignMiddle"><FontAwesomeIcon icon={faPlay} /></span>
          </div>
        </Link>
      </div> 
      <div className="videoList">
      <Link
        to={{
          pathname: `/artist`
        }}
      >
        <div className="artist-single home-page">
          <img
            src={require("../../media/about/4.jpg")}
            className="ink-pattern"
            alt="Album"
          />

          <div className="artist-single-content">
            <h6>Kina Kiss forever</h6>
            <p>live perform</p>
          </div>
          <span className="playBtn large alignMiddle"><FontAwesomeIcon icon={faPlay} /></span>
        </div>
      </Link>
    </div> 
    <div className="videoList">
    <Link
      to={{
        pathname: `/artist`
      }}
    >
      <div className="artist-single home-page">
        <img
          src={require("../../media/about/5.jpg")}
          className="ink-pattern"
          alt="Album"
        />

        <div className="artist-single-content">
          <h6>Kina Kiss forever</h6>
          <p>live perform</p>
        </div>
        <span className="playBtn large alignMiddle"><FontAwesomeIcon icon={faPlay} /></span>
      </div>
    </Link>
  </div>  
        </Carousel>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(actionCreators.fetchPosts())
  };
};

const mapStateToProps = state => {
  return {
    posts: state.posts.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(multiCarouselHero);
