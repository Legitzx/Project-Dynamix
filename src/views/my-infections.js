import React from 'react'
import {useState} from 'react'

import { Helmet } from 'react-helmet'

import './my-infections.css'

const MyInfections = (props) => {
  const [visible, setVisible] = useState(true)

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="my-infections-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="my-infections-my-infections">
        <img
          src="/external/rectangle0782-6m1q-900h.png"
          alt="Rectangle0782"
          className="my-infections-rectangle"
        />
        <span className="my-infections-text">
          <span>RESULT</span>
        </span>
        <div className="my-infections-navigation-bar">
          <div className="my-infections-background">
            <img
              src="/external/background0827-rvr-200h.png"
              alt="Background0827"
              className="my-infections-background1"
            />
          </div>
          <div className="my-infections-title">
            <span className="my-infections-text02">
              <span>My Infections</span>
            </span>
          </div>
        </div>
        <img
          src="/external/background0830-b5mw-200h.png"
          alt="Background0830"
          className="my-infections-background2"
        />
        <img
          src="/external/background0831-v4s-200h.png"
          alt="Background0831"
          className="my-infections-background3"
        />
        <img
          src="/external/background2136-us7m-200h.png"
          alt="Background2136"
          className="my-infections-background4"
        />
        <img
          src="/external/background2136-6ux3-200h.png"
          alt="Background2136"
          className="my-infections-background5"
        />
        <span className="my-infections-text04">
          <span>DATE</span>
        </span>
        <span className="my-infections-text06">
          <span>INFECTION</span>
        </span>
        <span className="my-infections-text08">
          <span>RINGWORM</span>
        </span>
        {/* <span className="my-infections-text10">
          <span>STAPH</span>
        </span> */}
        <span className="my-infections-text12">
          <span>6/06/2024</span>
        </span>

        
        {visible && 
        <div className="my-infections-frameiconcheck">
          <a href="#" onClick={handleClick}><img
            src="/external/vector2136-1sr.svg"
            alt="Vector2136"
            className="my-infections-vector"
          /></a>
        </div>
        }
        


        {/* <div className="my-infections-frameiconcheck1">
          <img
            src="/external/vector2136-ahog.svg"
            alt="Vector2136"
            className="my-infections-vector1"
          />
        </div> */}
        {visible && 
        <div className="my-infections-frameiconxletter">
          <img
            src="/external/vector2136-scd.svg"
            alt="Vector2136"
            className="my-infections-vector2"
          />
        </div>
        }
        
        {/* <span className="my-infections-text14">
          <span>3/02/2024</span>
        </span> */}
        {/* <div className="my-infections-frameiconxletter1">
          <img
            src="/external/vector2136-m3xw.svg"
            alt="Vector2136"
            className="my-infections-vector3"
          />
        </div> */}
        <div className="my-infections-tab-bar">
          <div className="my-infections-background6">
            <img
              src="/external/backgroundi078-rmzh-200h.png"
              alt="BackgroundI078"
              className="my-infections-background7"
            />
            <div className="my-infections-frame40-toolbarnew">
              <a href="gym-statistics"><img
                src="/external/linechartoutlinedi078-047v.svg"
                alt="LineChartOutlinedI078"
                className="my-infections-line-chart-outlined"
              /></a>
              
            </div>
            <a href="scan"><img
              src="/external/camerafilledi078-g24q.svg"
              alt="CameraFilledI078"
              className="my-infections-camera-filled"
            /></a>

            <a href="my-infections"><img
              src="/external/vectori078-fvv.svg"
              alt="VectorI078"
              className="my-infections-vector4"
            /></a>
          </div>
          <img
            src="/external/shapei078-2k1wj-200h.png"
            alt="ShapeI078"
            className="my-infections-shape"
          />
        </div>
      </div>
    </div>
  )
}

export default MyInfections
