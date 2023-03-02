import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './feb23.css'

const Feb23 = (props) => {
  return (
    <div className="feb23-container">
      <Helmet>
        <title>feb23 - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="feb23 - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <div className="feb23-blog-post-card">
        <div id="blog" className="feb23-container1">
          <div className="feb23-container2">
            <span className="feb23-text"> </span>
          </div>
          <div className="feb23-container3">
            <div className="feb23-container4">
              <h1 className="feb23-text1">valentine&apos;s day! </h1>
            </div>
            <img
              alt="image"
              src="https://gifcord.gg/direct/8f18d1b9-4b71-42ef-98c5-6f6126ab4b66-8033.gif"
              className="feb23-image"
            />
          </div>
          <span className="feb23-text2">February 7, 2023</span>
          <span className="feb23-text3">
            Valentine&apos;s day is coming soon! It is a very special day for
            lovers, and also a day when many people propose marriage. On this
            day, couples exchange gifts and express their love for each other.
            Single people often feel left out on this day, but there are still
            many ways to celebrate. Whether you are in a relationship or not,
            Valentine&apos;s day is a day to celebrate love. Maybe you have a
            dance you can go to, with someone you care about, or just spend it
            your best buds.
          </span>
          <div className="feb23-container5">
            <div className="feb23-profile">
              <img
                alt="profile"
                src="/playground_assets/catpic.png"
                className="feb23-image1"
              />
            </div>
            <Link to="/archive" className="feb23-navlink">
              want to see all of my blogs? here!
            </Link>
            <span className="feb23-text4">me lol</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feb23
