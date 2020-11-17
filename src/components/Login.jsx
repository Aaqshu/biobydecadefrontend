import React from "react";
import { Link , NavLink} from "react-router-dom";
import appPath from "../utils/API/path";
import axios from "axios";

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.showSuccessMsg = false;
    this.state = {
      showMsg: false,
      showError: false
    };
  }
  handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/users/login", {
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
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
    return (
      <div className="signup-page pl-70">
        {this.state.showMsg ? (
          <div className="success-msg">
            <h3 style={{ textAlign: "left" }}>User Logged In Successfully.</h3>
          </div>
        ) : (
          <div>
            <div className="row">
              <div className="col-3 f-left">
                <span className="main-heading">Sign In</span>
              </div>
            </div>
            <div className="social-btns">
              <button className="g-login">Sign in with Google</button>
              <button className="fb-login">Sign in with facebook</button>
            </div>
            {/* <div className="hr">-</div> */}
            <div className="row col-10">
              <hr />
            </div>
            <div className="login-form">
              <form id="login" onSubmit={e => this.handleSubmit(e)}>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="username"
                      onChange={this.handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-3">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="offset-lg-5 col-lg-5">
                    <span className="f-12" style={styleFp}>
                    {/* <NavLink className="navbar-item" activeClassName="is-active" to="/ForgotPassword">
                    Forgot Password?
            </NavLink> */}
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="theme-btn"
                      style={inputStyle}
                    >
                      Sign In
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
                        Either Username or password incorrect
                      </h6>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <span className="login-mid-heading">
                      <Link to="#">
                        <span>Don't have a account?</span>
                        <span className="c-theme"> Create a new Account</span>
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
