import React from 'react'

import { Helmet } from 'react-helmet'

import './games.css'

const Games = (props) => {
  return (
    <div className="games-container">
      <Helmet>
        <title>games - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="games - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <div id="services" className="games-services">
        <div className="games-service-card">
          <div className="games-card-content">
            <h3 className="games-text bigCard-Heading">Frogger!</h3>
            <span className="games-text01 card-Text">
              get all the frogs to the other hole, try not to get run over! now
              with mobile support!
            </span>
            <a
              href="http://denodell.github.io/frogger/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link button anchor"
            >
              Start Crossing!
            </a>
          </div>
          <div className="games-card-content1">
            <h3 className="games-text02 bigCard-Heading">among us.</h3>
            <span className="games-text03 card-Text">
              <span>
                amongus with multiplayer!
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>quick chat only, have fun!</span>
            </span>
            <a
              href="https://among-us-online-fan-remake.1tim.repl.co/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link1 button"
            >
              sus much?
            </a>
          </div>
          <div className="games-card-content2">
            <h3 className="games-text07 bigCard-Heading">GBA emulator.</h3>
            <span className="games-text08 card-Text">
              my own GBA emulator! updating at times! thanks Will for
              suggestion! 
            </span>
            <a
              href="https://guzuv.github.io/guzEmu/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link2 button"
            >
              Have fun!
            </a>
          </div>
          <div className="games-card-content3">
            <h3 className="games-text09 bigCard-Heading">super mario 64.</h3>
            <span className="games-text10 card-Text">
              mario 64, with saves and everything! it&apos;s a bunch of fun,
              good luck! spam space while it&apos;s loading for sound!
            </span>
            <a
              href="https://28klotlucas2.github.io/Mario64webgl/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link3 button"
            >
              wahoo!
            </a>
          </div>
              <!-- Ezoic Code -->
<script src="//www.ezojs.com/basicads.js?d=guzuv.ml" type="text/javascript"></script>
<!-- Ezoic Code -->
        </div>
        <div className="games-service-card1">
          <div className="games-card-content4">
            <h3 className="games-text11 bigCard-Heading">Doodle Jump.</h3>
            <span className="games-text12 card-Text">
              jump as high as you can! can you beat 15000 score? good luck!
            </span>
            <a
              href="https://omackenzie.github.io/Doodle-Jump-in-JS/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link4 anchor button"
            >
              Get Jumping!
            </a>
          </div>
          <div className="games-card-content5">
            <h3 className="games-text13 bigCard-Heading">Doom!</h3>
            <span className="games-text14 card-Text">
              get knee deep in hell, slaughter to victory! press any key to
              start. 
            </span>
            <a
              href="https://floooh.github.io/doom-sokol/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link5 button anchor"
            >
              Rip and Tear!
            </a>
          </div>
          <div className="games-card-content6">
            <h3 className="games-text15 bigCard-Heading">minecraft.</h3>
            <span className="games-text16">
              <span>
                minecraft 1.5.2, with multiplayer and voice chat! pick
                multiplayer and join with a friend! press escape in-game and
                pick nearby to enable voice chat! error fix may come soon!
              </span>
              <br></br>
            </span>
            <a
              href="https://hyper-network.me/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link6 button anchor"
            >
              get mining!
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Games
