import React from "react";

export default function ForgotPassword() {
  return (
    <div className="login-page pl-70">
      {this.state.showMsg ? (
        <div className="success-msg">
          <h3 style={{ textAlign: "left" }}>User Signed up Successfully.</h3>
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="col-3 f-left">
              <span className="main-heading">Forget Password?</span>
            </div>
          </div>
          <div className="row col-10">
            <hr />
          </div>
          <div className="login-form">
            <form id="login" onSubmit={this.submitForm}>
              <div className="row">
                <div className="col-12">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="fname"
                    onChange={this.validateForm}
                    style={inputStyle}
                  />
                  {this.state.fnameErr !== null && (
                    <h5 style={errStyle}>{this.state.fnameErr}</h5>
                  )}
                </div>
              </div>
              <div className="row pdiv-err">
                <div className="col-12 mt-4 errordiv">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    onChange={this.validateForm}
                    style={inputStyle}
                  />
                  {this.state.emailErr !== null && (
                    <h5 style={errStyle}>{this.state.emailErr}</h5>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-4">
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={this.validateForm}
                    style={inputStyle}
                  />
                  {this.state.usernameErr !== null && (
                    <h5 style={errStyle}>{this.state.usernameErr}</h5>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-4">
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={this.validateForm}
                    style={inputStyle}
                  />
                </div>
              </div>
              <div className="row pdiv-err">
                <div className="col-12 mt-4">
                  <input
                    type="password"
                    placeholder="Password"
                    name="repassword"
                    onChange={this.validateForm}
                    style={inputStyle}
                  />

                  {this.state.passErr !== null && (
                    <h5 style={errStyle}>{this.state.passErr}</h5>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button
                    type="submit"
                    className="theme-btn"
                    style={inputStyle}
                    disabled={!this.state.isFormValidate}
                  >
                    Sign Up
                  </button>
                  <br />
                  {this.state.showError && (
                    <h6
                      style={{
                        color: "red",
                        marginTop: "15%",
                        textAlign: "start"
                      }}
                    >
                      Signup is not Done successfully
                    </h6>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <span className="login-mid-heading">
                    <Link to="#">
                      <span>Already having account?</span>
                      <span className="c-theme"> Sign In new account</span>
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
