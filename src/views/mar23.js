import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './mar23.css'

const Mar23 = (props) => {
  return (
    <div className="mar23-container1">
      <Helmet>
        <title>mar23 - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="mar23 - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <div id="blog" className="mar23-container2">
        <div className="mar23-container3">
          <span className="mar23-text1"> </span>
        </div>
        <div className="mar23-container4">
          <div className="mar23-container5">
            <h1 className="mar23-text2">new game!</h1>
          </div>
          <img
            alt="image"
            src="https://steamcdn-a.akamaihd.net/steam/apps/322500/extras/181002_GIF_SUPERHOT.jpg?t=1545385282"
            className="mar23-image1"
          />
        </div>
        <span className="mar23-text3">March 23, 2023</span>
        <span className="mar23-text4">
          Time Shooters 2 is a unique and innovative (other than the original)
          first-person shooter game where time moves only when you move. This
          interesting gameplay mechanic turns traditional action gaming upside
          down and offers an fun experience. In Time Shooters 2, you control the
          flow of time, making split-second decisions and managing to take out
          your enemies before they have a chance to react. The minimalist
          approach to game design makes for an enjoyable and stylish experience.
        </span>
        <div className="mar23-container6">
          <div className="mar23-profile">
            <img alt="profile" src="/catpic.png" className="mar23-image2" />
          </div>
          <Link to="/archive" className="mar23-navlink">
            want to see all of my blogs? here!
          </Link>
          <span className="mar23-text5">me lol</span>
        </div>
      </div>
    </div>
  )
}

export default Mar23
