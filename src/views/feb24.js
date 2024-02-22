import React from 'react'

import { Helmet } from 'react-helmet'

import './feb24.css'

const Feb24 = (props) => {
  return (
    <div className="feb24-container">
      <Helmet>
        <title>feb24 - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="feb24 - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
    </div>
  )
}

export default Feb24
