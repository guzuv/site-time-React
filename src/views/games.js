import React from 'react'

import { Helmet } from 'react-helmet'

import './games.css'

const Games = (props) => {
  return (
    <div className="games-container">
      <Helmet>
        <title>guzuv's games!</title>
        <meta
          name="description"
          content="epic games, adding some sub-regularly!"
        />
        <meta property="og:title" content="guzuv's games!" />
        <meta
          property="og:description"
          content="epic games, adding some sub-regularly!"
        />
      </Helmet>
      <div id="services" className="games-services">
        <div className="games-service-card">
          <div className="games-card-content">
            <h3 className="games-text BigCard-Heading">Frogger!</h3>
            <span className="games-text01 Card-Text">
              get all the frogs to the other hole, try not to get run over! now
              with mobile support!
            </span>
            <a
              href="http://denodell.github.io/frogger/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link button Anchor"
            >
              Start Crossing!
            </a>
          </div>
          <div className="games-card-content01">
            <h3 className="games-text02 BigCard-Heading">among us.</h3>
            <span className="games-text03 Card-Text">
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
              className="games-link01 button"
            >
              sus much?
            </a>
          </div>
          <div className="games-card-content02">
            <h3 className="games-text07 BigCard-Heading">GBA emulator.</h3>
            <span className="games-text08 Card-Text">
              my own GBA emulator! updating at times! thanks Will for
              suggestion! 
            </span>
            <a
              href="https://guzuv.github.io/guzEmu/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link02 button"
            >
              Have fun!
            </a>
          </div>
          <div className="games-card-content03">
            <h3 className="games-text09 BigCard-Heading">super mario 64.</h3>
            <span className="games-text10 Card-Text">
              mario 64, with saves and everything! it&apos;s a bunch of fun,
              good luck! spam space while it&apos;s loading for sound!
            </span>
            <a
              href="https://28klotlucas2.github.io/Mario64webgl/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link03 button"
            >
              wahoo!
            </a>
          </div>
          <div className="games-card-content04">
            <h3 className="games-text11 BigCard-Heading">Temple Run 2</h3>
            <span className="games-text12 Card-Text">
              run, jump, duck and dash as far as you can! Snag upgrades, and get
              that idol!
            </span>
            <a
              href="https://templerun2.56306.repl.co/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link04 button"
            >
              run forever!
            </a>
          </div>
          <div className="games-card-content05">
            <h3 className="games-text13 BigCard-Heading">n64 emulator.</h3>
            <span className="games-text14 Card-Text">
              a bunch of n64 games, with netplay (very laggy, good luck lol).
            </span>
            <a
              href="https://n64.harryjulies.repl.co/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link05 button"
            >
              *n64 bootup sounds*
            </a>
          </div>
          <div className="games-card-content06">
            <h3 className="games-text15 BigCard-Heading">
              Mario and Luigi: PIT
            </h3>
            <span className="games-text16">
              Mario and Luigi: Partners In Time, all in it&apos;s laggy glory!
            </span>
            <a
              href="https://mlpc.ds-emu.repl.co/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link06 button"
            >
              babies shall cry!
            </a>
          </div>
          <div className="games-card-content07">
            <h3 className="games-text17 BigCard-Heading">Basketball Random</h3>
            <span className="games-text18">
              two players, one device, play to 5 points, now with randomness!
            </span>
            <a
              href="https://sra0obgp0bbi7ip2aqr2lcirgjd7tqck-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/z001down/basket-random.xml&amp;container=enterprise&amp;view=default&amp;lang=en&amp;country=ALL&amp;sanitize=0&amp;v=419cc5c363609e21&amp;libs=core&amp;mid=22&amp;parent=https://sites.google.com/site/unblockedgame76/basket-random#st=e%3DAIHE3cDdLuhtOZhDgaHCSbx0lixygHcW0%252BSTp8mA0Xw5B%252Bq%252BN493WbkH74q6Z8xtqpr5cOIWiQeCeQ%252BlSDyBw%252BpehcEfVpu7Gcf3SardRsqmmqlS%252BG9%252FszQ%253D%26c%3Denterprise&amp;rpctoken=5086229488593983439"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link07 button"
            >
              ai or friend?
            </a>
          </div>
        </div>
        <div className="games-service-card1">
          <div className="games-card-content08">
            <h3 className="games-text19 BigCard-Heading">Doodle Jump.</h3>
            <span className="games-text20 Card-Text">
              jump as high as you can! can you beat 15000 score? good luck!
            </span>
            <a
              href="https://omackenzie.github.io/Doodle-Jump-in-JS/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link08 Anchor button"
            >
              Get Jumping!
            </a>
          </div>
          <div className="games-card-content09">
            <h3 className="games-text21 BigCard-Heading">Doom!</h3>
            <span className="games-text22 Card-Text">
              get knee deep in hell, slaughter to victory! press any key to
              start. 
            </span>
            <a
              href="https://floooh.github.io/doom-sokol/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link09 button Anchor"
            >
              Rip and Tear!
            </a>
          </div>
          <div className="games-card-content10">
            <h3 className="games-text23 BigCard-Heading">minecraft.</h3>
            <span className="games-text24">
              <span>
                minecraft 1.5.2, with multiplayer and voice chat! pick
                multiplayer and join with a friend! press escape in-game and
                pick nearby to enable voice chat! error fix may come soon!
              </span>
              <br></br>
            </span>
            <a
              href="https://g.deev.is/eaglercraft/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link10 button Anchor"
            >
              get mining!
            </a>
          </div>
          <div className="games-card-content11">
            <h3 className="games-text27 BigCard-Heading">
              friday night funkin&apos;
            </h3>
            <span className="games-text28">
              <span>friday night funkin, have fun!</span>
              <br></br>
            </span>
            <a
              href="https://funkin.guzuv.repl.co"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link11 button"
            >
              funkin time!
            </a>
          </div>
          <div className="games-card-content12">
            <h3 className="games-text31 BigCard-Heading">1v1.lol</h3>
            <span className="games-text32">
              <span>
                play with friends, and duel players around the world using this!
              </span>
              <br></br>
            </span>
            <a
              href="https://1v1lol.56306.repl.co/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link12 button"
            >
              fortnite?
            </a>
          </div>
          <div className="games-card-content13">
            <h3 className="games-text35 BigCard-Heading">run 3</h3>
            <span className="games-text36">
              <span>
                thanks bert for the idea! nostalgia trip and get all the dots!
              </span>
              <br></br>
            </span>
            <a
              href="https://lekug.github.io/tn6pS9dCf37xAhkJv/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link13 button"
            >
              skater too cool.
            </a>
          </div>
          <div className="games-card-content14">
            <h3 className="games-text39 BigCard-Heading">pixel combat 2</h3>
            <span className="games-text40">
              <span>
                kudos to bert for the suggestion. Pixel combat 2, now with
                multiplayer!
              </span>
              <br></br>
            </span>
            <a
              href="https://debbiewatermanphd.com/uploads/5/0/5/6/5056555/custom_themes/607463927942590340/pixel-combat2.html"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link14 button"
            >
              <span>
                <span>terrorist or not?</span>
                <br></br>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Games
