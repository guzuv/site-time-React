import React from 'react'

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
      <span className="page-text">go back?</span>
      <a href="https://guzuv.github.io" className="page-link button">
        <span>
          <span>ok</span>
          <br></br>
        </span>
      </a>
    </div>
  )
}

export default Page
