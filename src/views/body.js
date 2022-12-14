import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './body.css'

const Body = (props) => {
  return (
    <div className="body-container">
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
      <div className="body-hero">
        <div className="body-hero-text-container">
          <h1 className="body-heading">welcome to guzuv&apos;s site!</h1>
          <span className="body-text">“epic quote here”</span>
          <a href="#services" className="body-cta-btn button">
            <span>
              <span className="anchor">play Games!</span>
              <br></br>
            </span>
          </a>
        </div>
        <img
          alt="image"
          src="/playground_assets/catpic.png"
          className="body-image"
        />
      </div>
      <div className="body-section-separator"></div>
      <div id="features" className="body-features">
        <div className="body-heading-container">
          <h2 className="body-text04">what i do.</h2>
          <span className="body-text05">
            what i do when i&apos;m not doing chores or being outdoors.
          </span>
        </div>
        <div className="body-cards-container">
          <div className="body-feature-card">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxnYW1lfGVufDB8fHx8MTY2MDk1ODEwMA&amp;ixlib=rb-1.2.1&amp;w=200"
              className="body-image1"
            />
            <span className="body-heading1 card-Heading">
              playstation plays!
            </span>
            <span className="body-text06">
              I play ps4 games, i play call of duty warzone, apex legends,
              fortnite, minecraft, and many others!
            </span>
          </div>
          <div className="body-feature-card1">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1541560052-5e137f229371?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDg3fHxjb21wdXRlcnxlbnwwfHx8fDE2NjA5NTgzMDg&amp;ixlib=rb-1.2.1&amp;w=200"
              className="body-image2"
            />
            <span className="body-heading2 card-Heading">pc gaming!</span>
            <span className="body-text07">
              <span>
                i play on pc too! i have rust, minecraft, call of duty, and
                others! always willing to try something new, so let me know!
              </span>
              <br className="card-Text"></br>
            </span>
          </div>
          <div className="body-feature-card2">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1554672408-17407e0322ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM0fHxwaG9uZXxlbnwwfHx8fDE2NjA5NTg4Mjk&amp;ixlib=rb-1.2.1&amp;w=200"
              className="body-image3"
            />
            <span className="body-heading3 card-Heading">say hi!</span>
            <span className="body-text10">
              <span>
                i&apos;m on discord! i just might start a server one day,
                contact me by scrolling down.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="card-Text"></br>
            </span>
          </div>
        </div>
        <span className="body-text13">
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
      </div>
      <div className="body-container01">
        <div id="services" className="body-services">
          <div className="body-service-card">
            <div className="body-card-content">
              <h3 className="body-text17 bigCard-Heading">hey!</h3>
              <span className="body-text18">
                <span>
                  I got so many games, i had to put it somewhere else. just
                  click this epic button, and join the fun!
                </span>
                <br></br>
              </span>
              <Link to="/games" className="body-navlink">
                <div className="body-container02">
                  <span className="body-text21">click here!</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="body-section-separator1"></div>
      <div className="body-container03">
        <div className="body-testimonials">
          <h2 className="body-text22">peeps i feature.</h2>
          <div className="body-cards-container1">
            <div className="body-testimonial-card">
              <div className="body-card-heading">
                <div className="body-name-and-position">
                  <a
                    href="https://www.youtube.com/channel/UCM6IqAj2XUFwmSvIddrvefw"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="body-name"
                  >
                    DanDoritos
                  </a>
                  <span className="body-position card-Text">
                    dorito sniffer.
                  </span>
                </div>
                <div className="body-stars-container">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon02"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon04"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon06"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon08"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="body-text23">
                the coolest nerd i know, check him out, he posts gaming and life
                videos.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="body-testimonial-card1">
              <div className="body-card-heading1">
                <div className="body-name-and-position1">
                  <a
                    href="https://www.youtube.com/channel/UCs1Qb2-lTeFUi-rqV6c1lVg"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="body-name1"
                  >
                    illyathegamer
                  </a>
                  <span className="body-position1 card-Text">
                    i luv shorts!
                  </span>
                </div>
                <div className="body-stars-container1">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon10"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon12"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon14"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon16"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon18"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="body-text24">
                good videos, does shorts, livestreams, and gameplay! dedicated
                and great!
              </span>
            </div>
            <div className="body-testimonial-card2">
              <div className="body-card-heading2">
                <div className="body-name-and-position2">
                  <a
                    href="https://www.youtube.com/channel/UChTBftFlCQLReSg57pMOOFg"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="body-name2"
                  >
                    AbloxYT
                  </a>
                  <span className="body-position2 card-Text">boblox man!</span>
                </div>
                <div className="body-stars-container2">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon20"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon22"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon24"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon26"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="body-icon28"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="body-text25">
                <span>
                  loves roblox bedwars, has some nice vids, go say hi to him!
                </span>
                <br className="card-Text"></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="body-container04"></div>
      <div className="body-blog-post-card">
        <span>Text</span>
        <div className="body-container05">
          <img
            alt="image"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmashboards.com%2Fattachments%2Fboyfriend-gif.302219%2F&amp;f=1&amp;nofb=1&amp;ipt=019ae4d1ef6a7eebff462a5606ca7f4ec218415748b02cc0568cdd8a26a2147f&amp;ipo=images"
            image_src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmashboards.com%2Fattachments%2Fboyfriend-gif.302219%2F&amp;f=1&amp;nofb=1&amp;ipt=019ae4d1ef6a7eebff462a5606ca7f4ec218415748b02cc0568cdd8a26a2147f&amp;ipo=images"
            className="body-image4"
          />
          <span className="body-text29">
            shout out to ethan since he asked.
          </span>
        </div>
        <div className="body-container06">
          <div className="body-container07">
            <span className="body-text30"> </span>
          </div>
          <div className="body-container08">
            <h1 className="body-text31">new game!</h1>
            <span className="body-text32">  october 25, 2022</span>
          </div>
          <span className="body-text33">
            <span>
              Friday Night Funkin&apos; is a rhythm game created by
              Ninjamuffin99 and published by Newgrounds. The game has been
              released on PC, Mac, and Linux, with a Switch port in development.
              You take control of a boy named Boyfriend who must compete against
              seven other characters in a weekly dance battle. The game features
              original songs composed by Kawai Sprite and ParagonX9, as well as
              remixes of popular songs.
            </span>
            <br></br>
            <span>
              Friday Night Funkin&apos; is a rhythm game that is easy to pick up
              but difficult to master. The player must hit the correct keys in
              time with the music in order to make Boyfriend do epic rapping.
              The game features a variety of different characters, each with
              their own unique tracks. The game also features a variety of
              different songs, ranging from original compositions to remixes of
              popular songs. Friday Night Funkin&apos; is a great game for
              people of all ages and is sure to get you tapping to the beat!
            </span>
          </span>
          <div className="body-container09">
            <div className="body-profile">
              <img
                alt="profile"
                src="/playground_assets/catpic.png"
                className="body-image5"
              />
            </div>
            <span className="body-text37">me lol</span>
          </div>
        </div>
      </div>
      <div id="contact" className="body-contact">
        <div className="body-content-container">
          <h2 className="body-text38 section-Heading">Contact me!</h2>
          <div className="body-locations-container">
            <div className="body-location-1">
              <span className="body-heading4">most active on discord.</span>
              <div className="body-adress">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="body-icon30"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <span className="section-Text">@guzuvy</span>
              </div>
              <div className="body-email">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="body-icon32"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <span className="body-text40">    Guzuvy</span>
              </div>
              <span className="body-text41">
                <span>leo@guzuv.ml</span>
                <br></br>
                <br></br>
              </span>
              <div className="body-phone">
                <img
                  alt="image"
                  src="https://e7.pngegg.com/pngimages/64/167/png-clipart-discord-computer-icons-logo-antopodis-logo-miscellaneous-smiley.png"
                  className="body-image6"
                />
                <span>  guzuv#0571</span>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="https://i.ibb.co/kDYJv3g/dark-hi.png"
          className="body-image7"
        />
      </div>
    </div>
  )
}

export default Body
