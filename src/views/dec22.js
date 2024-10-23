import React from 'react'

import { Helmet } from 'react-helmet'

import './dec22.css'

const Dec22 = (props) => {
  return (
    <div className="dec22-container1">
      <Helmet>
        <title>dec22 - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="dec22 - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <div className="dec22-blog-post-card">
        <div id="blog" className="dec22-container2">
          <div className="dec22-container3">
            <span className="dec22-text1"> </span>
          </div>
          <h1 className="dec22-text2">merry christmas!</h1>
          <div className="dec22-container4">
            <img
              alt="image"
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages%2F8izKRzp4T.gif&amp;f=1&amp;nofb=1&amp;ipt=67f86b766277484bf58708722b6fedef5d7d3e731f468b7a6f993f74fed42d3a&amp;ipo=images"
              className="dec22-image1"
            />
            <div className="dec22-container5"></div>
          </div>
          <span className="dec22-text3">December 20, 2022</span>
          <span className="dec22-text4">
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
          <div className="dec22-container6">
            <div className="dec22-profile">
              <img alt="profile" src="/catpic.png" className="dec22-image2" />
            </div>
            <span className="dec22-text5">me lol</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dec22
