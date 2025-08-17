import React from 'react'

import { Helmet } from 'react-helmet'

import './registrarse.css'

const Registrarse = (props) => {
  return (
    <div className="registrarse-container1">
      <Helmet>
        <title>Registrarse - EcoPoints</title>
        <meta property="og:title" content="Registrarse - EcoPoints" />
      </Helmet>
      <div className="registrarse-container2">
        <button type="button" className="registrarse-button1 button">
          <span>{/*locale-text_QKxj-b*/}</span>
        </button>
        <button type="button" className="registrarse-button2 button">
          <span>{/*locale-text_NJ5BE0*/}</span>
        </button>
        <img
          alt="image"
          src="/ecopoints1-800h.jpg"
          className="registrarse-image"
        />
        <span className="registrarse-text1">
          <span>{/*locale-text_WvSSRZ*/}</span>
        </span>
      </div>
      <span className="registrarse-text2">
        <span>{/*locale-text_X5QqfC*/}</span>
      </span>
    </div>
  )
}

export default Registrarse
