import React from "react";

const inputStyle = {
  width: "335px",
  float: "left"
};
const buttonStyle = {
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

export default function resetPassword() {
  return (
    <div className="login-page pl-70">
      {false ? (
        <div className="success-msg">
          <h3 style={{ textAlign: "left" }}>User Signed up Successfully.</h3>
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="col-6 f-left">
              <span className="main-heading">Reset Your Password</span>
              <p className="sub-hding" style={{ float: "left" }}>Enter new password</p>
            </div>
          </div>
          <div className="row col-10">
            <hr />
          </div>
          <div className="login-form">
            <form id="login" >
              <div className="row">
              <p className="Pass-text"><strong>New Password</strong></p>
                <div className="col-12 fields-input">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password" 
                    style={inputStyle}
                    />
                </div>
                <p className="Pass-text"><strong>Confirm Password</strong></p>
                <div className="col-12">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    style={inputStyle}
                    />
                </div>
              </div>
              <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="theme-btn"
                      style={buttonStyle} >
                      Done
                    </button>
                  </div>
                </div>
              
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// export default function ForgotPassword() {
//   return (
//     <div className="login-page pl-70">
//       {false ? (
//         <div className="success-msg">
//           <h3 style={{ textAlign: "left" }}>User Signed up Successfully.</h3>
//         </div>
//       ) : (
//         <div>
//           <div className="row">
//             <div className="col-3 f-left">
//               <span className="main-heading">Forget Password?</span>
//               <p>Enter Your Registration Email ID</p>
//             </div>
//           </div>
//           <div className="row col-10">
//             <hr />
//           </div>
//           <div className="login-form">
//             <form id="login" >
//               <div className="row">
//                 <div className="col-12 mt-4">
//                   <input
//                     type="text"
//                     placeholder="Email"
//                     name="fname" />
//                 </div>
//               </div>
             

//               <div className="row">
//                   <div className="col-12">
//                     <button
//                       type="submit"
//                       className="theme-btn" >
//                       Send
//                     </button>
//                   </div>
//                 </div>
              
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
