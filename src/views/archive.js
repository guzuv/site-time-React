import React from 'react'

import { Helmet } from 'react-helmet'

import './archive.css'

const Archive = (props) => {
  return (
    <div className="archive-container">
      <Helmet>
        <title>archive - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="archive - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <span className="archive-text">Welcome to the Archive!</span>
      <div className="archive-features">
        <h1 className="archive-text1">Discover our unique features</h1>
        <div className="archive-container1">
          <div className="archive-feature-card">
            <h2 className="archive-text2">October 2022</h2>
            <img
              alt="image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia0.giphy.com%2Fmedia%2F93j3soUou1gaHJpY4Q%2Fgiphy.gif&amp;f=1&amp;nofb=1&amp;ipt=173566f1602377b769a18407e61c9b00c8b725e386e44a587712880a7138f749&amp;ipo=images"
              className="archive-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Archive
