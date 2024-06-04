import React from 'react'

import { Helmet } from 'react-helmet'

import './gym-statistics.css'

const GymStatistics = (props) => {
  return (
    <div className="gym-statistics-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="gym-statistics-gym-statistics">
        <img
          src="/external/rectangle095-ezfc-900h.png"
          alt="Rectangle095"
          className="gym-statistics-rectangle"
        />
        <div className="gym-statistics-navigation-bar">
          <div className="gym-statistics-background">
            <img
              src="/external/background0815-yia-200h.png"
              alt="Background0815"
              className="gym-statistics-background1"
            />
          </div>
          <div className="gym-statistics-left-action">
            <img
              src="/external/bound0819-4xoa-200h.png"
              alt="Bound0819"
              className="gym-statistics-bound"
            />
            <span className="gym-statistics-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="gym-statistics-title">
            <span className="gym-statistics-text01">
              <span>Gym Statistics</span>
            </span>
          </div>
        </div>
        <span className="gym-statistics-text03">
          <span>Infection Log</span>
        </span>
        <div className="gym-statistics-chart-line">
          <div className="gym-statistics-line">
            <img
              src="/external/filli211-mzal.svg"
              alt="FillI211"
              className="gym-statistics-fill"
            />
            <img
              src="/external/strokei211-0c9.svg"
              alt="StrokeI211"
              className="gym-statistics-stroke"
            />
          </div>
          <div className="gym-statistics-label">
            <span className="gym-statistics-text05 AndroidCaption">
              <span>March</span>
            </span>
            <span className="gym-statistics-text07 AndroidCaption">
              <span>April</span>
            </span>
            <span className="gym-statistics-text09 AndroidCaption">
              <span>May</span>
            </span>
            <span className="gym-statistics-text11 AndroidCaption">
              <span>June</span>
            </span>
            <span className="gym-statistics-text13 AndroidCaption">
              <span>July</span>
            </span>
          </div>
          <div className="gym-statistics-indicator">
            <img
              src="/external/rectanglei211-8inh-200w.png"
              alt="RectangleI211"
              className="gym-statistics-rectangle1"
            />
            <img
              src="/external/ellipsei211-0a85-200h.png"
              alt="EllipseI211"
              className="gym-statistics-ellipse"
            />
          </div>
        </div>
        <img
          src="/external/background2137-fzvm-200h.png"
          alt="Background2137"
          className="gym-statistics-background2"
        />
        <span className="gym-statistics-text15">
          <span>5/22/2024</span>
        </span>
        <span className="gym-statistics-text17">
          <span>RINGWORM</span>
        </span>
        <img
          src="/external/background2137-jp3j-200h.png"
          alt="Background2137"
          className="gym-statistics-background3"
        />
        <span className="gym-statistics-text19">
          <span>3/02/2024</span>
        </span>
        <span className="gym-statistics-text21">
          <span>STAPH</span>
        </span>
        <img
          src="/external/background2137-awi-200h.png"
          alt="Background2137"
          className="gym-statistics-background4"
        />
        <span className="gym-statistics-text23">
          <span>2/12/2024</span>
        </span>
        <span className="gym-statistics-text25">
          <span>RINGWORM</span>
        </span>
        <img
          src="/external/background2137-warj-200h.png"
          alt="Background2137"
          className="gym-statistics-background5"
        />
        <img
          src="/external/background2137-8ak3-200h.png"
          alt="Background2137"
          className="gym-statistics-background6"
        />
        <span className="gym-statistics-text27">
          <span>1/20/2024</span>
        </span>
        <span className="gym-statistics-text29">
          <span>RINGWORM</span>
        </span>
        <div className="gym-statistics-tab-bar">
          <div className="gym-statistics-background7">
            <img
              src="/external/backgroundi078-4n2-200h.png"
              alt="BackgroundI078"
              className="gym-statistics-background8"
            />
            <div className="gym-statistics-frame40-toolbarnew">
              <img
                src="/external/linechartoutlinedi078-o4mk.svg"
                alt="LineChartOutlinedI078"
                className="gym-statistics-line-chart-outlined"
              />
            </div>
            <img
              src="/external/camerafilledi078-2la.svg"
              alt="CameraFilledI078"
              className="gym-statistics-camera-filled"
            />
            <img
              src="/external/vectori078-6t49.svg"
              alt="VectorI078"
              className="gym-statistics-vector"
            />
          </div>
          <img
            src="/external/shapei078-415o-200h.png"
            alt="ShapeI078"
            className="gym-statistics-shape"
          />
        </div>
        <div className="gym-statistics-status-bar">
          <div className="gym-statistics-connections">
            <div className="gym-statistics-battery">
              <img
                src="/external/borderi078-nd1-200h.png"
                alt="BorderI078"
                className="gym-statistics-border"
              />
              <img
                src="/external/capi078-fwgj.svg"
                alt="CapI078"
                className="gym-statistics-cap"
              />
              <img
                src="/external/capacityi078-m34e-200h.png"
                alt="CapacityI078"
                className="gym-statistics-capacity"
              />
            </div>
            <div className="gym-statistics-wifi">
              <img
                src="/external/wifii078-01re.svg"
                alt="WifiI078"
                className="gym-statistics-wifi1"
              />
            </div>
            <div className="gym-statistics-cellular-connection">
              <img
                src="/external/cellularconnectioni078-k49.svg"
                alt="CellularConnectionI078"
                className="gym-statistics-cellular-connection1"
              />
            </div>
          </div>
          <div className="gym-statistics-time">
            <span className="gym-statistics-text31">
              <span>9:27</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GymStatistics
