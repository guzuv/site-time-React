import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './whoops.css'

const Whoops = (props) => {
  return (
    <div className="whoops-container">
      <Helmet>
        <title>guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <span className="whoops-text">Yikes!</span>
      <span className="whoops-text1">
        <span>Looks like there&apos;s nothing here!</span>
        <br></br>
      </span>
      <Link to="/" className="whoops-navlink button">
        back home?
      </Link>
    </div>
  )
}

export default Whoops
