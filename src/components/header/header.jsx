import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserAlt, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../header/header.component.css";
import BurgerMenu from "../header/burgerMenu.component";


library.add(faUserAlt, faCartPlus);

class Header extends Component {
  render() {

    return (
      <div className="AppHeader">
        <header className="header header-magic-line headroom headroom--not-bottom headroom--pinned headroom--top">
          <div className="tim-container clearfix">
            <div className="header-magic-line-inner clearfix d-flex full-wrap">
              <div id="site-logo" className="heroLogo">
                <NavLink to="/" className="logo-main">
                  <img src={require("../../assets/img/logo.png")} alt="hero" />
                </NavLink>
              </div>
              <div className="d-flex full-wrap nav-wrap">
                <div className="nav">
                  <ul className="group navItems" id="header-menu-magic-line">
                    <li>
                      <NavLink
                        to="/index" 
                        
                        activeClassName="selected"
                       
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        
                        to="/about" 
                        activeClassName="selected"
                       
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/gallery"
                        activeClassName="selected"
                        
                      >
                        Gallery
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/music"
                       activeClassName="selected"
                       >
                        Music
                      </NavLink>
                    </li>
                    <li>
                    <NavLink to="/songs"
                     activeClassName="selected"
                     >
                      Songs
                    </NavLink>
                  </li>
                    <li className="menu-item-has-children"
                    activeClassName="selected"
                    >
                      Store
                      <ul className="sub-menu">
                        <li>
                          <NavLink to="/photos">Photos</NavLink>
                        </li>
                        <li>
                          <NavLink to="/book">Book</NavLink>
                        </li>
                        <li>
                          <NavLink to="/music">Music</NavLink>
                        </li>
                        <li>
                          <NavLink to="/song">Songs</NavLink>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <NavLink
                        to="/achievements" 
                        activeClassName="selected"
                       
                      >
                        Achievements
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <ul className="d-inline-flex avathar-sec DNone768">
                  <li className="d-flex pos-relative">
                    <NavLink to="/login" className="accountBtn">
                      <span>Log In</span>
                      <FontAwesomeIcon icon={faUserAlt} className="ico-user" />
                    </NavLink>
                    <NavLink to="/register" className="accountBtn signUp">
                      <span>Sign Up</span>
                      
                    </NavLink>
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
export default Header;
