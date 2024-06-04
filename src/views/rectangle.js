import React from 'react'

import { Helmet } from 'react-helmet'

import './rectangle.css'

const Rectangle = (props) => {
  return (
    <div className="rectangle-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="rectangle-dummy-container">
        <img
          src="/external/rectangle042-jltd-800h.png"
          alt="Rectangle042"
          className="rectangle-rectangle"
        />
      </div>
    </div>
  )
}

export default Rectangle
