import React from "react";
import bioLogo from "../../assets/bioLogo.png";
import Login from "../../components/Login";
import Welcome from "../../components/Welcome";
import Signup from "../../components/Signup";

class Homepage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isSignUp: false
    };
  }

  render() {
    return (
      <div className="app-container">
        <div className="row">
          <div className="col-5">
            <img className="theme-bg-img" src={bioLogo} height="700"></img>
          </div>
          <div className="col-7 text-center">
            <div className="right-content">
              {!(this.state.isLogin || this.state.isSignUp) && (
                <Welcome
                  showSignup={() =>
                    this.setState({ isSignUp: true, isLogin: false })
                  }
                  showLogin={() =>
                    this.setState({ isLogin: true, isSignUp: false })
                  }
                />
              )}
              {this.state.isLogin && <Login />}
              {this.state.isSignUp && <Signup />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   console.log("MSTP : ", state.itemLoading);
//   return {
//     itemReducer: state.items,
//     itemLoading: state.itemLoading,
//     itemLoadingError: state
//   };
// };

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       fetchData,
//       fetchDataLoading,
//       fetchDataFailure
//     },
//     dispatch
//   );

export default Homepage;
