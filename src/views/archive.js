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
        <div className="archive-container1">
          <div className="archive-feature-card">
            <Link to="/oct22" className="archive-navlink">
              <h2 className="archive-text1">October 2022</h2>
            </Link>
            <img
              alt="image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia0.giphy.com%2Fmedia%2F93j3soUou1gaHJpY4Q%2Fgiphy.gif&amp;f=1&amp;nofb=1&amp;ipt=173566f1602377b769a18407e61c9b00c8b725e386e44a587712880a7138f749&amp;ipo=images"
              className="archive-image"
            />
          </div>
          <div className="archive-feature-card1">
            <Link to="/november2022" className="archive-navlink1">
              <h2 className="archive-text2">November 2022</h2>
            </Link>
            <img
              alt="image"
              src="https://media2.giphy.com/media/PhHRGsy8SuXcdDErKK/source.gif"
              className="archive-image1"
            />
          </div>
          <div className="archive-feature-card2">
            <Link to="/november2022" className="archive-navlink2">
              <h2 className="archive-text3">Decomber 2022</h2>
            </Link>
            <img
              alt="image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F31.media.tumblr.com%2Fb581c1eef77efb498b1ddc585da82bb7%2Ftumblr_mf49rn1Tlv1rfjowdo1_500.gif&amp;f=1&amp;nofb=1&amp;ipt=b9ed11428e2de95abfe7afc83fa0f216e07c3f398ba45669a8b2eecd47f2be3e&amp;ipo=images"
              className="archive-image2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Archive
