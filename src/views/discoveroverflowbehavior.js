import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";

import "./discoveroverflowbehavior.css";

const Discoveroverflowbehavior = (props) => {
  const fileInput = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const handleFileChange = (event) => {
    // console.log("help");
    setFileName(event.target.files[0].name);
  };
  return (
    <div className="discoveroverflowbehavior-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="discoveroverflowbehavior-discoveroverflowbehavior">
        <img
          src="/external/rectangle30890-6sqw-900h.png"
          alt="Rectangle30890"
          className="discoveroverflowbehavior-rectangle3"
        />
        <div>
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInput}
            accept="image/*"
            onChange={handleFileChange}
          />
          <button
            className="discoveroverflowbehavior-button"
            onClick={handleButtonClick}
          >
            <img
              src="/external/rectangle2i213-8kkd-200h.png"
              alt="Rectangle2I213"
              className="discoveroverflowbehavior-rectangle2"
            />
            <span className="discoveroverflowbehavior-text">
              <span>
                {" "}
                {fileName ? `Selected file: ${fileName} ` : `UPLOAD IMAGE`}
              </span>
            </span>
          </button>
        </div>
        <a className="discoveroverflowbehavior-button1" href="scan-resultsfail">
          <img
            src="/external/rectangle2i213-ebjp-200h.png"
            alt="Rectangle2I213"
            className="discoveroverflowbehavior-rectangle21"
          />
          <span className="discoveroverflowbehavior-text02">
            <span>SCAN</span>
          </span>
        </a>
        {/* this text area is meant to be where patients describe their symptoms so add a title above */}
        {/* <span className="discoveroverflowbehavior-text03">
          <span>Describe your symptoms</span>
        </span> */}
        <textarea
          placeholder="Describe your symptoms (optional)"
          type="text"
          className="discoveroverflowbehavior-input1"
        />
        <div className="discoveroverflowbehavior-register">
          <span className="discoveroverflowbehavior-text04">
            <span>Scan</span>
          </span>
        </div>
        <div className="discoveroverflowbehavior-frameiconimage">
          <img
            src="/external/vector2114-ugp.svg"
            alt="Vector2114"
            className="discoveroverflowbehavior-vector"
          />
        </div>
        <span className="discoveroverflowbehavior-text06">
          <span>Help and Treatment</span>
        </span>
        <div className="discoveroverflowbehavior-tab-bar">
          <div className="discoveroverflowbehavior-background">
            <img
              src="/external/background0590-pgy-200h.png"
              alt="Background0590"
              className="discoveroverflowbehavior-background1"
            />
            <div className="discoveroverflowbehavior-frame40-toolbarnew">
              <a href="gym-statistics">
                <img
                  src="/external/linechartoutlined2111-xpkt.svg"
                  alt="LineChartOutlined2111"
                  className="discoveroverflowbehavior-line-chart-outlined"
                />
              </a>
            </div>
            <a href="scan">
              <img
                src="/external/camerafilled2112-ionm.svg"
                alt="CameraFilled2112"
                className="discoveroverflowbehavior-camera-filled"
              />
            </a>

            <a href="my-infections">
              <img
                src="/external/vector2112-sm44.svg"
                alt="Vector2112"
                className="discoveroverflowbehavior-vector1"
              />
            </a>
          </div>
          <img
            src="/external/shape0591-co5-200h.png"
            alt="Shape0591"
            className="discoveroverflowbehavior-shape"
          />
        </div>
      </div>
    </div>
  );
};

export default Discoveroverflowbehavior;
