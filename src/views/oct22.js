import React from 'react'

import { Helmet } from 'react-helmet'

import './oct22.css'

const Oct22 = (props) => {
  return (
    <div className="oct22-container1">
      <Helmet>
        <title>oct22 - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="oct22 - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <div className="oct22-blog-post-card">
        <div className="oct22-container2">
          <div className="oct22-container3">
            <span className="oct22-text10"> </span>
          </div>
          <img
            alt="image"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F1AhjFyCwrwKS4%2Fsource.gif&amp;f=1&amp;nofb=1&amp;ipt=3fed2725c4625a47e87be670a16324058348f3eb7db4fc8d3e4a737b8781e129&amp;ipo=images"
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="oct22-image1"
          />
          <h1 className="oct22-text11">new game!</h1>
          <span className="oct22-text12">october 14, 2022</span>
          <span className="oct22-text13">
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
          <div className="oct22-container4">
            <div className="oct22-profile1">
              <img alt="profile" src="/catpic.png" className="oct22-image2" />
            </div>
            <span className="oct22-text21">me lol</span>
          </div>
          <div className="oct22-container5">
            <div className="oct22-container6">
              <span className="oct22-text22"> </span>
            </div>
            <img
              alt="image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmashboards.com%2Fattachments%2Fboyfriend-gif.302219%2F&amp;f=1&amp;nofb=1&amp;ipt=019ae4d1ef6a7eebff462a5606ca7f4ec218415748b02cc0568cdd8a26a2147f&amp;ipo=images"
              className="oct22-image3"
            />
            <h1 className="oct22-text23">Fresh new game!</h1>
            <span className="oct22-text24">october 25, 2022</span>
            <span className="oct22-text25">
              <span>
                Friday Night Funkin&apos; is a rhythm game created by
                Ninjamuffin99 and published by Newgrounds. The game has been
                released on PC, Mac, and Linux, with a Switch port in
                development. The player takes control of a boy named Boyfriend
                who must compete against seven other characters in a weekly
                dance battle. The game features original songs composed by Kawai
                Sprite and ParagonX9, as well as remixes of popular songs.
              </span>
              <br></br>
              <br></br>
              <span>
                Friday Night Funkin&apos; is a rhythm game that is easy to pick
                up but difficult to master. The player must hit the correct keys
                in time with the music in order to make Boyfriend dance. The
                game features a variety of different characters, each with their
                own unique dance moves. The game also features a variety of
                different songs, ranging from original compositions to remixes
                of popular songs. Friday Night Funkin&apos; is a great game for
                people of all ages and is sure to get you moving and grooving.
              </span>
            </span>
            <div className="oct22-container7">
              <div className="oct22-profile2">
                <img alt="profile" src="/catpic.png" className="oct22-image4" />
              </div>
              <span className="oct22-text30">me lol</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Oct22
