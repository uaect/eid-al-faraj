import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "./image-gallery.scss";
import "./ionicons.scss";
import "./_ionicons-variables.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions";
import AddedToCartAnimation from "../../../components/hoc/AddedTocartAnimation/index";
library.add(faCartPlus);
function createMarkup(item) {
  return { __html: item };
}
class ShopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      isToken: false,
      addcartflag: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.state = { AddedToCartIcon: false };
  }

  componentDidMount() {
    let storeid = this.props.location.pathname.split("/").pop();
    this.props.fetchStoreDetails(storeid);
  }

  handleClick(id) {
    this.props.addtocart(id);
    this.setState({ addcartflag: true });
    this.setState({ AddedToCartIcon: true });
    setTimeout(
      function() {
        this.setState({ AddedToCartIcon: false });
      }.bind(this),
      2000
    );
  }

  render() {
    var token = localStorage.getItem("urbandtoken");
    var image_url = "https://admin.urbandmusic.com/storage/";
    var images = [];
    const storedetails = this.props.storedetails;
    if (storedetails.files) {
      for (var i = 0; i < storedetails.files.length; i++) {
        var image = [
          {
            original: image_url + storedetails.files[i].image,
            thumbnail: image_url + storedetails.files[i].image
          }
        ];
        if (images[0]) {
          images[0].push(image[0]);
        } else {
          images.push(image);
        }
      }
    }
    return (
      <div>
        <AddedToCartAnimation isActive={this.state.AddedToCartIcon} />
        {storedetails ? (
          <section className="page-header store-banner">
            <div className="tim-container">
              <div className="page-header-title text-center">
                <h3>Store</h3>
                <h2>{storedetails.title}</h2>
              </div>
            </div>
          </section>
        ) : (
          ""
        )}
        <section className="single-product">
          <div className="container">
            <div className="single-product-wrapper">
              <div className="row">
                <div className="col-md-5 col-sm-6 detail-left">
                  <ImageGallery
                    items={images[0]}
                    showPlayButton={false}
                    showFullscreenButton={false}
                  />
                </div>

                <div className="col-md-7 col-sm-6">
                  <div className="single-product-details">
                    <h2 className="product-title">{storedetails.title}</h2>

                    <p className="price">
                      <ins>
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            AED
                          </span>
                          {storedetails.price}
                        </span>
                      </ins>

                      {/*<del>
                        <span>
                          <span>AED</span>
                          200
                        </span>
                      </del>*/}
                    </p>

                    <div className="product-cart">
                      {token ? (
                        <button
                          type="submit"
                          name="add-to-cart"
                          value="0"
                          className="tim-cart-btn"
                          onClick={() => this.handleClick(storedetails.id)}
                        >
                          <FontAwesomeIcon
                            icon={faCartPlus}
                            className="cart-icon"
                          />
                          Add to cart
                        </button>
                      ) : (
                        <Link
                          to={{
                            pathname: "/login",
                            state: {
                              from: `/detail/${storedetails.id}`
                            }
                          }}
                          type="submit"
                          name="add-to-cart"
                          value="0"
                          className="tim-cart-btn"
                        >
                          <FontAwesomeIcon
                            icon={faCartPlus}
                            className="cart-icon"
                          />
                          Add to cart
                        </Link>
                      )}
                    </div>
                    <div className="woocommerce-product-details__short-description">
                      <h4>Product Details</h4>
                      <div
                        dangerouslySetInnerHTML={createMarkup(
                          storedetails.description
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchStoreDetails: storeid =>
      dispatch(actionCreators.fetchStoreDetails(storeid)),
    addtocart: storeid => dispatch(actionCreators.addtocart(storeid))
  };
};

const mapStateToProps = state => {
  return {
    storedetails: state.storedetails.items,
    addcart: state.addtocart.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopDetail);
