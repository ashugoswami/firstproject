import React from "react";

export default function Signform() {
  return (
    <div>
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
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-4"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
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
  );
}
