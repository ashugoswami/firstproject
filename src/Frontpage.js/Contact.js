import React from "react";
import con from "../images/cofee1.jpg";
import "../Btn.css";

export default function Contact() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${con})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="container"
        style={{
          textAlign: "center",
          padding: "24px",
          fontWeight: "bold",
          paddingTop: "30px",
          color: "rgb(119, 8, 32)",
          backgroundColor: "rgb(143, 109, 15)",
          borderTopLeftRadius: "30px",
          position: "relative",
          top: "80px",
        }}
      >
        <h1>Contact Coffee Bar</h1>
        <p>Get in touch using our contact from below</p>
        <div
          className="container"
          style={{
            marginTop: "30px",
            paddingTop: "40px",
            backgroundColor: "rgb(148, 146, 142)",
            borderTopLeftRadius: "30px",
          }}
        >
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputname" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                style={{ borderBottomRightRadius: "35px" }}
                id="inputEmail4"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="col-md-6">
              <label for="inputemail" className="form-label">
                E-Mail
              </label>
              <input
                type="email"
                className="form-control"
                style={{ borderBottomRightRadius: "35px" }}
                id="inputEmail4"
                placeholder="Your E-mail ID"
              />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                style={{ borderBottomRightRadius: "35px" }}
                id="inputAddress"
                placeholder="Add your Address"
              />
            </div>

            <div className="col-md-4">
              <label for="inputState" className="form-label">
                Country
              </label>
              <select
                id="inputState"
                className="form-select"
                style={{ borderBottomRightRadius: "35px" }}
              >
                <option selected>Select..</option>
                <option>USA</option>
                <option>India</option>
                <option>Uk</option>
                <option>Russia</option>
                <option>China</option>
                <option>Japan</option>
                <option>Others</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputZip" className="form-label">
                MO.No
              </label>
              <input
                type="text"
                className="form-control"
                style={{ borderBottomRightRadius: "35px" }}
                id="inputZip"
                placeholder="Your Mobile Number"
              />
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="find"
                style={{ backgroundColor: "blue" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
