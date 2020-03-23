import React, { Component } from "react";
import SliderHero from "../Pages/slider/slider.component";
import AlbumListHome from "./Music/musicList";
import FixedBottomPlayer from "../uicomponents/PlayerBottom/fixedBottomPlayer.component";
import VideoList from "../Pages/Video/Video";
import GalleryHome from "../Pages/Gallery/gallery";
import ProductsHome from "../Pages/Products/products";
import { connect } from "react-redux";
class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bottomPlayerActivated: "hide"
    };
    this.PlayVideoHandler = this.PlayVideoHandler.bind(this);
  }

  PlayVideoHandler() {
    console.log("clicked");

    
    let show = this.state.bottomPlayerActivated;
    let index = show.indexOf("show");

    if (index !== -1) {
      show = "hide";
    } else {
      show = "show";
    }

    this.setState({ bottomPlayerActivated: show });
  }

  render() {
    return (
      <div>
        <SliderHero />
        {this.props.homebanners ? (
          <div>
           
            <AlbumListHome 
              PlayHandleBtn = {this.PlayVideoHandler}
              bottomPlayerActivated = {this.state.bottomPlayerActivated} 
            />
         
           
          </div>
        ) : (
          ""
        )}

        {this.state.bottomPlayerActivated === "show" ? (
          <FixedBottomPlayer
            action={this.PlayVideoHandler}
            ArtistImage={"http://admin.urbandmusic.com/storage/uploads/VcPkrjMSGFZMQWl9jhFNHsGAAPZyn4j4okFHHygl.png"}
            ArtistTittle={""}
            trackUrl={""}
          />
        ) : (
          ""
        )}
        <VideoList/>
        <GalleryHome/>
        <ProductsHome/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    homebanners: state.homebanner.items
  };
};
export default connect(mapStateToProps)(HomePage);
