import React from "react";

export default function Welcome({ showLogin, showSignup }) {
  return (
    <div className="row center" style={{ marginTop: "25%" }}>
      <div className="col-12">
        <h1>Welcome</h1>
        <h6 className="sub-hding">
          Please Sign or Signup to continue using our apps
        </h6>
      </div>
      <div className="col-12">
        <div className="theme-btn-wrap">
          <button className="theme-btn" onClick={showLogin}>
            Sign In
          </button>
          <button className="theme-btn" onClick={showSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
