import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './archive.css'

const Archive = (props) => {
  return (
    <div className="archive-container">
      <Helmet>
        <title>guzuv's archive!</title>
        <meta name="description" content="past blogs of mine at guzuv.ml!" />
        <meta property="og:title" content="guzuv's archive!" />
        <meta
          property="og:description"
          content="past blogs of mine at guzuv.ml!"
        />
      </Helmet>
      <span className="archive-text">Welcome to the Archive!</span>
      <div className="archive-features">
        <h1 className="archive-text1">Discover our unique features</h1>
        <div className="archive-container1">
          <div className="archive-feature-card">
            <Link to="/october2022" className="archive-navlink">
              <h2 className="archive-text2">October 2022</h2>
            </Link>
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
