import React from 'react'

import { Helmet } from 'react-helmet'

import './search.css'

const Search = (props) => {
  return (
    <div className="search-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="search-search">
        <img
          src="/external/rectangle091-76ne-900h.png"
          alt="Rectangle091"
          className="search-rectangle"
        />
        <div className="search-status-bar">
          <div className="search-connections">
            <div className="search-battery">
              <img
                src="/external/borderi075-wtn-200h.png"
                alt="BorderI075"
                className="search-border"
              />
              <img
                src="/external/capi075-e67.svg"
                alt="CapI075"
                className="search-cap"
              />
              <img
                src="/external/capacityi075-7v6-200h.png"
                alt="CapacityI075"
                className="search-capacity"
              />
            </div>
            <div className="search-wifi">
              <img
                src="/external/wifii075-bgqa.svg"
                alt="WifiI075"
                className="search-wifi1"
              />
            </div>
            <div className="search-cellular-connection">
              <img
                src="/external/cellularconnectioni075-x1q.svg"
                alt="CellularConnectionI075"
                className="search-cellular-connection1"
              />
            </div>
          </div>
          <div className="search-time">
            <span className="search-text">
              <span>9:27</span>
            </span>
          </div>
        </div>
        <div className="search-component">
          <img
            src="/external/rectangle2i213-p2u-200h.png"
            alt="Rectangle2I213"
            className="search-rectangle2"
          />
          <span className="search-text02">
            <span>jane@example.com</span>
          </span>
        </div>
        <div className="search-component1">
          <img
            src="/external/rectangle2i213-brgd-200h.png"
            alt="Rectangle2I213"
            className="search-rectangle21"
          />
          <span className="search-text04">
            <span>••••••••••••</span>
          </span>
        </div>
        <button className="search-button">
          <img
            src="/external/rectangle2i213-rrk-200h.png"
            alt="Rectangle2I213"
            className="search-rectangle22"
          />
          <span className="search-text06">
            <span>ADD</span>
          </span>
        </button>
        <div className="search-register">
          <span className="search-text08">
            <span>Add New Member</span>
          </span>
        </div>
        <div className="search-tab-bar">
          <div className="search-background">
            <img
              src="/external/backgroundi213-2gw-200h.png"
              alt="BackgroundI213"
              className="search-background1"
            />
            <div className="search-frame40-toolbarnew">
              <img
                src="/external/linechartoutlinedi213-2fzj.svg"
                alt="LineChartOutlinedI213"
                className="search-line-chart-outlined"
              />
            </div>
            <img
              src="/external/camerafilledi213-sf51.svg"
              alt="CameraFilledI213"
              className="search-camera-filled"
            />
            <img
              src="/external/vectori213-j9ne.svg"
              alt="VectorI213"
              className="search-vector"
            />
          </div>
          <img
            src="/external/shapei213-q1lo-200h.png"
            alt="ShapeI213"
            className="search-shape"
          />
        </div>
      </div>
    </div>
  )
}

export default Search
