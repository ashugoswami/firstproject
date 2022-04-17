import React from "react";
import ud1 from "../images/ud1.webp";
import ud2 from "../images/ud2.webp";
import ud3 from "../images/ud3.webp";

export default function Crdud() {
  return (
    <div className="container-fluid">
      <div className="card-group">
        <div className="card ">
          <img src={ud1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Africa</h4>
            <p className="card-text">
              African coffee is thought to be some of the best in the world due
              to its wonderfully distinctive flavour. Traditionally African
              coffee boasts the following characteristics:
            </p>
            <p>Syrupy</p>
            <p>Medium acidity</p>
            <p>Light to medium roast</p>
            <p className="card-text">
              <small className="text-muted">Last updated 11-Apr-22</small>
            </p>
          </div>
        </div>
        <div className="card mx-2">
          <img src={ud2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Latin America</h5>
            <p className="card-text">
              Thought to be one of the coffee capitals of the world, coffee from
              Latin America makes up most of the blends found on supermarket
              shelves today. The flavour is universally enjoyed which is mostly
              attributed to its well-rounded taste. A few of the key
              characteristics Latin American coffee possesses are:
            </p>
            <p>Nutty</p>
            <p>Low acidity</p>
            <p>Light or medium roast</p>
            <p className="card-text">
              <small className="text-muted">Last updated 11-Apr-22</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src={ud3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Asia</h5>
            <p className="card-text">
              Asia is home to some of the most unique coffee blends with bold,
              unique flavourings unlike any other. Typically, you can expect
              Asian coffee to be:
            </p>
            <p>Earthy</p>
            <p>Gentle acidity</p>
            <p>Dark roast</p>
            <p className="card-text">
              <small className="text-muted">Last updated 11-Apr-22</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
