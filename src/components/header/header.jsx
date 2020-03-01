import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserAlt, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../header/header.component.css";
import BurgerMenu from "../header/burgerMenu.component";
import icon1 from "../../assets/img/icn1.png";
import icon2 from "../../assets/img/icn2.png";
import icon3 from "../../assets/img/icn3.png";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

library.add(faUserAlt, faCartPlus);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToken: localStorage.getItem("urbandtoken") ? true : false,
      activeBox: "hide",
      redirect: false,
      logo: ""
    };
    this.ToggleBox = this.ToggleBox.bind(this);
  }

  componentDidMount() {
    this.headercheck();
    this.fetchcontact();

    console.log("header");
  }

  fetchcontact() {
    this.props
      .fetchContact()
      .then(() => {
        if (this.props.contact) {
          var contact = this.props.contact;
          if (contact) {
            this.setState({
              logo: contact.contactus.image
            });
          }
        }
      })
      .catch(error => {
        if (error.error) {
          this.setState({
            errpassword: error.error
          });
        }
      });
  }

  headercheck() {
    this.props
      .fetchMenues()
      .then(() => {
        if (this.props.menues.length) {
          var headers = this.props.menues;
          if (headers) {
            for (let i = 0; i < headers.length; i++) {
              if (headers[i].title === "Event Tickets") {
                localStorage.setItem("ticketheader", "true");
              }
            }
          }
        }
      })
      .catch(error => {
        if (error.error) {
          this.setState({
            errpassword: error.error
          });
        }
      });
  }

  ToggleBox() {
    let show = this.state.activeBox;
    let index = show.indexOf("show");
    if (index !== -1) {
      show = "hide";
    } else {
      show = "show";
    }
    this.setState({ activeBox: show });
  }

  gotologout = () => {
    localStorage.removeItem("urbandtoken");
    localStorage.removeItem("urbandData");
    window.location.href = "/";
    // reset login reducer
    this.setState({
      redirect: true,
      isToken: localStorage.getItem("urbandtoken") ? true : false
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("Header componentDidUpdate", prevProps)
  //   if (this.props.isLoggedIn) {
  //     this.headercheck()
  //   this.fetchcontact()
  //   }
  // }

  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    const menue = this.props.menues;

    return (
      <div className="AppHeader">
        <div
          onClick={this.ToggleBox}
          className={
            "overlayBoxTp1 " +
            (this.state.activeBox === "show" ? "show" : "hidden")
          }
        >
          &nbsp;
        </div>
        <header className="header header-magic-line headroom headroom--not-bottom headroom--pinned headroom--top">
          <div className="tim-container clearfix">
            <div className="header-magic-line-inner clearfix d-flex full-wrap">
              <div id="site-logo" className="float-left">
                <NavLink to="/" className="logo-main">
                  <img src={image_url + this.state.logo} alt="hero urband" />
                </NavLink>
              </div>
              <div className="d-flex full-wrap nav-wrap">
                <div className="nav">
                  <ul className="group" id="header-menu-magic-line">
                    <li key="">
                      <NavLink
                        to="/index"
                        activeClassName="selected"
                        className="in-array"
                      >
                        Home
                        </NavLink>
                    </li>
                    <li key="">
                      <NavLink
                        to="/who-we-are"
                        activeClassName="selected"
                        className="in-array"
                      >
                        About
                        </NavLink>
                    </li>
                    <li className="menu-item-has-children in-array" key="">
                      Store
                        <ul className="sub-menu">
                        <li key="">
                          <Link to="/book">Book</Link>
                        </li>
                        <li key="">
                          <Link to="/music">Music</Link>
                        </li>
                        <li key="">
                          <Link to="/song">Songs</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children in-array" key="">
                      Media
                        <ul className="sub-menu">
                        <li key="">
                          <Link to="/photos">Photos</Link>
                        </li>
                        <li key="">
                          <Link to="/videos">Videos</Link>
                        </li>
                        <li key="">
                          <Link to="/musics">Musics</Link>
                        </li>
                        <li key="">
                          <Link to="/songs">Songs</Link>
                        </li>
                      </ul>
                    </li>
                    <li key="">
                      <NavLink
                        to="/achievements"
                        activeClassName="selected"
                        className="in-array"
                      >
                        Achievements
                        </NavLink>
                    </li>

                  </ul>
                </div>

                <ul className="d-inline-flex avathar-sec DNone768">
                  <li className="d-flex mr-4">
                    {this.props.isLoggedIn || this.state.isToken ? (
                      <Link to="/cart">
                        <span>Cart</span>
                        <FontAwesomeIcon
                          icon={faCartPlus}
                          className="ico-user"
                        />
                      </Link>
                    ) : (
                        ""
                      )}
                  </li>
                  <li className="d-flex pos-relative">
                    {!this.props.isLoggedIn && !this.state.isToken ? (
                      <Link to="/login">
                        <span>Log In</span>
                        <FontAwesomeIcon
                          icon={faUserAlt}
                          className="ico-user"
                        />
                      </Link>
                    ) : (
                        ""
                      )}
                    {this.props.isLoggedIn || this.state.isToken ? (
                      <Link onClick={this.ToggleBox}>
                        <span>Profile</span>
                        <FontAwesomeIcon
                          icon={faUserAlt}
                          className="ico-user"
                        />
                        <div
                          className={
                            "BoxStyleTp105 " +
                            (this.state.activeBox === "show"
                              ? "show"
                              : "hidden")
                          }
                        >
                          <div>
                            <Link to="/profile">
                              <img src={icon1} alt="" />
                              <span>Profile</span>
                            </Link>
                            <Link to="/profile/profileAddress">
                              <img src={icon2} alt="" />
                              <span>Address</span>
                            </Link>
                            <Link to="/profile/profileOrders">
                              <img src={icon3} alt="" />
                              <span>Orders</span>
                            </Link>
                            <Link
                              onClick={this.gotologout}
                              className="LogoutBtn"
                            >
                              <span>Log Out</span>
                            </Link>
                          </div>
                        </div>
                      </Link>
                    ) : (
                        ""
                      )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <BurgerMenu />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchContact: () => dispatch(actionCreators.fetchContact()),
    fetchMenues: () => dispatch(actionCreators.fetchMenues())
  };
};

const mapStateToProps = state => {
  return {
    menues: state.menues.items,
    contact: state.contact.items,
    isLoggedIn: state.login.isLoggedIn
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
