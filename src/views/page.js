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
      <form
        action="https://formsubmit.co/harryserah@gmail.com"
        method="POST"
        enctype="application/x-www-form-urlencoded"
        className="page-form"
      >
        <span className="page-text">
          words are cool and send me this please
        </span>
        <input
          type="text"
          name="fan@gmail.com"
          disabled="email"
          required
          placeholder="your email"
          className="input"
        />
        <button type="submit" className="button">
          Button
        </button>
      </form>
    </div>
  )
}

export default Page
