import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext  } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../slider/slider.component.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight,faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faChevronRight,faChevronLeft);

class sliderHero extends React.Component {
  state = {
    backgroundImage: []
  };
  componentDidMount() {
    this.props.fetchHomeBanner("Home");
  }

  render() {
    //const image_url = "https://admin.urbandmusic.com/storage/";
    const getbanner = this.props.homebanners;
    if (getbanner) {
      //var total = getbanner.length;
    }
    //const ticketFlag = localStorage.getItem('ticketheader');
    return (
      <div className="heroCarouselBox ani-slideInDown">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={45}
          totalSlides={2}
          orientation="horizontal"
          playDirection="forward"
          touchEnabled={true}
          isPlaying={true}
          interval={7000}
          infinite={true}
        >
        <Slider>
        <Slide index={0}><img src= {require('../../../assets/img/slider1.jpg')} alt="slider 1"></img></Slide>
        <Slide index={1}><img src= {require('../../../assets/img/slider2.jpg')} alt="slider 2"></img></Slide>
       
      </Slider>
      <div className="buttonWrap">
      <ButtonBack className="controlLeft">
      <FontAwesomeIcon
      icon={ faChevronLeft }
      className=""
    /></ButtonBack>
        <ButtonNext className="controlRight">
        <FontAwesomeIcon
        icon={faChevronRight}
        className=""
      /></ButtonNext>
        </div>
        </CarouselProvider>
      </div>
    );

    // return (

    // );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchHomeBanner: id => dispatch(actionCreators.fetchHomeBanner(id))
  };
};

const mapStateToProps = state => {
  return {
    homebanners: state.homebanner.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sliderHero);
