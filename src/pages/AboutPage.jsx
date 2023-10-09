import React from "react";
import { Footer, Navbar } from "../components";
import MyImg from "../assets/jewl.jpg";
import Team1 from "../assets/team1.jpg";
import Team2 from "../assets/team2.jpg";
import Team3 from "../assets/team3.jpg";
import Team4 from "../assets/team4.jpg";
import { IoDiamond } from "react-icons/io5";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <>
        {/* Hero Start */}
        <div className="container-fluid bg-light py-6 my-6 mt-0">
          <div className="container text-center animated bounceInDown">
            <h1 className="display-1 mb-4">About Us</h1>
            <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
             

              
            </ol>
          </div>
        </div>
        {/* Hero End */}
        {/* About Satrt */}
        <div className="container-fluid py-6">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                <img src={MyImg} className="img-fluid rounded" alt="" />
              </div>
              <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
               
                <h1 className="display-5 mb-4">
                  Trusted By 200 + satisfied clients
                </h1>
                <p className="mb-4">
                Our jewelry is crafted with the utmost precision and attention to detail. Each piece is a testament to the skill of our master jewelers, who combine traditional craftsmanship with contemporary design to create jewelry that stands the test of time. You'll find an array of exquisite options, from classic diamond jewelry to vibrant gemstone creations.
                </p>
                <div className="row g-4 text-dark mb-5">
                  <div className="col-sm-6">
                    <IoDiamond style={{ margin: "10px", color: "#D4A762" }} />
                    High Quality
                  </div>
                  <div className="col-sm-6">
                    <IoDiamond style={{ margin: "10px", color: "#D4A762" }} />
                    24/7 Customer Support
                  </div>
                  <div className="col-sm-6">
                    <IoDiamond style={{ margin: "10px", color: "#D4A762" }} />
                    Easy Customization Options
                  </div>
                  <div className="col-sm-6">
                    <IoDiamond style={{ margin: "10px", color: "#D4A762" }} />
                    Expert Designers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}

        <>
          {/* Team Start */}
          <div className="container-fluid team py-6">
            <div className="container">
              <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
               
                <h1 className="display-5 mb-5">
                  We have experienced designer Team
                </h1>
              </div>
              <div className="row g-4">
                <div
                  className="col-lg-3 col-md-6 wow bounceInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item rounded">
                    <img
                      className="img-fluid rounded-top "
                      src={Team1}
                      alt=""
                    />
                    <div className="team-content text-center py-3 bg-dark rounded-bottom">
                      <h4 className="text-primary">Henry</h4>
                      <p className="text-white mb-0">Decoration Designer</p>
                    </div>
                    <div className="team-icon d-flex flex-column justify-content-center m-4">
                      <a
                        className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                        href="/"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 wow bounceInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="team-item rounded">
                    <img
                      className="img-fluid rounded-top "
                      src={Team2}
                      alt=""
                    />
                    <div className="team-content text-center py-3 bg-dark rounded-bottom">
                      <h4 className="text-primary">Jemes Born</h4>
                      <p className="text-white mb-0">Executive Manager</p>
                    </div>
                    <div className="team-icon d-flex flex-column justify-content-center m-4">
                      <a
                        className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 wow bounceInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="team-item rounded">
                    <img
                      className="img-fluid rounded-top "
                      src={Team3}
                      alt=""
                    />
                    <div className="team-content text-center py-3 bg-dark rounded-bottom">
                      <h4 className="text-primary">Martin Hill</h4>
                      <p className="text-white mb-0">Expert Designer</p>
                    </div>
                    <div className="team-icon d-flex flex-column justify-content-center m-4">
                      <a
                        className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 wow bounceInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="team-item rounded">
                    <img
                      className="img-fluid rounded-top "
                      src={Team4}
                      alt=""
                    />
                    <div className="team-content text-center py-3 bg-dark rounded-bottom">
                      <h4 className="text-primary">Adam Smith</h4>
                      <p className="text-white mb-0">Expert Designer</p>
                    </div>
                    <div className="team-icon d-flex flex-column justify-content-center m-4">
                      <a
                        className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                        href=""
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                        href=""
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                        href=""
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Team End */}
        </>
      </>

      <Footer />
    </>
  );
};

export default AboutPage;