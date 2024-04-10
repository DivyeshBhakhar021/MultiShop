import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link, NavLink, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from "react-redux";
import Review from '../../review/Review';
function Shop_detail(props) {
  const [productData, setProductData] = useState([]);
  const [SortBy, setSortBy] = useState('');
  const [detlis, setdetlis] = useState({});

  const { id } = useParams();
  console.log(id);

  const review = useSelector((state) => state.review)
  console.log(review);


  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8001/Product");
      const data = await response.json();

      setProductData(data)
      const findata = data.find((v) => v.id === id);
      setdetlis(findata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const vanderdata = {
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  }

  return (
    <div>
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <a className="breadcrumb-item text-dark" href="#">Home</a>
              <a className="breadcrumb-item text-dark" href="#">Shop</a>
              <span className="breadcrumb-item active">Shop Detail</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* Shop Detail Start */}
      <div className="container-fluid pb-5">

        {id
          ?
          <div className="row px-xl-5">
            <div className="col-lg-5 mb-30">
              <div id="product-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner bg-light">
                  <img className="w-100 h-100" src={`../${detlis?.img}`} alt="Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 h-auto mb-30">
              <div className="h-100 bg-light p-30">
                <h3>{detlis?.name}</h3>
                <div className="d-flex mb-3">
                  <div className="text-primary mr-2">
                    <small className="fas fa-star" />
                    <small className="fas fa-star" />
                    <small className="fas fa-star" />
                    <small className="fas fa-star-half-alt" />
                    <small className="far fa-star" />
                  </div>
                  <small className="pt-1">(99 Reviews)</small>
                </div>
                <h3 className="font-weight-semi-bold mb-4">${detlis?.price}.00</h3>
                <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                  clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                  Nonumy</p>
                <div className="d-flex align-items-center mb-4 pt-2">
                  <div className="input-group quantity mr-3" style={{ width: 130 }}>
                    <div className="input-group-btn">
                      <button className="btn btn-primary btn-minus">
                        <i className="fa fa-minus" />
                      </button>
                    </div>
                    <input type="text" className="form-control bg-secondary border-0 text-center" defaultValue={1} />
                    <div className="input-group-btn">
                      <button className="btn btn-primary btn-plus">
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                  <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1" /> Add To
                    Cart</button>
                </div>
                <div className="d-flex pt-2">
                  <strong className="text-dark mr-2">Share on:</strong>
                  <div className="d-inline-flex">
                    <a className="text-dark px-2" href>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="text-dark px-2" href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="text-dark px-2" href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="text-dark px-2" href>
                      <i className="fab fa-pinterest" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <div className="row px-xl-5">
            <div className="col-lg-5 mb-30">
              <div id="product-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner bg-light">
                  <img className="w-100 h-100" src={`img/product-1.jpg`} alt="Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 h-auto mb-30">
              <div className="h-100 bg-light p-30">
                <h3>camera</h3>
                <div className="d-flex mb-3">
                  <div className="text-primary mr-2">
                    <small className="fas fa-star" />
                    <small className="fas fa-star" />
                    <small className="fas fa-star" />
                    <small className="fas fa-star-half-alt" />
                    <small className="far fa-star" />
                  </div>
                  <small className="pt-1">(99 Reviews)</small>
                </div>
                <h3 className="font-weight-semi-bold mb-4">$ 123.00</h3>
                <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                  clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                  Nonumy</p>
                <div className="d-flex align-items-center mb-4 pt-2">
                  <div className="input-group quantity mr-3" style={{ width: 130 }}>
                    <div className="input-group-btn">
                      <button className="btn btn-primary btn-minus">
                        <i className="fa fa-minus" />
                      </button>
                    </div>
                    <input type="text" className="form-control bg-secondary border-0 text-center" defaultValue={1} />
                    <div className="input-group-btn">
                      <button className="btn btn-primary btn-plus">
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                  <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1" /> Add To
                    Cart</button>
                </div>
                <div className="d-flex pt-2">
                  <strong className="text-dark mr-2">Share on:</strong>
                  <div className="d-inline-flex">
                    <a className="text-dark px-2" href>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="text-dark px-2" href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="text-dark px-2" href>
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="text-dark px-2" href>
                      <i className="fab fa-pinterest" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        }

        <div className="row px-xl-5">
          <div className="col">
            <div className="bg-light p-30">
              <div className="nav nav-tabs mb-4">
                <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Information</a>
                <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <h4 className="mb-3">Product Description</h4>
                  <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                  <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <h4 className="mb-3">Additional Information</h4>
                  <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0">
                          Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                        </li>
                        <li className="list-group-item px-0">
                          Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                        </li>
                        <li className="list-group-item px-0">
                          Duo amet accusam eirmod nonumy stet et et stet eirmod.
                        </li>
                        <li className="list-group-item px-0">
                          Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0">
                          Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                        </li>
                        <li className="list-group-item px-0">
                          Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                        </li>
                        <li className="list-group-item px-0">
                          Duo amet accusam eirmod nonumy stet et et stet eirmod.
                        </li>
                        <li className="list-group-item px-0">
                          Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row">
                    <div className="col-md-6">

                      {
                         review.isLoding ? <p>loding...</p> :
                         review.error ? <h1>{review.error}</h1> :
                           review.review.map((v, index) => (
                          <div className="media mb-4">
                            <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: 45 }} />
                            <div className="media-body">
                              <h5>{v.name}</h5><p>{v.reviewDateing}</p>
                              <div className="text-primary mb-2">
                              <Rating name="read-only" value={v.rating} readOnly />
                              </div>
                              <p>{v.review}</p>
                            </div>
                          </div>
                        ))
                      }

                    </div>
                    <div className="col-md-6">
                      <h4 className="mb-4">Leave a review</h4>
                      <small>Your email address will not be published. Required fields are marked *</small>
                      <div className="d-flex my-3">
                      </div>
                      <>
                        <Review />
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shop Detail End */}
      {/* Products Start */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
        <div className="row px-xl-5">

          {
            productData.map((v) => (
              <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link to={`/${v.id}`} >
                  <a href="">
                    <div className="product-item bg-light mb-4">
                      <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={v.img} alt />
                        <div className="product-action">
                          <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                          <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
                          <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
                          <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
                        </div>
                      </div>
                      <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href>{v.name}</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                          <h5>{v.price}</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                          <small className="fa fa-star text-primary mr-1" />
                          <small className="fa fa-star text-primary mr-1" />
                          <small className="fa fa-star text-primary mr-1" />
                          <small className="fa fa-star text-primary mr-1" />
                          <small className="fa fa-star text-primary mr-1" />
                          <small>(99)</small>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
      {/* Products End */}
    </div>

  );
}

export default Shop_detail;