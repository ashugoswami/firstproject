import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-black">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Coffee Bar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0 mx-4 "
            style={{ position: "relative", left: "18%" }}
          >
            <li className="nav-item mx-4">
              <Link to="/" className="nav-link active ">
                Home
              </Link>
            </li>
            <li className="nav-item mx-4 ">
              <Link to="/about" className="nav-link active">
                About
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/services" className="nav-link active">
                Understand Coffee
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/meenu" className="nav-link active">
                Menu
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/contact" className="nav-link active">
                Contact Us
              </Link>
            </li>
          </ul>

          <button type="button" className="btn btn-outline-light">
            SING UP
          </button>
        </div>
      </div>
      <div>
        <div
          className="modal fade"
          id="singupModal"
          tabIndex="-1"
          aria-labelledby="singupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content rounded-5 shadow">
              <div className="modal-header p-5 pb-4 border-bottom-0">
                <h2 className="fw-bold mb-0">Sign up for free</h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body p-5 pt-0">
                <form className="">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control rounded-4"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control rounded-4"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <button
                    className="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
                    type="submit"
                  >
                    Sign up
                  </button>
                  <small className="text-muted">
                    By clicking Sign up, you agree to the terms of use.
                  </small>
                  <hr className="my-4" />
                  <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
