import React from "react";
import NavBar from "../NavBar";
const Header_14 = () => {
  return (
    <div className="container p-5" style={{ background: "#2F1893" }}>
      <NavBar />
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6" style={{ height: "217px" }}>
            <div className="container pt-5">
              <h2
                className="heading text-light"
                style={{
                  fontWeight: "700",
                  fontSize: "58px",
                  lineHeight: "70px",
                  letterSpacing: "-1px",
                }}
              >
                Generate Awesome Web Pages
              </h2>
              <p
                className="desc text-light py-4 pr-5"
                style={{
                  fontWeight: "500",
                  fontSize: "22px",
                  lineHeight: "32px",
                }}
              >
                The most important part of the Startup is the samples. The
                samples form a set of 25 usable pages you can use as is or you
                can add new blocks.
              </p>
              <button
                className="btn text-light"
                style={{
                  width: "157px",
                  height: "50px",
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "26px",
                  background: "#E93A7D",
                  borderRadius: "100px",
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div
            className="col-md-6 p-5"
            style={{
              background: "#ffff",
              height: "600px",
              borderRadius: "8px",
            }}
          >
            <h3
              className="mb-4  text-center"
              style={{
                fontWeight: "700",
                fontSize: "42px",
                lineHeight: "52px",
                letterSpacing: "-0.4px",
                color: "#1E0E62",
              }}
            >
              Sign Up Now
            </h3>
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  placeholder=" Your email"
                  style={{
                    padding: "1.5rem",
                    height: "50px",
                    fontWeight: "500",
                    fontSize: "18px",
                    lineHeight: "26px",
                    color: "#15143966",
                    borderRadius: "30px",
                  }}
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  placeholder="Your password"
                  style={{
                    padding: "1.5rem",
                    height: "50px",
                    fontWeight: "500",
                    fontSize: "18px",
                    lineHeight: "26px",
                    color: "#15143966",
                    borderRadius: "30px",
                  }}
                />
              </div>

              <div className="d-flex mb-4 p-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label
                    className="form-check-label text-muted"
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                    htmlFor="form1Example3"
                  >
                    I agree to the Terms of Service.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                style={{
                  background: "#482BE7",
                  borderRadius: "100px",
                  height: "50px",
                }}
              >
                Sign in
              </button>

              <div className="divider d-flex  justify-content-center align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a
                className="btn btn-primary btn-lg btn-block"
                href="#!"
                role="button"
                style={{
                  backgroundColor: "#55acee",
                  borderRadius: "100px",
                  height: "50px",
                }}
              >
                <i className="fab fa-twitter me-2"></i>Login via Twitter
              </a>
              <p
                className="text-muted text-center py-3"
                style={{
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
              >
                Do you have an Account? <span className="text-success">Sign In</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header_14;
