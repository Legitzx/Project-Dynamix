import React from 'react'

import { Helmet } from 'react-helmet'

import './scan-resultspass.css'

const ScanResultspass = (props) => {
  return (
    <div className="scan-resultspass-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="scan-resultspass-scan-resultspass">
        <img
          src="/external/rectangle22115-wr5c-900h.png"
          alt="Rectangle22115"
          className="scan-resultspass-rectangle2"
        />
        <img
          src="/external/arrowleftoutlined2119-p75.svg"
          alt="ArrowLeftOutlined2119"
          className="scan-resultspass-arrow-left-outlined"
        />
        <div className="scan-resultspass-card-small">
          <div className="scan-resultspass-frame">
            <div className="scan-resultspass-frame1">
              <div className="scan-resultspass-frame2">
                <span className="scan-resultspass-text AndroidH6">
                  <span>Results</span>
                </span>
                <span className="scan-resultspass-text2 AndroidBody2">
                  <span>No contagious infections found,</span>
                  <br></br>
                  <span>you are cleared to train!</span>
                </span>
              </div>
            </div>
          </div>
          <div className="scan-resultspass-frame3">
            <button className="scan-resultspass-button-small">
              <div className="scan-resultspass-min-width64"></div>
            </button>
          </div>
        </div>
        <div className="scan-resultspass-checkbox">
          <img
            src="/external/checkboxi211-7z5k.svg"
            alt="checkboxI211"
            className="scan-resultspass-checkbox1"
          />
        </div>
        <span className="scan-resultspass-text6 AndroidH6">
          <span>100%</span>
        </span>
        <img
          src="/external/indicator2111-ncm2-200h.png"
          alt="Indicator2111"
          className="scan-resultspass-indicator"
        />
      </div>
    </div>
  )
}

export default ScanResultspass
