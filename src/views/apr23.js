import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './apr23.css'

const Apr23 = (props) => {
  return (
    <div className="apr23-container1">
      <Helmet>
        <title>apr23 - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="apr23 - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <div id="blog" className="apr23-container2">
        <div className="apr23-container3">
          <span className="apr23-text1"> </span>
        </div>
        <div className="apr23-container4">
          <div className="apr23-container5">
            <h1 className="apr23-text2">new mc is back!</h1>
          </div>
          <img
            alt="image"
            src="https://i.imgur.com/heF99Z3.png"
            className="apr23-image1"
          />
        </div>
        <span className="apr23-text3">April 9, 2023</span>
        <span className="apr23-text4">
          i have gotten new Minecraft back! I managed to make the servers less
          laggy, but i would still set your render distance to one, and disable
          fog to make the game more playable. The bounties are back too, so try
          your best to snag some sweet robux. I may add some minigame servers
          soon too, send some feedback in the &quot;want a game?&quot; button.
          Have fun, hope to see you all mining away on my site! &lt;3
        </span>
        <div className="apr23-container6">
          <div className="apr23-profile">
            <img alt="profile" src="/catpic.png" className="apr23-image2" />
          </div>
          <Link to="/archive" className="apr23-navlink">
            want to see all of my blogs? here!
          </Link>
          <span className="apr23-text5">me lol</span>
        </div>
      </div>
    </div>
  )
}

export default Apr23
