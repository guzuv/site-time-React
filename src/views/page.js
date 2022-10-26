import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="Page - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <span className="page-text">Yikes!</span>
      <span className="page-text1">
        <span>Looks like there&apos;s nothing here!</span>
        <br></br>
      </span>
      <Link to="/" className="page-navlink button">
        back home?
      </Link>
    </div>
  )
}

export default Page
