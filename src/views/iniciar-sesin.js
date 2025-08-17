import React from 'react'

import { Helmet } from 'react-helmet'

import './iniciar-sesin.css'

const IniciarSesin = (props) => {
  return (
    <div className="iniciar-sesin-container1">
      <Helmet>
        <title>Iniciar-sesin - EcoPoints</title>
        <meta property="og:title" content="Iniciar-sesin - EcoPoints" />
      </Helmet>
      <div className="iniciar-sesin-container2">
        <button type="button" className="iniciar-sesin-button1 button">
          <span>{/*locale-text_HRHZgN*/}</span>
        </button>
        <button type="button" className="iniciar-sesin-button2 button">
          <span>{/*locale-text_P5Yuft*/}</span>
        </button>
        <img
          alt="image"
          src="/ecopoints1-800h.jpg"
          className="iniciar-sesin-image"
        />
        <span className="iniciar-sesin-text1">
          <span>{/*locale-text_isMXZl*/}</span>
        </span>
      </div>
      <span className="iniciar-sesin-text2">
        <span>{/*locale-text_GHEuA9*/}</span>
      </span>
    </div>
  )
}

export default IniciarSesin
