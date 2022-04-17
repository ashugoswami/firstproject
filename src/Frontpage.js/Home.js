import React from "react";
import coff from "../images/cofee2.jpg";
import coft from "../images/cof9.jpg";
import cofe from "../images/cofe3.jpg";
import About from "./About";
import Contact from "./Contact";
import Meenu from "./Meenu";
import Header from "./Header";
import "../Btn.css";

export default function Home() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
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
          <div className="carousel-item active">
            <img
              src={coff}
              className="d-block w-100"
              alt="..."
              style={{ height: "100vh" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome To Our</h5>
              <p>Coffee Break</p>
              <button type="button" className="btn btn-danger">
                Log in
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={coft}
              className="d-block w-100 fluid"
              alt="..."
              style={{ height: "100vh" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
              <button type="button" className="btn btn-danger">
                Log in
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={cofe}
              className="d-block w-100"
              alt="..."
              style={{ height: "100vh" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
              <button type="button" className="btn btn-danger">
                Log in
              </button>
            </div>
          </div>
        </div>

        <button
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
      <About />
      <Meenu />
      <Contact />

      <Header />
    </>
  );
}
