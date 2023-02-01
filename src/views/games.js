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
            <span className="games-text001 Card-Text">
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
            <h3 className="games-text002 BigCard-Heading">among us.</h3>
            <span className="games-text003 Card-Text">
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
            <h3 className="games-text007 BigCard-Heading">GBA emulator.</h3>
            <span className="games-text008 Card-Text">
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
            <h3 className="games-text009 BigCard-Heading">super mario 64.</h3>
            <span className="games-text010 Card-Text">
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
            <h3 className="games-text011 BigCard-Heading">Temple Run 2</h3>
            <span className="games-text012 Card-Text">
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
            <h3 className="games-text013 BigCard-Heading">n64 emulator.</h3>
            <span className="games-text014 Card-Text">
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
            <h3 className="games-text015 BigCard-Heading">
              Mario and Luigi: PIT
            </h3>
            <span className="games-text016">
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
            <h3 className="games-text017 BigCard-Heading">Basketball Random</h3>
            <span className="games-text018">
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
          <div className="games-card-content08">
            <h3 className="games-text019 BigCard-Heading">Justfall.lol</h3>
            <span className="games-text020">
              fall guys, but laggy and worse? hop in with a friend, and just
              fall!
            </span>
            <a
              href="https://hpgnuhuni0l3nn8j53je85i660qe5bj0-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/s005rt6b/just_fall_lol.xml&amp;container=enterprise&amp;view=default&amp;lang=en&amp;country=ALL&amp;sanitize=0&amp;v=be2b8ccbfe31852b&amp;libs=core&amp;mid=22&amp;parent=https://www.sites.google.com/site/unblockedgames66ez/just-fall-lol#st=e%3DAIHE3cC0KH59gbRXxKLQrtK17EbsfOSkSrFjTKJ1KPn1IwzhsQ5HDnbGAYePTMBSi0fBGoLTS66mIMXy9YsHAMHOqACamXfLUvqnEN4echV%252B4OKaRxQKT2k%253D%26c%3Denterprise&amp;rpctoken=6557204429782762222"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link08 button"
            >
              <span>
                <span>penguin gaming!</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="games-card-content09">
            <h3 className="games-text024 BigCard-Heading">subway surfers</h3>
            <span className="games-text025">
              dodge the Inspector, hoverboard it out, and run, run, and run in
              subway surfers!
            </span>
            <a
              href="https://subwaysurfers.harryjulies.repl.co"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link09 button"
            >
              <span>
                <span>HEY!</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="games-card-content10">
            <h3 className="games-text029 BigCard-Heading">geometry dash!</h3>
            <span className="games-text030">
              get jumping, dodge the spikes, and don&apos;t get mad in geometry
              dash!
            </span>
            <a
              href="https://scratch.mit.edu/projects/105500895/fullscreen"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link10 button"
            >
              <span>
                <span>problem?</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="games-card-content11">
            <h3 className="games-text034 BigCard-Heading">tank trouble.</h3>
            <span className="games-text035">
              play with one or two buds on the same device! shoot, pickup op
              powerups, and beat your pals in Tank Trouble.
            </span>
            <a
              href="https://9ivl7gnculkofuv20qi9lf259m0updgo-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%252Ftank-trouble-2.xml&amp;container=enterprise&amp;view=default&amp;lang=en&amp;country=ALL&amp;sanitize=0&amp;v=2b8528b300a77cdf&amp;libs=core&amp;mid=239&amp;parent=https://sites.google.com/site/unblockedgames66ez/tank-trouble-2#st=e%3DAIHE3cDgk7WQND6fp1pTzBK%252FKK8PphSndr6e9ZpepIevpbkET7HwKEy9VR0C0WoX3kmkHXHViNxgPj4frOiBSIKm7qh2JHVr4FvA8iAqwGLYoRK%252BAsf4coAUl7c5bKMhHNIqDzDS%252Bx%252FL%26c%3Denterprise&amp;rpctoken=-2007491005489814481"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link11 button"
            >
              <span className="games-text036">
                <span>deathray too good.</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="games-card-content12">
            <h3 className="games-text039 BigCard-Heading">minecraft!</h3>
            <span className="games-text040">
              <span className="games-text041">
                minecraft 1.8.8! a really really wanted update to minecraft in
                your browser!
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a href="#old-craft" className="games-link12">
                older version here.
              </a>
              <br></br>
            </span>
            <a
              href="https://guzuv.github.io/minecraftX/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link13 button"
            >
              <span className="games-text043">
                <span>we got flowers!</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="games-card-content13">
            <h3 className="games-text046 BigCard-Heading">smash karts!</h3>
            <span className="games-text047">
              <span>
                a request from
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://abblox.ml"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link14"
              >
                abblox.ml!
              </a>
              <span>
                {' '}
                get powerups, shoot your friends, and play rip-off mario kart
                here!
              </span>
              <br></br>
            </span>
            <a
              href="https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/zhit73/8y3ds26tf3s@main/sc51di7fwus3.xml"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link15 button"
            >
              <span className="games-text051">
                <span>boost!</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="games-card-content14">
            <h3 className="games-text054 BigCard-Heading">
              barry has a secret.
            </h3>
            <span className="games-text055">
              <span>
                barry seems to be hiding something, help him and don&apos;t let
                the cops find out!
              </span>
              <br></br>
            </span>
            <a
              href="https://mj89sp3sau2k7lj1eg3k40hkeppguj6j-a-sites-opensocial.googleusercontent.com/gadgets/ifr?container=enterprise&amp;country=ALL&amp;lang=en&amp;libs=core&amp;mid=15&amp;parent=https://sites.google.com/site/unblockedgame76/barry-has-a-secret&amp;sanitize=0&amp;url=http://www.gstatic.com/sites-gadgets/iframe/iframe.xml&amp;v=ac865ceb0db21315&amp;view=default#up_scroll=no&amp;up_iframeURL=https://grandcanyonshuttles.com/uploads/5/5/6/7/5567194/custom_themes/666344820848380631/barryhassecret.html&amp;st=e=AIHE3cBPh%252Fk7%252FO6%252BrTSlTF0Dj4ECPp1dfy0N69Bcma3tL%252B3%252BDD1NDjZyH5Dqu7Ttf0FgYNpIreJ2%252BP4gi1LYU7q68%252ByHlYUDxPXu0Wj%252B2lagYoj%252FkHN13%252Bm5WHqX7wDDyHbFWIiqWBOD&amp;c=enterprise&amp;rpctoken=-3682836010572346652"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link16 button"
            >
              <span className="games-text058">
                <span>what are you hiding?</span>
                <br></br>
              </span>
            </a>
          </div>
        </div>
        <div className="games-container1">
          <div className="games-service-card1">
            <div className="games-card-content15">
              <h3 className="games-text061 BigCard-Heading">Doodle Jump.</h3>
              <span className="games-text062 Card-Text">
                jump as high as you can! can you beat 15000 score? good luck!
              </span>
              <a
                href="https://omackenzie.github.io/Doodle-Jump-in-JS/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link17 Anchor button"
              >
                Get Jumping!
              </a>
            </div>
            <div className="games-card-content16">
              <h3 className="games-text063 BigCard-Heading">Doom!</h3>
              <span className="games-text064 Card-Text">
                get knee deep in hell, slaughter to victory! press any key to
                start. 
              </span>
              <a
                href="https://floooh.github.io/doom-sokol/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link18 button Anchor"
              >
                Rip and Tear!
              </a>
            </div>
            <div id="old-craft" className="games-card-content17">
              <h3 className="games-text065 BigCard-Heading">
                (older) minecraft.
              </h3>
              <span className="games-text066">
                <span>
                  minecraft 1.5.2, with multiplayer and voice chat! pick
                  multiplayer and join with a friend! press escape in-game and
                  pick nearby to enable voice chat! error fix may come soon!
                </span>
                <br></br>
              </span>
              <a
                href="https://guzuv.github.io/minecraft"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link19 button Anchor"
              >
                get mining!
              </a>
            </div>
            <div className="games-card-content18">
              <h3 className="games-text069 BigCard-Heading">
                friday night funkin&apos;
              </h3>
              <span className="games-text070">
                <span>friday night funkin, have fun!</span>
                <br></br>
              </span>
              <a
                href="https://funkin.guzuv.repl.co"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link20 button"
              >
                funkin time!
              </a>
            </div>
            <div className="games-card-content19">
              <h3 className="games-text073 BigCard-Heading">1v1.lol</h3>
              <span className="games-text074">
                <span>
                  play with friends, and duel players around the world in
                  1v1.lol!
                </span>
                <br></br>
              </span>
              <a
                href="https://1v1lol.56306.repl.co/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link21 button"
              >
                fortnite?
              </a>
            </div>
            <div className="games-card-content20">
              <h3 className="games-text077 BigCard-Heading">run 3</h3>
              <span className="games-text078">
                <span>
                  thanks bert for the idea! nostalgia trip and get all the dots!
                </span>
                <br></br>
              </span>
              <a
                href="https://lekug.github.io/tn6pS9dCf37xAhkJv/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link22 button"
              >
                skater too cool.
              </a>
            </div>
            <div className="games-card-content21">
              <h3 className="games-text081 BigCard-Heading">pixel combat 2</h3>
              <span className="games-text082">
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
                className="games-link23 button"
              >
                <span>
                  <span>terrorist or not?</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content22">
              <h3 className="games-text088 BigCard-Heading">tunnel rush!</h3>
              <span className="games-text089">
                <span>
                  dean gave me this idea. how long can you go, i was 7937m! it
                  will be blank, then it will load.
                </span>
                <br></br>
              </span>
              <a
                href="https://guzuv.github.io/tunnelrushing/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link24 button"
              >
                <span>
                  <span>breakneck speeds!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content23">
              <h3 className="games-text095 BigCard-Heading">
                Fireboy And Watergirl
              </h3>
              <span className="games-text096">
                <span>
                  A 2 player classic, fireboy and water girl, get gems, dodge
                  the opposites, and sabotage your friends!
                </span>
                <br></br>
              </span>
              <a
                href="https://3kh0githubio-replit.harryjulies.repl.co/projects/fireboywatergirlforesttemple/index.html"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link25 button"
              >
                <span>
                  <span>Opposites Attract!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content24">
              <h3 className="games-text102 BigCard-Heading">Iron snout.</h3>
              <span className="games-text103">
                <span>
                  last as long as you can, i got 21 dead on 1hp mode, can you
                  top that?
                </span>
                <br></br>
              </span>
              <a
                href="https://s3.eu-central-1.amazonaws.com/snoutupgames/ironsnout/index.html"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link26 button"
              >
                <span>
                  <span>making bacon!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content25">
              <h3 className="games-text109 BigCard-Heading">flappy bird.</h3>
              <span className="games-text110">
                <span>flap forever! (used to be a bounty)</span>
                <br></br>
              </span>
              <a
                href="https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/TAhlQLDa/index.html"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link27 button"
              >
                <span>
                  <span>Tap to flap!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content26">
              <h3 className="games-text116">
                <span className="games-text117 BigCard-Heading">
                  Burrito Bison
                </span>
                <br></br>
                <span>Launcha Libre!</span>
                <br></br>
              </h3>
              <span className="games-text121">
                <span>
                  The sequel to the original flash game! Smash gummies forever,
                  with 2 new charecters!
                </span>
                <br></br>
              </span>
              <a
                href="https://tybsi.com/games/burrito-bison-launcha-libre/index.html"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link28 button"
              >
                <span>
                  <span>smooshing bears!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content27">
              <h3 className="games-text127">
                <span className="games-text128 BigCard-Heading">
                  Baldi&apos;s Basics
                </span>
                <br></br>
              </h3>
              <span className="games-text130">
                <span>
                  snag notebooks, get sweep sweep sweeped, and escape in
                  baldi&apos;s basics!
                </span>
                <br></br>
              </span>
              <a
                href="https://guzuvy.github.io/BB/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link29 button"
              >
                <span>
                  <span>slapping the ruler!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content28">
              <h3 className="games-text136">
                <span className="games-text137 BigCard-Heading">fnaf!</span>
                <br></br>
              </h3>
              <span className="games-text139">
                <span>
                  scratch version of fnaf, chromebooks can&apos;t handle the
                  real one.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
              <a
                href="https://scratch.mit.edu/projects/116923140/fullscreen/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link30 button"
              >
                <span>
                  <span>har, har, har har har-</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content29">
              <h3 className="games-text145">
                <span className="BigCard-Heading">
                  duck life: treasure hunt.
                </span>
                <br></br>
              </h3>
              <span className="games-text148">
                <span>
                  get a duck, make &apos;em look snazzy, and run as long as you
                  can!
                </span>
                <br></br>
              </span>
              <a
                href="https://j2r6nosg50sta52p9ppesrspfd8r25hm-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%252Fduck-life-5.xml&amp;container=enterprise&amp;view=default&amp;lang=en&amp;country=ALL&amp;sanitize=0&amp;v=12887d5abec0fe6f&amp;libs=core&amp;mid=18&amp;parent=https://sites.google.com/site/unblockedgames66ez/duck-life-treasure-hunt#st=e%3DAIHE3cD8aaGDzs8D1e3ag5UuIHpZly%252FKvq8pj4bYw4lVMXm%252FbE2ZvMvHHPb2iRAaHEHpi0ycyoGXmW1YgAK5wdJJZEsqqOGK5jURUNJsuZHkcN%252BzWjCpjwfLCycyl4LWz3n4HX7RHMGN%26c%3Denterprise&amp;rpctoken=6717156308024130676"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link31 button"
              >
                <span>
                  <span>run, run, and run!</span>
                  <br></br>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Games
