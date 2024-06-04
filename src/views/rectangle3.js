import React from 'react'

import { Helmet } from 'react-helmet'

import './rectangle3.css'

const Rectangle3 = (props) => {
  return (
    <div className="rectangle3-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="rectangle3-dummy-container">
        <img
          src="/external/rectangle30890-q0r-900h.png"
          alt="Rectangle30890"
          className="rectangle3-rectangle3"
        />
      </div>
    </div>
  )
}

export default Rectangle3
