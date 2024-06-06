import React from "react";

import { Helmet } from "react-helmet";

import "./login.css";

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login-login">
        <img
          src="/external/rectangle0324-yevl-900h.png"
          alt="Rectangle0324"
          className="login-rectangle"
        />
        <div className="login-component">
          <input
            type="email"
            placeholder="Email"
            className="login-rectangle2"
          />
        </div>
        <div className="login-component1">
          <input
            type="password"
            placeholder="Password"
            className="login-rectangle21"
          />
        </div>
        <a className="login-button" href="/scan">
          <img
            src="/external/rectangle2i032-3kh4-200h.png"
            alt="Rectangle2I032"
            className="login-rectangle22"
          />
          <span className="login-text04">
            <span>Log in</span>
          </span>
        </a>
        
        <div className="login-register">
          <span className="login-text38">
            <span>Log In</span>
          </span>
        </div>
        <img
          src="/external/union0759-o2v.svg"
          alt="Union0759"
          className="login-union"
        />
      </div>
    </div>
  );
};

export default Login;
