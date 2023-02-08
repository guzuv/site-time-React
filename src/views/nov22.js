import React from 'react'

import { Helmet } from 'react-helmet'

import './nov22.css'

const Nov22 = (props) => {
  return (
    <div className="nov22-container">
      <Helmet>
        <title>nov22 - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="nov22 - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <img
        alt="cross"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbestanimations.com%2FSigns%26Shapes%2FWorship%2FChristian%2Fcross-animated-gif-29.gif&amp;f=1&amp;nofb=1&amp;ipt=4b26f7f921ce9a0068d158f4275040b882126fbdb75cf7f29231599ff145006d&amp;ipo=images"
        className="nov22-pasted-image"
      />
      <span className="nov22-text">
        shout out to Alex Halmer for inspiring me.
      </span>
      <div className="nov22-blog-post-card">
        <div className="nov22-container1">
          <div className="nov22-container2">
            <span className="nov22-text1"> </span>
          </div>
          <div className="nov22-container3">
            <h1 className="nov22-text2">remember them all.</h1>
            <span className="nov22-text3">  november 11, 2022</span>
          </div>
          <span className="nov22-text4">
            <span>
              Remembrance day is a Canadian tradition that dates back to the
              First World War. Every year on November 11th, Canadians across the
              country pause to remember the men and women who have served, and
              continue to serve, our country. From the Vimy Ridge Memorial in
              France to the National War Memorial in Ottawa, there are many ways
              to honour our veterans.
            </span>
            <br></br>
            <span>
              For many of us, Remembrance Day is a time to reflect on the
              sacrifices made by our family members and friends. It is also an
              opportunity to teach our children about the importance of
              remembrance and the value of freedom. No matter how we choose to
              honour our veterans, we can all agree that their service is
              deserving of our utmost respect.
            </span>
          </span>
          <div className="nov22-container4">
            <div className="nov22-profile">
              <img
                alt="profile"
                src="/playground_assets/catpic.png"
                className="nov22-image"
              />
            </div>
            <span className="nov22-text8">me lol</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nov22
