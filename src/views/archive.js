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
              <h2 className="archive-text01">October 2022</h2>
            </Link>
            <Link to="/oct22" className="archive-navlink01">
              <img
                alt="image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia0.giphy.com%2Fmedia%2F93j3soUou1gaHJpY4Q%2Fgiphy.gif&amp;f=1&amp;nofb=1&amp;ipt=173566f1602377b769a18407e61c9b00c8b725e386e44a587712880a7138f749&amp;ipo=images"
                className="archive-image"
              />
            </Link>
          </div>
          <div className="archive-feature-card1">
            <Link to="/dec22" className="archive-navlink02">
              <h2 className="archive-text02">December 2022</h2>
            </Link>
            <Link to="/dec22" className="archive-navlink03">
              <img
                alt="image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F31.media.tumblr.com%2Fb581c1eef77efb498b1ddc585da82bb7%2Ftumblr_mf49rn1Tlv1rfjowdo1_500.gif&amp;f=1&amp;nofb=1&amp;ipt=b9ed11428e2de95abfe7afc83fa0f216e07c3f398ba45669a8b2eecd47f2be3e&amp;ipo=images"
                className="archive-image1"
              />
            </Link>
          </div>
          <div className="archive-feature-card2">
            <Link to="/nov22" className="archive-navlink04">
              <h2 className="archive-text03">November 2022</h2>
            </Link>
            <Link to="/nov22" className="archive-navlink05">
              <img
                alt="image"
                src="https://media2.giphy.com/media/PhHRGsy8SuXcdDErKK/source.gif"
                className="archive-image2"
              />
            </Link>
          </div>
          <div className="archive-feature-card3">
            <Link to="/jan23" className="archive-navlink06">
              <h2 className="archive-text04">january 2023</h2>
            </Link>
            <Link to="/jan23" className="archive-navlink07">
              <img
                alt="image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F1wX5TJZPqVw3HhyDYn%2Fgiphy.gif&amp;f=1&amp;nofb=1&amp;ipt=d4b681e754b8c5d64ba998eb1a7f0d7a94699303d8d94592db5f80f21f588b29&amp;ipo=images"
                className="archive-image3"
              />
            </Link>
          </div>
          <div className="archive-feature-card4">
            <Link to="/jan23" className="archive-navlink08">
              <h2 className="archive-text05">february 2023</h2>
            </Link>
            <Link to="/feb23" className="archive-navlink09">
              <img
                alt="image"
                src="https://gifcord.gg/direct/8f18d1b9-4b71-42ef-98c5-6f6126ab4b66-8033.gif"
                className="archive-image4"
              />
            </Link>
          </div>
          <div className="archive-feature-card5">
            <Link to="/mar23" className="archive-navlink10">
              <h2 className="archive-text06">
                <span>march</span>
                <span> 2023</span>
              </h2>
            </Link>
            <Link to="/mar23" className="archive-navlink11">
              <img
                alt="image"
                src="https://steamcdn-a.akamaihd.net/steam/apps/322500/extras/181002_GIF_SUPERHOT.jpg?t=1545385282"
                className="archive-image5"
              />
            </Link>
          </div>
          <div className="archive-feature-card6">
            <Link to="/mar23" className="archive-navlink12">
              <h2 className="archive-text09">
                <span>
                  april
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>2023</span>
              </h2>
            </Link>
            <img
              alt="image"
              src="https://i.imgur.com/heF99Z3.png"
              className="archive-image6"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Archive
