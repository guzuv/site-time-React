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
              <span>now with free chat, have fun!</span>
            </span>
            <a
              href="https://among-us-1tim-temp-dmain.netlify.app/"
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
            <h3 className="games-text009 BigCard-Heading">minecraft!</h3>
            <span className="games-text010 Card-Text">
              Minecraft 1.8.8, right in your browser! pick multiplayer to join
              with a friend. voice chat may come soon.
            </span>
            <a
              href="https://guzuv.github.io/test/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link03 button"
            >
              we got flowers!
            </a>
          </div>
          <div className="games-card-content04">
            <h3 className="games-text011 BigCard-Heading">super mario 64.</h3>
            <span className="games-text012 Card-Text">
              mario 64, with saves and everything! it&apos;s a bunch of fun,
              good luck! spam space while it&apos;s loading for sound!
            </span>
            <a
              href="https://28klotlucas2.github.io/Mario64webgl/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link04 button"
            >
              wahoo!
            </a>
          </div>
          <div className="games-card-content05">
            <h3 className="games-text013 BigCard-Heading">Temple Run 2</h3>
            <span className="games-text014 Card-Text">
              run, jump, duck and dash as far as you can! Snag upgrades, and get
              that idol!
            </span>
            <a
              href="https://templerun2game.github.io/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link05 button"
            >
              run forever!
            </a>
          </div>
          <div className="games-card-content06">
            <h3 className="games-text015 BigCard-Heading">multi-emulator.</h3>
            <span className="games-text016">
              <span className="Card-Text">so many emulators?! wowie!</span>
              <span className="Card-Text games-text018">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://archive.org/download/nintendo-64-romset-usa"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link06"
              >
                roms here.
              </a>
            </span>
            <a
              href="https://demo.emulatorjs.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link07 button"
            >
              *gaming time*
            </a>
          </div>
          <div className="games-card-content07">
            <h3 className="games-text019 BigCard-Heading">Basketball Random</h3>
            <span className="games-text020">
              two players, one device, play to 5 points, now with randomness!
            </span>
            <a
              href="https://guzuvy.github.io/BasketRandom/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link08 button"
            >
              ai or friend?
            </a>
          </div>
          <div className="games-card-content08">
            <h3 className="games-text021 BigCard-Heading">subway surfers</h3>
            <span className="games-text022">
              dodge the Inspector, hoverboard it out, and run, run, and run in
              subway surfers!
            </span>
            <a
              href="https://subwaysurfersonlinegame.github.io/"
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
          <div className="games-card-content09">
            <h3 className="games-text026 BigCard-Heading">geometry dash!</h3>
            <span className="games-text027">
              get jumping, dodge the spikes, and don&apos;t get mad in geometry
              dash!
            </span>
            <a
              href="https://geometry-dash-online.github.io/a8/geometry-dash/"
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
          <div className="games-card-content10">
            <h3 className="games-text031 BigCard-Heading">tank trouble.</h3>
            <span className="games-text032">
              play with one or two buds on the same device! shoot, pickup op
              powerups, and beat your pals in Tank Trouble.
            </span>
            <a
              href="https://9ivl7gnculkofuv20qi9lf259m0updgo-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%252Ftank-trouble-2.xml&amp;container=enterprise&amp;view=default&amp;lang=en&amp;country=ALL&amp;sanitize=0&amp;v=2b8528b300a77cdf&amp;libs=core&amp;mid=239&amp;parent=https://sites.google.com/site/unblockedgames66ez/tank-trouble-2#st=e%3DAIHE3cDgk7WQND6fp1pTzBK%252FKK8PphSndr6e9ZpepIevpbkET7HwKEy9VR0C0WoX3kmkHXHViNxgPj4frOiBSIKm7qh2JHVr4FvA8iAqwGLYoRK%252BAsf4coAUl7c5bKMhHNIqDzDS%252Bx%252FL%26c%3Denterprise&amp;rpctoken=-2007491005489814481"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link11 button"
            >
              <span className="games-text033">
                <span>deathray too good.</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="games-card-content11">
            <h3 className="games-text036 BigCard-Heading">smash karts!</h3>
            <span className="games-text037">
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
                className="games-link12"
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
              href="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/zhit73/tallteamSK@034c728950cc6399a588e338b653e6cfd3aaad1d/sk.xml"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link13 button"
            >
              <span className="games-text041">
                <span>boost!</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="games-card-content12">
            <h3 className="games-text044 BigCard-Heading">
              barry has a secret.
            </h3>
            <span className="games-text045">
              <span>
                barry seems to be hiding something, help him and don&apos;t let
                the cops find out!
              </span>
              <br></br>
            </span>
            <a
              href="https://zayaruzostreetorgan.com/uploads/5/5/6/7/5567194/custom_themes/666344820848380631/barryhassecret.html"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link14 button"
            >
              <span className="games-text048">
                <span>what are you hiding?</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="games-card-content13">
            <h3 className="games-text051 BigCard-Heading">soccer random!</h3>
            <span className="games-text052">
              <span>
                basketball random, now soccer! play with a friend, or with a
                bot!
              </span>
              <br></br>
            </span>
            <a
              href="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://471058263-725410472258601738.preview.editmysite.com/uploads/b/139890129-510930859892590631/files/sr.xml"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link15 button"
            >
              <span className="games-text055">
                <span>balling!</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="games-card-content14">
            <h3 className="games-text058 BigCard-Heading">dino game!</h3>
            <span className="games-text059">
              Jump forever, can you reach 1500? now with 38% more dark mode!
            </span>
            <a
              href="https://chrome-dino-game.github.io/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link16 button"
            >
              <span className="games-text060">
                <span>jump forever!</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="games-card-content15">
            <h3 className="games-text063">The World&apos;s Hardest Game</h3>
            <span className="games-text064">
              The classic flash game is back! try not to rage, and beat The
              World&apos;s Hardest Game.
            </span>
            <a
              href="https://guzuvy.github.io/worlds-hardest-game/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link17 button"
            >
              <span className="games-text065">fear the blue dots!</span>
            </a>
          </div>
          <div className="games-card-content16">
            <h3 className="games-text066 BigCard-Heading">
              papa&apos;s burgeria
            </h3>
            <span className="games-text067">
              papa&apos;s burgeria, now not flash! take orders as fast as you
              can, make papa proud!
            </span>
            <a
              href="https://n9rdoob0ununnouhjqvkitf13gafg42c-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://284930575-173862048362649382.preview.editmysite.com/uploads/b/139890129-932376934547490748/files/pb.xml&amp;container=enterprise&amp;view=default&amp;lang=en&amp;country=ALL&amp;sanitize=0&amp;v=fe25a816748f7c16&amp;libs=core&amp;mid=90&amp;parent=https://sites.google.com/site/unblockedgame76/papa-s-burgeria#st=e%3DAIHE3cAtq2lZDkXyqppepeEmCY5ctMETqssA8gwpILAw9ObgAH0iZP4%252F5H4GI5COw0VKI4WeCQEmkdSD6i53BgTrKc920M5DS2PuIuz%252BF4a82hakPR2hH3o%253D%26c%3Denterprise&amp;rpctoken=-282397011414513026"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link18 button"
            >
              <span className="games-text068">burgers, yay!</span>
            </a>
          </div>
          <div className="games-card-content17">
            <h3 className="games-text069 BigCard-Heading">cod zombies.</h3>
            <span className="games-text070">
              just you, and the horde. how far can you survive? grab juggernog,
              you&apos;ll need it.
            </span>
            <a
              href="https://nzp.gay"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link19 button"
            >
              <span className="games-text071">infected!</span>
            </a>
          </div>
          <div className="games-card-content18">
            <h3 className="games-text072 BigCard-Heading">grindcraft!</h3>
            <span className="games-text073">
              grindcraft, now remastered! grind, grind, and grind until you can
              make people grind for you!
            </span>
            <a
              href="https://gg-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/godotpack@a808d88ace701810e236b7de190215fa6eed6415/side/gr-cr/gc.xml"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link20 button"
            >
              <span className="games-text074">minecraft rip-off?</span>
            </a>
          </div>
          <div className="games-card-content19">
            <h3 className="games-text075 BigCard-Heading">bloxorz.</h3>
            <span className="games-text076">
              play some fun, and challenging levels, now with a marbled block!
            </span>
            <a
              href="https://guzuvy.github.io/bloxorhttps://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/8c491f21-7353-4f1f-b2a0-9544824c4d28%2Fbloxors.xmlz/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link21 button"
            >
              <span className="games-text077">just get in there!</span>
            </a>
          </div>
          <div className="games-card-content20">
            <h3 className="games-text078 BigCard-Heading">time shooters 2!</h3>
            <span className="games-text079">
              get thru the levels, and stand still to slow time!
            </span>
            <a
              href="https://watchdocumentaries.com/wp-content/uploads/games/time-shooter-2/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link22 button"
            >
              <span className="games-text080">superhot!</span>
            </a>
          </div>
        </div>
        <div className="games-container1">
          <div className="games-service-card1">
            <div className="games-card-content21">
              <h3 className="games-text081 BigCard-Heading">Doodle Jump.</h3>
              <span className="games-text082 Card-Text">
                jump as high as you can! can you beat 15000 score? good luck!
              </span>
              <a
                href="https://guzuv.github.io/doodle-jump/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link23 Anchor button"
              >
                Get Jumping!
              </a>
            </div>
            <div className="games-card-content22">
              <h3 className="games-text083 BigCard-Heading">Doom!</h3>
              <span className="games-text084 Card-Text">
                get knee deep in hell, slaughter to victory! press any key to
                start. 
              </span>
              <a
                href="https://floooh.github.io/doom-sokol/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link24 button Anchor"
              >
                Rip and Tear!
              </a>
            </div>
            <div id="old-craft" className="games-card-content23">
              <h3 className="games-text085 BigCard-Heading">
                minecraft (old).
              </h3>
              <span className="games-text086">
                <span>
                  minecraft 1.5.2, with multiplayer and voice chat! pick
                  multiplayer and join with a friend! press escape in-game and
                  pick nearby to enable voice chat!
                </span>
                <br></br>
              </span>
              <a
                href="https://guzuv.github.io/minecraft"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link25 button Anchor"
              >
                get mining!
              </a>
            </div>
            <div className="games-card-content24">
              <h3 className="games-text089 BigCard-Heading">
                friday night funkin&apos;
              </h3>
              <span className="games-text090">
                <span>friday night funkin, have fun!</span>
                <br></br>
              </span>
              <a
                href="https://fridaynight-funkin.github.io/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link26 button"
              >
                funkin time!
              </a>
            </div>
            <div className="games-card-content25">
              <h3 className="games-text093 BigCard-Heading">1v1.lol</h3>
              <span className="games-text094">
                <span>
                  play with friends, and duel players around the world in
                  1v1.lol!
                </span>
                <br></br>
              </span>
              <a
                href="https://watchdocumentaries.com/wp-content/uploads/games/1v1-lol/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link27 button"
              >
                fortnite?
              </a>
            </div>
            <div className="games-card-content26">
              <h3 className="games-text097 BigCard-Heading">run 3</h3>
              <span className="games-text098">
                <span>
                  thanks bert for the idea! nostalgia trip and get all the dots!
                </span>
                <br></br>
              </span>
              <a
                href="https://lekug.github.io/tn6pS9dCf37xAhkJv/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link28 button"
              >
                skater too cool.
              </a>
            </div>
            <div className="games-card-content27">
              <h3 className="games-text101 BigCard-Heading">pixel combat 2</h3>
              <span className="games-text102">
                <span>
                  kudos to bert for the suggestion. Pixel combat 2, now with
                  multiplayer!
                </span>
                <br></br>
              </span>
              <a
                href="https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/gertdoro/Kubeflow@5135ede44898cc3790a1ca1083e77d94e3ad2f7f/admission-webhook/pkg/apis/pga2.xml"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link29 button"
              >
                <span>
                  <span>terrorist or not?</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content28">
              <h3 className="games-text108 BigCard-Heading">tunnel rush!</h3>
              <span className="games-text109">
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
                className="games-link30 button"
              >
                <span>
                  <span>breakneck speeds!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content29">
              <h3 className="games-text115 BigCard-Heading">
                Fireboy And Watergirl
              </h3>
              <span className="games-text116">
                <span>
                  A 2 player classic, fireboy and water girl, get gems, dodge
                  the opposites, and sabotage your friends!
                </span>
                <br></br>
              </span>
              <a
                href="https://guzuvy.github.io/fb-and-wg/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link31 button"
              >
                <span>
                  <span>Opposites Attract!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content30">
              <h3 className="games-text122 BigCard-Heading">Iron snout.</h3>
              <span className="games-text123">
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
                className="games-link32 button"
              >
                <span>
                  <span>making bacon!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content31">
              <h3 className="games-text129 BigCard-Heading">flappy bird.</h3>
              <span className="games-text130">
                <span>flap forever! (used to be a bounty)</span>
                <br></br>
              </span>
              <a
                href="https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/TAhlQLDa/index.html"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link33 button"
              >
                <span>
                  <span>Tap to flap!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content32">
              <h3 className="games-text136">
                <span className="games-text137 BigCard-Heading">
                  Baldi&apos;s Basics
                </span>
                <br></br>
              </h3>
              <span className="games-text139">
                <span>
                  snag notebooks, get sweep sweep sweeped, and escape in
                  baldi&apos;s basics!
                </span>
                <br></br>
              </span>
              <a
                href="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/wergboy/Meteor@38c6e9e88328adca299dc8dd72ae5e8a68553f37/examples/react-in-blaze/bbl.xml"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link34 button"
              >
                <span>
                  <span>slapping the ruler!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content33">
              <h3 className="games-text145">
                <span className="games-text146 BigCard-Heading">fnaf!</span>
                <br></br>
              </h3>
              <span className="games-text148">
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
                href="https://watchdocumentaries.com/wp-content/uploads/games/five-nights-at-freddys/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link35 button"
              >
                <span>
                  <span>har, har, har har har-</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content34">
              <h3 className="games-text154">
                <span className="BigCard-Heading">
                  duck life: treasure hunt.
                </span>
                <br></br>
              </h3>
              <span className="games-text157">
                <span>
                  get a duck, make &apos;em look snazzy, and run as long as you
                  can!
                </span>
                <br></br>
              </span>
              <a
                href="https://gg-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fduck-life-5.xml"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link36 button"
              >
                <span>
                  <span>run, run, and run!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content35">
              <h3 className="games-text163">
                <span className="BigCard-Heading">cookie clicker!</span>
                <br></br>
              </h3>
              <span className="games-text166">
                <span>
                  like cookies? click for cookies, and click for more cookies!
                  Now with cookie time machines!
                </span>
                <br></br>
              </span>
              <a
                href="https://guzuv.github.io/cookieclicker"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link37 button"
              >
                <span>
                  <span>succumb to the cookie.</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content36">
              <h3 className="games-text172">
                <span className="BigCard-Heading">boxing random.</span>
                <br></br>
              </h3>
              <span className="games-text175">
                <span>
                  boxing, but random?! hit the head, play with a buddy or with a
                  bot!
                </span>
                <br></br>
              </span>
              <a
                href="https://guzuvy.github.io/boxing-random/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link38 button"
              >
                <span>
                  <span>time to punch-out!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content37">
              <h3 className="games-text181">
                <span className="BigCard-Heading">chess!</span>
                <br></br>
              </h3>
              <span className="games-text184">
                <span>simple chess, has multiplayer and local gameplay.</span>
                <br></br>
              </span>
              <a
                href="http://plainchess.timwoelfle.de/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link39 button"
              >
                <span>
                  <span>&quot;checkmate.&quot;</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content38">
              <h3 className="games-text190">
                <span className="BigCard-Heading">slope</span>
                <br></br>
              </h3>
              <span className="games-text193">
                <span>slope gaming! how far can you go, i hit 52 score.</span>
                <br></br>
              </span>
              <a
                href="https://watchdocumentaries.com/wp-content/uploads/games/slope/"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link40 button"
              >
                <span className="games-text196">
                  <span>nyooom!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content39">
              <h3 className="games-text199">
                <span className="BigCard-Heading">super mario bros.</span>
                <br></br>
              </h3>
              <span className="games-text202">
                <span>
                  super mario bros! with a level creator, mods, and the original
                  game, all in one!
                </span>
                <br></br>
              </span>
              <a
                href="https://gg-opensocial.googleusercontent.com/gadgets/ifr?url=https://57264959-967300405472742195.preview.editmysite.com/uploads/b/11886820-385538800742658772/files/smb.xml"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link41 button"
              >
                <span className="games-text205">
                  <span>one up!</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="games-card-content40">
              <h3 className="games-text208">
                <span className="BigCard-Heading">janissary battles!</span>
                <br></br>
              </h3>
              <span className="games-text211">
                <span>
                  like random basketball? here&apos;s a new game by the same
                  people, now with sharp objects!
                </span>
                <br></br>
              </span>
              <a
                href="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/yrgen73/janibatt@a9212750ab7fcdb5f37ae991c38fef738aa37eba/jb.xml"
                target="_blank"
                rel="noreferrer noopener"
                className="games-link42 button"
              >
                <span className="games-text214">
                  <span>2 player madness!</span>
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
