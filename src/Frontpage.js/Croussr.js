import React from "react";
import ud5 from "../images/ud5.webp";

export default function Croussr() {
  return (
    <div className="con">
      <div className="card mb-3" style={{ maxWidth: "97vw" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body">
              <h4 className="card-title">Arabica</h4>
              <p className="card-text">
                Arabica coffee beans is one of the most popular types and it’s
                believed to be one of the first coffee species ever grown with
                roots dating back to 100 years. Known for their vibrant and
                complex flavours, these beans are loved by coffee connoisseurs
                because of their smooth and less acidic taste.
              </p>
              <p>
                There are two types of Arabica coffee bean, Typica and Bourbon.
                Typica is also sometimes known as Sumatra and Arabigo and it is
                this type which is thought to be the first bean ever discovered.
                Bourbon on the other hand is considered to be a natural mutation
                of Typica and offers a more balanced and slightly sweeter
                favour, making it a popular choice amongst coffee lovers.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 11-Apr-22</small>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={ud5}
              className="img-fluid rounded-start"
              alt="..."
              style={{
                width: "50vw",
                height: "55vh",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
