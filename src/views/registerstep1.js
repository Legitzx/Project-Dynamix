import React from "react";

import { Helmet } from "react-helmet";

import "./registerstep1.css";

const Registerstep1 = (props) => {
  return (
    <div className="registerstep1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="registerstep1-registerstep1">
        <img
          src="/external/rectangle048-siz-900h.png"
          alt="Rectangle048"
          className="registerstep1-rectangle"
        />
        <div className="registerstep1-register">
          <span className="registerstep1-text">
            <span>Register</span>
          </span>
        </div>
        <div className="registerstep1-component">
          <input
            type="email"
            placeholder="Email"
            className="login-rectangle2"
          />
        </div>
        <div className="registerstep1-component1">
          <input
            type="password"
            placeholder="Password"
            className="login-rectangle2"
          />
        </div>
        <a className="registerstep1-button" href="/scan">
          <img
            src="/external/rectangle2i076-70ro-200h.png"
            alt="Rectangle2I076"
            className="registerstep1-rectangle22"
          />
          <span className="registerstep1-text06">
            <span>next</span>
          </span>
        </a>
        
        <img
          src="/external/union0763-2ag8.svg"
          alt="Union0763"
          className="registerstep1-union"
        />
      </div>
    </div>
  );
};

export default Registerstep1;
