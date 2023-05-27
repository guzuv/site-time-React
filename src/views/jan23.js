import React from 'react'

import { Helmet } from 'react-helmet'

import './jan23.css'

const Jan23 = (props) => {
  return (
    <div className="jan23-container">
      <Helmet>
        <title>jan23 - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="jan23 - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <div className="jan23-blog-post-card">
        <div id="blog" className="jan23-container1">
          <div className="jan23-container2">
            <span className="jan23-text"> </span>
          </div>
          <div id="blog" className="jan23-container3">
            <div className="jan23-container4">
              <span className="jan23-text1"> </span>
            </div>
            <div className="jan23-container5">
              <div className="jan23-container6">
                <h1 className="jan23-text2">new year! </h1>
              </div>
              <img
                alt="image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.tenor.com%2FmJU99ZjtlQsAAAAM%2Ftbh-creature.gif&amp;f=1&amp;nofb=1&amp;ipt=6357997f4b96b4faa7b62cd234f1cf845d868843ffda79ed9e2f988d7b22de7a&amp;ipo=images"
                className="jan23-image"
              />
            </div>
            <span className="jan23-text3">January 7, 2022</span>
            <span className="jan23-text4">
              I&apos;m so excited for the new year! I can&apos;t wait to see
              what the next year has in store for us all. I&apos;m going to make
              sure that I make the most of it. I&apos;m going to set some goals
              for this site, and work my best to achieve them. feel free to use
              the &quot;want a game?&quot; for just saying hello! More games are
              coming, and more bounties too! 
            </span>
            <div className="jan23-container7">
              <div className="jan23-profile">
                <img alt="profile" src="/catpic.png" className="jan23-image1" />
              </div>
              <span className="jan23-text5">me lol</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jan23
