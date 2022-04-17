import React from "react";
import logo from "../images/logo2.jpg";
import "../Btn.css";

export default function Header() {
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "black", color: "white", width: "100vw" }}
      >
        <footer className="py-5">
          <div className="row mx-4">
            <div className="col-2 mx-4">
              <h5>Coffee Bar</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Terms & Conditions
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-danger" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <img
              src={logo}
              alt="coffe"
              style={{
                height: "35vh",
                width: "20vw",
                position: "relative",

                left: "202px",
                borderBottomRightRadius: "40px",
              }}
            />
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>© copyright Coffee Bar 2022.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
