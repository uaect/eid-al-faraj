import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";


class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: "",
      social: "",
      facebook: "",
      Twitter: "",
      Youtube: "",
      LinkedIn: "",
      Instagram: "",
      SoundCloud: "",
      Vimeo: ""
    }
  }
  componentDidMount() {
    this.props.fetchWhoWeAre()
      .then(() => {
        const detail = this.props.detail.result;
        if (detail) {
          if (detail.whoweare)
            this.setState({ description: detail.whoweare });

        }
      })
      .catch((error) => {
        if (error) {
        }
      })
    this.props.getsocial()
      .then(() => {
        //console.log("foothher");
        const social = this.props.social;
        if (social) {
          for (let i = 0; i < social.length; i++) {
            if (social[i].title === "Facebook") {
              this.setState({
                facebook: social[i].description
              });
            }
            if (social[i].title === "Twitter") {
              this.setState({
                Twitter: social[i].description
              });
            }
            if (social[i].title === "Youtube") {
              this.setState({
                Youtube: social[i].description
              });
            }
            if (social[i].title === "LinkedIn") {
              this.setState({
                LinkedIn: social[i].description
              });
            }
            if (social[i].title === "Instagram") {
              this.setState({
                Instagram: social[i].description
              });
            }
            if (social[i].title === "SoundCloud") {
              this.setState({
                SoundCloud: social[i].description
              });
            }
            if (social[i].title === "Vimeo") {
              this.setState({
                Vimeo: social[i].description
              });
            }
          }


          //console.log("fooer", this.state);
        }
      })
      .catch((error) => {
        if (error) {
        }
      })
  }
  render() {
    return (
      <div>
      <footer>
      <div className="footer-container">
        <div className="footer-wrap">
          <div className="logo"><Link to =""><img src = {require('../../assets/img/logo.png')}  alt="hero" /></Link></div>
          <div className="footer-menu">
            <div className="footer-sec-title">EXPLORE</div>
            <ul>
              <li><Link to ="">Home</Link></li>
              <li><Link to ="">About</Link></li>
              <li><Link to ="">Gallery</Link></li>
              <li><Link to ="">Music</Link></li>
              <li><Link to ="">Store</Link></li>
              <li><Link to ="">Achievemnts</Link></li>
            </ul>
          </div>
          <div className="news-letter">
            <div className="footer-sec-title">NEVER MISS AN UPDATE ?</div>
            <div className="letter-container">
              <div className="input-group mb-3">
                <input type="text" className="form-control subscribeForm" placeholder="Your Email"
                  aria-label="Your Email"/>
                <div className="input-group-append">
                  <button className="btn send" type="button" id="button-addon2">Sign
                  Up</button>
                </div>
              </div>
            </div>
            <div className="social-wrap">
               <Link to ="">
                <svg version="1.1" width="24px" height="24px"
                  viewBox="0 0 430.117 430.117">
                  <g fill="#fff">
                    <path id="Twitter__x28_alt_x29_" d="M381.384,198.639c24.157-1.993,40.543-12.975,46.849-27.876
                      c-8.714,5.353-35.764,11.189-50.703,5.631c-0.732-3.51-1.55-6.844-2.353-9.854c-11.383-41.798-50.357-75.472-91.194-71.404
                      c3.304-1.334,6.655-2.576,9.996-3.691c4.495-1.61,30.868-5.901,26.715-15.21c-3.5-8.188-35.722,6.188-41.789,8.067
                      c8.009-3.012,21.254-8.193,22.673-17.396c-12.27,1.683-24.315,7.484-33.622,15.919c3.36-3.617,5.909-8.025,6.45-12.769
                      C241.68,90.963,222.563,133.113,207.092,174c-12.148-11.773-22.915-21.044-32.574-26.192
                      c-27.097-14.531-59.496-29.692-110.355-48.572c-1.561,16.827,8.322,39.201,36.8,54.08c-6.17-0.826-17.453,1.017-26.477,3.178
                      c3.675,19.277,15.677,35.159,48.169,42.839c-14.849,0.98-22.523,4.359-29.478,11.642c6.763,13.407,23.266,29.186,52.953,25.947
                      c-33.006,14.226-13.458,40.571,13.399,36.642C113.713,320.887,41.479,317.409,0,277.828
                      c108.299,147.572,343.716,87.274,378.799-54.866c26.285,0.224,41.737-9.105,51.318-19.39
                      C414.973,206.142,393.023,203.486,381.384,198.639z" />
                  </g>
                </svg>
            </Link>
            <Link to ="">
                <svg version="1.1" width="18px" height="19px"
                  viewBox="0 0 430.113 430.114">
                  <g fill="#fff">
                    <path id="Facebook"
                      d="M158.081,83.3c0,10.839,0,59.218,0,59.218h-43.385v72.412h43.385v215.183h89.122V214.936h59.805
                      c0,0,5.601-34.721,8.316-72.685c-7.784,0-67.784,0-67.784,0s0-42.127,0-49.511c0-7.4,9.717-17.354,19.321-17.354
                      c9.586,0,29.818,0,48.557,0c0-9.859,0-43.924,0-75.385c-25.016,0-53.476,0-66.021,0C155.878-0.004,158.081,72.48,158.081,83.3z" />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="list">
          <div>
          <Link to ="">Terms & Conditions</Link>
          <Link to ="">Privacy Policy</Link>
          </div>
           
          </div> <span>© 2020 Eid Al Faraj. All rights reserved.</span>
        </div>
      </div>
</footer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchWhoWeAre: () => dispatch(actionCreators.fetchWhoWeAre()),
    getsocial: () => dispatch(actionCreators.getsocial())
  };
};

const mapStateToProps = state => {
  return {
    detail: state.whoweare.items,
    social: state.social.items
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);


