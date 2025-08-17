import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>EcoPoints</title>
        <meta property="og:title" content="EcoPoints" />
      </Helmet>
      <div className="home-container2">
        <img alt="image" src="/ecopoints1-800h.jpg" className="home-image" />
        <span className="home-eco-points">
          <span>{/*locale-text_hxMokO*/}</span>
        </span>
        <span className="home-puntos-ecologicos">
          <span>{/*locale-text_qC0501*/}</span>
        </span>
        <Link to="/registrarse" className="home-registrarse button">
          <span>{/*locale-text_dx-i9Y*/}</span>
        </Link>
        <Link to="/iniciar-sesin" className="home-iniciar-sesion button">
          <span>{/*locale-text_mWzZCj*/}</span>
        </Link>
      </div>
    </div>
  )
}

export default Home
