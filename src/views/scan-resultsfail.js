import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./scan-resultsfail.css";

const ScanResultsfail = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="scan-resultsfail-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      {isLoading ? (
        <div className="loading-animation"></div>
      ) : (
        <div className="scan-resultsfail-scan-resultsfail">
          <img
            src="/external/rectangle22111-fje-900h.png"
            alt="Rectangle22111"
            className="scan-resultsfail-rectangle2"
          />
          <a href="/scan">
            <img
              src="/external/arrowleftoutlined2111-8mx8e.svg"
              alt="ArrowLeftOutlined2111"
              className="scan-resultsfail-arrow-left-outlined"
            />
          </a>
          <div className="scan-resultsfail-card-small">
            <div className="scan-resultsfail-frame">
              <div className="scan-resultsfail-frame1">
                <div className="scan-resultsfail-frame2">
                  <span className="scan-resultsfail-text AndroidH6">
                    <span>Results</span>
                  </span>
                  <span className="scan-resultsfail-text2 AndroidBody2">
                    <span>There is an 86% chance that you have ringworm.</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="scan-resultsfail-frame3">
              <button className="scan-resultsfail-button-small">
                <div className="scan-resultsfail-min-width64"></div>
              </button>
            </div>
          </div>
          <div className="scan-resultsfail-checkbox"></div>
          <span className="scan-resultsfail-text4 AndroidH6">
            <span>100%</span>
          </span>
          <img
            src="/external/close2111-adn.svg"
            alt="close2111"
            className="scan-resultsfail-close"
          />
          <span className="scan-resultsfail-text6 AndroidBody2">
            <span>Your gym has been notified.</span>
          </span>
          <img
            src="/external/indicator2111-ncm2-200h.png"
            alt="Indicator2111"
            className="scan-resultsfail-indicator"
          />
        </div>
      )}
    </div>
  );
};

export default ScanResultsfail;
