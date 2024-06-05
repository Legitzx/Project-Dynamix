import React from 'react'

import { Helmet } from 'react-helmet'

import './loggedout.css'

const Loggedout = (props) => {
  return (
    <div className="loggedout-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="loggedout-loggedout">
        <div className="loggedout-status-bar">
          <div className="loggedout-connections">
            <div className="loggedout-battery">
              <img
                src="/external/border025-296h-200h.png"
                alt="Border025"
                className="loggedout-border"
              />
              <img
                src="/external/cap026-07v.svg"
                alt="Cap026"
                className="loggedout-cap"
              />
              <img
                src="/external/capacity027-j4yk-200h.png"
                alt="Capacity027"
                className="loggedout-capacity"
              />
            </div>
            <div className="loggedout-wifi">
              <img
                src="/external/wifi029-ytsj.svg"
                alt="Wifi029"
                className="loggedout-wifi1"
              />
            </div>
            <div className="loggedout-cellular-connection">
              <img
                src="/external/cellularconnection034-tj3.svg"
                alt="CellularConnection034"
                className="loggedout-cellular-connection1"
              />
            </div>
          </div>
          <div className="loggedout-time">
            <span className="loggedout-text">
              <span>9:27</span>
            </span>
          </div>
        </div>
        <span className="loggedout-text02">
          <span>register</span>
        </span>
        <a className="loggedout-button" href="/login">
          <img
            src="/external/rectangle2043-4oc8-200h.png"
            alt="Rectangle2043"
            className="loggedout-rectangle2"
          />
          <span className="loggedout-text04">
            <span>Log In</span>
          </span>
        </a>
        <a className="loggedout-button1" href="/registerstep1">
          <img
            src="/external/rectangle2i069-hga9-200h.png"
            alt="Rectangle2I069"
            className="loggedout-rectangle21"
          />
          <span className="loggedout-text06">
            <span>Register</span>
          </span>
        </a>
        <img
          src="/external/rectangle042-y2w-800h.png"
          alt="Rectangle042"
          className="loggedout-rectangle"
        />
        <img
          src="/external/shape0115-bdl6-200h.png"
          alt="Shape0115"
          className="loggedout-shape"
        />
        <div className="loggedout-group">
          <span className="loggedout-text08">
            <span>
              Project
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <br></br>
            <span>Dynamix</span>
          </span>
          <img
            src="/external/union0121-m5wr.svg"
            alt="Union0121"
            className="loggedout-union"
          />
        </div>
        <img
          src="/external/union0117-u9p.svg"
          alt="Union0117"
          className="loggedout-union1"
        />
      </div>
    </div>
  );
}

export default Loggedout
