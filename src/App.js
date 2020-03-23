import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/header/header";
import Footer from "./components/Footer/footer.component";
import Register from "./components/Pages/Account/register";
import LogIn from "./components/Pages/Account/logIn";
import HomePage from "./components/Pages/home.component";
import AboutPage from "./components/Pages/About/aboutus";
import GalleryPage from "./components/Pages/Gallery/galleryMain";
import MusicPage from "./components/Pages/Music/musicList";
import AchievementsPage from "./components/Pages/Achievements/achievements";


import "./assets/intro/css/intro.css";
import "./assets/css/app.css";

class ScrollToTop extends Component {
  
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}
const Scroll = withRouter(ScrollToTop);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="AppWrap"> 
            <Header />
            <div className="AppContainer hero-conatiner">
                <Scroll>
                  <Switch>
                    <Route exact  path="/index">
                      <HomePage />
                    </Route>
                    <Route exact path="/about">
                      <AboutPage />
                    </Route>
                    <Route exact path="/gallery">
                      <GalleryPage />
                    </Route>
                    <Route exact path="/music">
                      <MusicPage
                      />
                    </Route>
                    <Route exact path="/achievements">
                    <AchievementsPage/>
                  </Route>
                    <Route exact path="/register">
                    <Register />
                  </Route>
                    <Route exact path="/login">
                      <LogIn />
                    </Route>
                  </Switch>
                </Scroll>
              <div className="push"></div>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
