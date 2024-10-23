import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './archive.css'

const Archive = (props) => {
  return (
    <div className="archive-container1">
      <Helmet>
        <title>guzuv's archive!</title>
        <meta name="description" content="past blogs of mine at guzuv.ml!" />
        <meta property="og:title" content="guzuv's archive!" />
        <meta
          property="og:description"
          content="past blogs of mine at guzuv.ml!"
        />
      </Helmet>
      <span className="archive-text10">Welcome to the Archive!</span>
      <div className="archive-features">
        <div className="archive-container2">
          <div className="archive-feature-card1">
            <Link to="/oct22" className="archive-navlink10">
              <h2 className="archive-text11">October 2022</h2>
            </Link>
            <Link to="/oct22" className="archive-navlink11">
              <img
                alt="image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia0.giphy.com%2Fmedia%2F93j3soUou1gaHJpY4Q%2Fgiphy.gif&amp;f=1&amp;nofb=1&amp;ipt=173566f1602377b769a18407e61c9b00c8b725e386e44a587712880a7138f749&amp;ipo=images"
                className="archive-image1"
              />
            </Link>
          </div>
          <div className="archive-feature-card2">
            <Link to="/dec22" className="archive-navlink12">
              <h2 className="archive-text12">December 2022</h2>
            </Link>
            <Link to="/dec22" className="archive-navlink13">
              <img
                alt="image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F31.media.tumblr.com%2Fb581c1eef77efb498b1ddc585da82bb7%2Ftumblr_mf49rn1Tlv1rfjowdo1_500.gif&amp;f=1&amp;nofb=1&amp;ipt=b9ed11428e2de95abfe7afc83fa0f216e07c3f398ba45669a8b2eecd47f2be3e&amp;ipo=images"
                className="archive-image2"
              />
            </Link>
          </div>
          <div className="archive-feature-card3">
            <Link to="/nov22" className="archive-navlink14">
              <h2 className="archive-text13">November 2022</h2>
            </Link>
            <Link to="/nov22" className="archive-navlink15">
              <img
                alt="image"
                src="https://media2.giphy.com/media/PhHRGsy8SuXcdDErKK/source.gif"
                className="archive-image3"
              />
            </Link>
          </div>
          <div className="archive-feature-card4">
            <Link to="/jan23" className="archive-navlink16">
              <h2 className="archive-text14">january 2023</h2>
            </Link>
            <Link to="/jan23" className="archive-navlink17">
              <img
                alt="image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F1wX5TJZPqVw3HhyDYn%2Fgiphy.gif&amp;f=1&amp;nofb=1&amp;ipt=d4b681e754b8c5d64ba998eb1a7f0d7a94699303d8d94592db5f80f21f588b29&amp;ipo=images"
                className="archive-image4"
              />
            </Link>
          </div>
          <div className="archive-feature-card5">
            <Link to="/jan23" className="archive-navlink18">
              <h2 className="archive-text15">february 2023</h2>
            </Link>
            <Link to="/feb23" className="archive-navlink19">
              <img
                alt="image"
                src="https://gifcord.gg/direct/8f18d1b9-4b71-42ef-98c5-6f6126ab4b66-8033.gif"
                className="archive-image5"
              />
            </Link>
          </div>
          <div className="archive-feature-card6">
            <Link to="/mar23" className="archive-navlink20">
              <h2 className="archive-text16">
                <span>march</span>
                <span> 2023</span>
              </h2>
            </Link>
            <Link to="/mar23" className="archive-navlink21">
              <img
                alt="image"
                src="https://steamcdn-a.akamaihd.net/steam/apps/322500/extras/181002_GIF_SUPERHOT.jpg?t=1545385282"
                className="archive-image6"
              />
            </Link>
          </div>
          <div className="archive-feature-card7">
            <Link to="/apr23" className="archive-navlink22">
              <h2 className="archive-text19">
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
            <Link to="/apr23" className="archive-navlink23">
              <img
                alt="image"
                src="https://i.imgur.com/heF99Z3.png"
                className="archive-image7"
              />
            </Link>
          </div>
          <div className="archive-feature-card8">
            <Link to="/apr23" className="archive-navlink24">
              <h2 className="archive-text22">feb 2024</h2>
            </Link>
            <Link to="/apr23" className="archive-navlink25">
              <img
                alt="image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpickmysolar.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fanimat-wrench-color.gif&amp;f=1&amp;nofb=1&amp;ipt=ea5e0d81f73af0c54da8087e21b41325b9159529c251869fd62ea55ca2b2adbc&amp;ipo=images"
                className="archive-image8"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Archive
