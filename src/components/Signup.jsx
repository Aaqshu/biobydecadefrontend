import React from "react";
import { Link } from "react-router-dom";
import appPath from "../utils/API/path";

export default class Signup extends React.PureComponent {
  constructor(props) {
    super(props);
    this.pass = "";
    this.form = {};
    this.showSuccessMsg = false;
    this.state = {
      showMsg: false,
      showError: false,
      emailErr: null,
      passErr: null,
      usernameErr: null,
      fnameErr: null,
      isFormValidate: false,
      form: {}
    };
  }
  handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch(appPath.createUser(), {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      referrerPolicy: "origin-when-cross-origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(this.state) // body data type must match "Content-Type" header
    });
    console.log("handle-->", response);
    if (response.status == "200") {
      this.setState({ showMsg: true });
    } else {
      this.setState({ showError: true });
    }
  };
  validateForm = e => {
    e.preventDefault();
    console.log(e.target.value);
    Object.assign(this.form, { [e.target.name]: e.target.value });
    this.setState({
      form: this.form
    });

    if (e.target.name === "email") {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(e.target.value)) {
        return this.setState({
          emailErr: "Email is invalid",
          isFormValidate: false
        });
      }
    }
    if (e.target.name === "fname") {
      if (e.target.value.length < 3) {
        return this.setState({
          fnameErr: "first name length should max than 2",
          isFormValidate: false
        });
      }
    }
    if (e.target.name === "username") {
      if (e.target.value.length < 3) {
        return this.setState({
          usernameErr: "username length should max than 2",
          isFormValidate: false
        });
      }
    }
    if (e.target.name === "password") {
      this.pass = e.target.value;
      if (this.pass.length < 8) {
        return this.setState({
          passErr: "password length should max than 8",
          isFormValidate: false
        });
      }
    }
    if (e.target.name === "repassword") {
      console.log("i m in", this.pass);
      if (!(e.target.value === this.pass)) {
        return this.setState({
          passErr: "Password mismatch",
          isFormValidate: false
        });
      }
    }
    console.log("no errors", this.state);
    this.setState({
      emailErr: null,
      passErr: null,
      fnameErr: null,
      usernameErr: null
    });
    if (
      this.state.emailErr === null &&
      this.state.passErr === null &&
      this.state.usernameErr === null &&
      this.state.fnameErr === null
    ) {
      return this.setState({
        isFormValidate: true
      });
    }
  };
  submitForm = async e => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      referrerPolicy: "origin-when-cross-origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(this.state.form) // body data type must match "Content-Type" header
    });
    console.log("handle-->", response);
    if (response.status == "200") {
      this.setState({ showMsg: true });
    } else {
      this.setState({ showError: true });
    }
  };
  render() {
    const inputStyle = {
      width: "335px",
      float: "left"
    };
    const styleFp = {
      color: "red",
      paddingLeft: 20
    };
    const errStyle = {
      fontSize: 12,
      color: "red",
      position: "absolute",
      bottom: "-25px"
    };
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
                <span className="main-heading">Sign Up</span>
              </div>
            </div>
            <div className="social-btns">
              <button className="g-login">Sign in with Google</button>
              <button className="fb-login">Sign in with facebook</button>
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
}
