import React from 'react'

import { Helmet } from 'react-helmet'

import './october2022.css'

const October2022 = (props) => {
  return (
    <div className="october2022-container">
      <Helmet>
        <title>october2022 - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="october2022 - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <div className="october2022-blog-post-card">
        <div className="october2022-container1">
          <img
            alt="image"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F1AhjFyCwrwKS4%2Fsource.gif&amp;f=1&amp;nofb=1&amp;ipt=3fed2725c4625a47e87be670a16324058348f3eb7db4fc8d3e4a737b8781e129&amp;ipo=images"
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="october2022-image"
          />
          <span className="october2022-text">
            shout out to bannon since he asked.
          </span>
        </div>
        <div className="october2022-container2">
          <div className="october2022-container3">
            <span className="october2022-text01"> </span>
            <span className="october2022-text02">october 14, 2022</span>
          </div>
          <h1 className="october2022-text03">new game!</h1>
          <span className="october2022-text04">
            <span>
               I just added a new game to my site and I think you&apos;ll really
              enjoy it. It&apos;s called Super Mario 64 and it&apos;s an old
              game from the Nintendo 64. You play as Mario and you run and jump
              around into different paintings. I remember playing this game
              years ago during a visit to a old arcade and i loved it. you win
              by beating Bowser and saving Princess Peach.
            </span>
            <br></br>
            <br></br>
            <span>
               Super Mario 64 is an iconic game for a few reasons. First, it was
              one of the first 3D platformers and did really well. The controls
              are tight, the camera is good, and the level design is excellent.
              It&apos;s also a really beautiful game with great music. Finally,
              it&apos;s just really fun to play.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
               If you&apos;re looking for a fun game to play, you should try
              this game out! It&apos;s on my site, so playing it is much easier,
              and you can also use a gamepad if you want. It saves to your
              device, so make sure to use the same one and don&apos;t lose your
              progress!
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </span>
          <div className="october2022-container4">
            <div className="october2022-profile">
              <img
                alt="profile"
                src="/playground_assets/catpic.png"
                className="october2022-image1"
              />
            </div>
            <span className="october2022-text12">me lol</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default October2022
