import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './feb2023.css'

const Feb2023 = (props) => {
  return (
    <div className="feb2023-container">
      <Helmet>
        <title>feb2023 - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="feb2023 - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <div className="feb2023-blog-post-card">
        <div id="blog" className="feb2023-container1">
          <div className="feb2023-container2">
            <span className="feb2023-text"> </span>
          </div>
          <div className="feb2023-container3">
            <div className="feb2023-container4">
              <h1 className="feb2023-text1">new year! </h1>
            </div>
            <img
              alt="image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.tenor.com%2FmJU99ZjtlQsAAAAM%2Ftbh-creature.gif&amp;f=1&amp;nofb=1&amp;ipt=6357997f4b96b4faa7b62cd234f1cf845d868843ffda79ed9e2f988d7b22de7a&amp;ipo=images"
              className="feb2023-image"
            />
          </div>
          <span className="feb2023-text2">January 7, 2022</span>
          <span className="feb2023-text3">
            I&apos;m so excited for the new year! I can&apos;t wait to see what
            the next year has in store for us all. I&apos;m going to make sure
            that I make the most of it. i&apos;m getting a pc too! I&apos;m
            going to set some goals for this site, and work my best to achieve
            them. feel free to use the &quot;want a game?&quot; for just saying
            hello! More games are coming, and more bounties too! 
          </span>
          <div className="feb2023-container5">
            <div className="feb2023-profile">
              <img
                alt="profile"
                src="/playground_assets/catpic.png"
                className="feb2023-image1"
              />
            </div>
            <Link to="/archive" className="feb2023-navlink">
              want to see all of my blogs? here!
            </Link>
            <span className="feb2023-text4">me lol</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feb2023
