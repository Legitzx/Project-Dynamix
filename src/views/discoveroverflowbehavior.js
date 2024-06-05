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
              <span> {fileName ? `Selected file: ${fileName} ` : `UPLOAD IMAGE`}</span>
            </span>
          </button>
          {/* <span className="discoveroverflowbehavior-rectangle3">
            Selected file: {fileName}
          </span> */}
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
              <img
                src="/external/linechartoutlined2111-xpkt.svg"
                alt="LineChartOutlined2111"
                className="discoveroverflowbehavior-line-chart-outlined"
              />
            </div>
            <img
              src="/external/camerafilled2112-ionm.svg"
              alt="CameraFilled2112"
              className="discoveroverflowbehavior-camera-filled"
            />
            <img
              src="/external/vector2112-sm44.svg"
              alt="Vector2112"
              className="discoveroverflowbehavior-vector1"
            />
          </div>
          <img
            src="/external/shape0591-co5-200h.png"
            alt="Shape0591"
            className="discoveroverflowbehavior-shape"
          />
        </div>
        <div className="discoveroverflowbehavior-status-bar">
          <div className="discoveroverflowbehavior-connections">
            <div className="discoveroverflowbehavior-battery">
              <img
                src="/external/borderi067-mwxh-200h.png"
                alt="BorderI067"
                className="discoveroverflowbehavior-border"
              />
              <img
                src="/external/capi067-hery.svg"
                alt="CapI067"
                className="discoveroverflowbehavior-cap"
              />
              <img
                src="/external/capacityi067-1yei-200h.png"
                alt="CapacityI067"
                className="discoveroverflowbehavior-capacity"
              />
            </div>
            <div className="discoveroverflowbehavior-wifi">
              <img
                src="/external/wifii067-5hs5.svg"
                alt="WifiI067"
                className="discoveroverflowbehavior-wifi1"
              />
            </div>
            <div className="discoveroverflowbehavior-cellular-connection">
              <img
                src="/external/cellularconnectioni067-r60u.svg"
                alt="CellularConnectionI067"
                className="discoveroverflowbehavior-cellular-connection1"
              />
            </div>
          </div>
          <div className="discoveroverflowbehavior-time">
            <span className="discoveroverflowbehavior-text08">
              <span>9:27</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discoveroverflowbehavior;
