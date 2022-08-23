import React from "react";
import Nav from "../../Nav/Nav";
import "./HomeCarousel.css";

export default function HomeCarousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide homecarousel"
        data-bs-ride="false"
        style={{ position: "relative" }}
      >
        <Nav />
        <div className="mask_overlay"></div>
        <div
          style={{ zIndex: "50", visibility: "hidden" }}
          className="carousel-indicators"
        >
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* First Carousel start */}

          <div className="carousel-item active">
            <img
              src="/Images/CodeStackLab.jpg"
              className="d-block w-100 car_img"
              alt="CodeStack Labs"
            />
            <div
              style={{
                zIndex: "50",
                position: "absolute",
                top: "40vh",
              }}
              className="carousel-caption align-items-center"
            >
              <h1 className="mb-5 car_head">
                <span
                  className="d-none d-md-inline"
                  style={{
                    fontSize: "25px",
                    opacity: "0.8",
                    position: "relative",
                    top: "-40px",
                  }}
                >
                  {"<h1>"}
                </span>
                CodeStack Labs
                <span
                  className="d-none d-md-inline"
                  style={{
                    fontSize: "25px",
                    opacity: "0.8",
                    position: "relative",
                    bottom: "-20px",
                  }}
                >
                  {"</h1>"}
                </span>
              </h1>
              <p className="caro_para">
                <span
                  className="d-none d-md-inline"
                  style={{
                    fontSize: "25px",
                    opacity: "0.8",
                    position: "relative",
                    top: "-40px",
                  }}
                >
                  {"<p>"}
                </span>
                CodeStack Labs is a Custom Software Development, Web
                Applications Services, IT Staffing, and Technology Consulting
                Company
                <span
                  className="d-none d-md-inline"
                  style={{
                    fontSize: "25px",
                    opacity: "0.8",
                    position: "relative",
                    bottom: "-20px",
                  }}
                >
                  {"<p>"}
                </span>
              </p>
              <button className="caro_Btn mt-5">About Us</button>
            </div>
          </div>

          {/* Second Carousel Start */}
          <div className="carousel-item">
            <img
              src="/Images/CodeStack-Labs.jpg"
              className="d-block w-100 car_img"
              alt="Code Stack Labs"
            />
            <div
              style={{ zIndex: "50", position: "absolute", top: "39vh" }}
              className="carousel-caption"
            >
              <h1 className="mb-5 car_head">
                <span
                  className="d-none d-md-inline"
                  style={{
                    fontSize: "25px",
                    opacity: "0.8",
                    position: "relative",
                    top: "-40px",
                  }}
                >
                  {"<h1>"}
                </span>
                Bussiness & Technology Solutions
                <span
                  className="d-none d-md-inline"
                  style={{
                    fontSize: "25px",
                    opacity: "0.8",
                    position: "relative",
                    bottom: "-20px",
                  }}
                >
                  {"</h1>"}
                </span>
              </h1>
              <p className="caro_para">
                <span
                  className="d-none d-md-inline"
                  style={{
                    fontSize: "25px",
                    opacity: "0.8",
                    position: "relative",
                    top: "-40px",
                  }}
                >
                  {"<p>"}
                </span>
                Optimized IT solutions supercharge your productivity and growth,
                and our IT services make it easy to take full advantage.
                <span
                  className="d-none d-md-inline"
                  style={{
                    fontSize: "25px",
                    opacity: "0.8",
                    position: "relative",
                    bottom: "-20px",
                  }}
                >
                  {"<p>"}
                </span>
              </p>
              <a href="#ourTools">
                <button className="caro_Btn mt-5">Tools</button>
              </a>
            </div>
          </div>

          {/* Third Carousel start */}
          <div className="carousel-item">
            <img
              src="/Images/codestacklabs.jpg"
              className="d-block w-100 car_img"
              alt="Codestack labs"
            />
            <div
              style={{ zIndex: "50", position: "absolute", top: "35vh" }}
              className="carousel-caption"
            >
              <h1 className="mb-5 car_head">
                <span
                  className="d-none d-md-inline"
                  style={{
                    fontSize: "25px",
                    opacity: "0.8",
                    position: "relative",
                    top: "-40px",
                  }}
                >
                  {"<h1>"}
                </span>
                Check Our Services
                <span
                  className="d-none d-md-inline"
                  style={{
                    fontSize: "25px",
                    opacity: "0.8",
                    position: "relative",
                    bottom: "-20px",
                  }}
                >
                  {"</h1>"}
                </span>
              </h1>
              <p className="caro_para">
                <span
                  className="d-none d-md-inline"
                  style={{
                    fontSize: "25px",
                    opacity: "0.8",
                    position: "relative",
                    top: "-40px",
                  }}
                >
                  {"<p>"}
                </span>
                CodeStack Labs provides turn-key digital marketing services,
                which means we offer everything your business needs to execute
                its marketing strategy. Explore our services now to get started!
                <span
                  className="d-none d-md-inline"
                  style={{
                    fontSize: "25px",
                    opacity: "0.8",
                    position: "relative",
                    bottom: "-20px",
                  }}
                >
                  {"<p>"}
                </span>
              </p>
              <button className="caro_Btn mt-5">Our Services</button>
            </div>
          </div>
        </div>
        <button
          style={{ zIndex: "50" }}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          style={{ zIndex: "50" }}
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
