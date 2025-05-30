import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <div className="home-hero">
        <div className="home-container11">
          <div className="home-hero-text-container">
            <h1 className="home-heading1">welcome to guzuv&apos;s site!</h1>
            <div className="home-container12">
              <span className="home-text10">
                <span>“epic quote here”</span>
                <br></br>
                <br></br>
                <span>patch notes:</span>
                <br></br>
                <span>-brought back 1v1 lol gamemodes</span>
                <br></br>
                <span>
                  -added a lot of now games
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>(fnaf, papas games, fireboy/watergirl)</span>
                <span>!</span>
                <br></br>
              </span>
            </div>
            <a href="#actual-games" className="home-cta-btn button">
              <span>
                <span className="Anchor">Get Gaming!</span>
                <br></br>
              </span>
            </a>
          </div>
        </div>
        <img alt="image" src="/leoyeah-1500w.png" className="home-image1" />
      </div>
      <div className="home-section-separator1"></div>
      <div id="features" className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text26">what i do.</h2>
          <span className="home-text27">
            what i do when i&apos;m not doing chores or being outdoors.
          </span>
        </div>
        <div className="home-cards-container1">
          <div className="home-feature-card1">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxnYW1lfGVufDB8fHx8MTY2MDk1ODEwMA&amp;ixlib=rb-1.2.1&amp;w=200"
              className="home-image2"
            />
            <span className="home-heading2 Card-Heading">
              playstation plays!
            </span>
            <span className="home-text28">
              <span>I play ps4, i play call of duty, apex legends,</span>
              <span>, minecraft, and many others!</span>
            </span>
          </div>
          <div className="home-feature-card2">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1541560052-5e137f229371?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDg3fHxjb21wdXRlcnxlbnwwfHx8fDE2NjA5NTgzMDg&amp;ixlib=rb-1.2.1&amp;w=200"
              className="home-image3"
            />
            <span className="home-heading3 Card-Heading">pc gaming!</span>
            <span className="home-text31">
              <span>
                i play on pc too! i have rust, minecraft, call of duty, tf2
                (main medic) and others! i&apos;m always willing to try
                something new, so let me know!
              </span>
              <br className="Card-Text"></br>
            </span>
          </div>
          <div className="home-feature-card3">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1554672408-17407e0322ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM0fHxwaG9uZXxlbnwwfHx8fDE2NjA5NTg4Mjk&amp;ixlib=rb-1.2.1&amp;w=200"
              className="home-image4"
            />
            <span className="home-heading4 Card-Heading">say hi!</span>
            <span className="home-text34">
              <span>
                i&apos;m on discord! i have a discord server, contact me by
                scrolling down!
              </span>
              <br className="Card-Text"></br>
            </span>
          </div>
        </div>
      </div>
      <span className="home-text37">
        <span>
          ignore me, just making seo better:
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>
          guzuv guzuv guzuv guzuv guzuv guzuv guzuv games games unblocked
        </span>
      </span>
      <div className="home-container13"></div>
      <div className="home-section-separator2"></div>
      <div className="home-blog-post-card">
        <div id="blog" className="home-container14">
          <div className="home-container15">
            <span className="home-text41"> </span>
          </div>
          <div className="home-container16">
            <div className="home-container17">
              <h1 className="home-text42">major maintainance!</h1>
            </div>
            <img
              alt="image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpickmysolar.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fanimat-wrench-color.gif&amp;f=1&amp;nofb=1&amp;ipt=ea5e0d81f73af0c54da8087e21b41325b9159529c251869fd62ea55ca2b2adbc&amp;ipo=images"
              className="home-image5"
            />
          </div>
          <span className="home-text43">Feb 22, 2024</span>
          <span className="home-text44">
            Well, it has been a while. I&apos;ve left this site neglected for a
            while, and a change is due. I have fixed every single game, yes,
            even that one. Time Shooters 2 is back, since a few people wanted it
            back. Have fun, and I&apos;ll be giving this site way more love
            soon.
          </span>
          <div className="home-container18">
            <div className="home-profile">
              <img alt="profile" src="/catpic.png" className="home-image6" />
              <span className="home-text45"> me lol</span>
              <Link to="/archive" className="home-navlink1">
                <span>   </span>
                <span className="home-text47">
                  want to see all of my blogs? here!
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container19"></div>
      <div className="home-container20">
        <div id="actual-games" className="home-container21">
          <div className="home-card-content">
            <h3 className="home-text48 BigCard-Heading">hey!</h3>
            <span className="home-text49">
              <span>
                I got so many games, i had to put it somewhere else. just click
                this epic button, and join the fun!
              </span>
              <br></br>
              <Link to="/bounty" className="home-navlink2">
                bounty here
              </Link>
              <br></br>
            </span>
            <Link to="/games" className="home-navlink3">
              <div className="home-container22">
                <span className="home-text53">click here!</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-container23"></div>
      <div className="home-testimonials">
        <h2 className="home-text54">peeps i feature.</h2>
        <div className="home-cards-container2">
          <div className="home-testimonial-card1">
            <div className="home-card-heading1">
              <div className="home-name-and-position1">
                <a
                  href="https://www.youtube.com/channel/UCM6IqAj2XUFwmSvIddrvefw"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-name1"
                >
                  DanDoritos
                </a>
                <span className="home-position1 Card-Text">
                  dorito sniffer.
                </span>
              </div>
              <div className="home-stars-container1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon10"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon12"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon14"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon16"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon18"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
              </div>
            </div>
            <span className="home-text55">
              the coolest nerd i know, check him out, he posts gaming and life
              videos.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-testimonial-card2">
            <div className="home-card-heading2">
              <div className="home-name-and-position2">
                <a
                  href="https://www.youtube.com/channel/UCs1Qb2-lTeFUi-rqV6c1lVg"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-name2"
                >
                  illyathegamer
                </a>
                <span className="home-position2 Card-Text">i luv shorts!</span>
              </div>
              <div className="home-stars-container2">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon20"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon22"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon24"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon26"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon28"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
              </div>
            </div>
            <span className="home-text56">
              good videos, does shorts, livestreams, and gameplay! dedicated and
              great!
            </span>
          </div>
          <div className="home-testimonial-card3">
            <div className="home-card-heading3">
              <div className="home-name-and-position3">
                <a
                  href="https://www.youtube.com/channel/UChTBftFlCQLReSg57pMOOFg"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-name3"
                >
                  AbloxYT
                </a>
                <span className="home-position3 Card-Text">boblox man!</span>
              </div>
              <div className="home-stars-container3">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon30"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon32"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon34"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon36"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon38"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
              </div>
            </div>
            <span className="home-text57">
              <span>
                loves roblox bedwars, has some nice vids, go say hi to him!
              </span>
              <br className="Card-Text"></br>
            </span>
          </div>
        </div>
      </div>
      <div className="home-container24"></div>
      <div id="contact" className="home-content-container">
        <h2 className="home-text60 Section-Heading">Contact me!</h2>
        <div className="home-locations-container">
          <div className="home-location1">
            <span className="home-heading5">most active on discord.</span>
            <div className="home-adress">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon40">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <span className="Section-Text">@guzuvy</span>
            </div>
            <div className="home-email">
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon42">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <span className="home-text62">    Guzuvy</span>
            </div>
            <div className="home-phone">
              <img
                alt="image"
                src="https://e7.pngegg.com/pngimages/64/167/png-clipart-discord-computer-icons-logo-antopodis-logo-miscellaneous-smiley.png"
                className="home-image7"
              />
              <span>
                <span>  guzuv</span>
                <br></br>
                <a
                  href="https://discord.gg/bCSzm7k3fe"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                   join the server?
                </a>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="https://i.ibb.co/kDYJv3g/dark-hi.png"
          className="home-image8"
        />
      </div>
    </div>
  )
}

export default Home
