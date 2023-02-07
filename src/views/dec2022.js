import React from 'react'

import { Helmet } from 'react-helmet'

import './dec2022.css'

const Dec2022 = (props) => {
  return (
    <div className="dec2022-container">
      <Helmet>
        <title>dec2022 - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="dec2022 - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <div className="dec2022-blog-post-card">
        <div id="blog" className="dec2022-container1">
          <div className="dec2022-container2">
            <span className="dec2022-text"> </span>
          </div>
          <div className="dec2022-container3">
            <div className="dec2022-container4">
              <h1 className="dec2022-text1">merry christmas!</h1>
            </div>
            <img
              alt="image"
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages%2F8izKRzp4T.gif&amp;f=1&amp;nofb=1&amp;ipt=67f86b766277484bf58708722b6fedef5d7d3e731f468b7a6f993f74fed42d3a&amp;ipo=images"
              className="dec2022-image"
            />
          </div>
          <span className="dec2022-text2">December 20, 2022</span>
          <span className="dec2022-text3">
            Sorry for the late blog, i&apos;ve been working on school, and now
            that i&apos;ve aced a few tests, I can start working on my site
            again! I love the feeling of happiness and joy that comes with the
            holiday season. It&apos;s a time when we give and receive gifts,
            which is always a lot of fun. I enjoy decorating my house with
            Christmas lights and decorations, and I always look forward to
            Christmas dinner. Overall, I just love everything about Christmas
            and the holiday season! This blog is a bit rushed, so soon i&apos;ll
            try to make it up! 
          </span>
          <div className="dec2022-container5">
            <div className="dec2022-profile">
              <img
                alt="profile"
                src="/playground_assets/catpic.png"
                className="dec2022-image1"
              />
            </div>
            <span className="dec2022-text4">me lol</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dec2022
