import React from 'react'

import { Helmet } from 'react-helmet'

import './bounty.css'

const Bounty = (props) => {
  return (
    <div className="bounty-container">
      <Helmet>
        <title>bounty - guzuv says hi!</title>
        <meta
          name="description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
        <meta property="og:title" content="bounty - guzuv says hi!" />
        <meta
          property="og:description"
          content="hey, we got games and fun here at guzuv.ml!"
        />
      </Helmet>
      <div className="bounty-card-content">
        <h3 className="bounty-text BigCard-Heading">Bounty!</h3>
        <span className="bounty-text01">
          <span className="bounty-text02">
            objective: get 69 score in flappy bird!
          </span>
          <br></br>
          <span>reward: 25 Robux (not joking)</span>
          <br></br>
          <span>expires in: never (for now)</span>
          <br></br>
          <span>SEND PROOF WITH &quot;want a game?&quot; button!</span>
          <br></br>
          <a
            href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.9dZVX0M51h5mYVfjfDXh3AHaD1%26pid%3DApi&amp;f=1&amp;ipt=98df4859400b0c94967ebb3c678ebaad57caebb2790566fdd7cd0df70e6715e1&amp;ipo=images"
            target="_blank"
            rel="noreferrer noopener"
            className="bounty-link"
          >
            how do i send proof?
          </a>
          <br></br>
        </span>
        <iframe
          src="https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/TAhlQLDa/index.html"
          className="bounty-iframe"
        ></iframe>
        <span className="bounty-text11">
          (once i&apos;m done i&apos;ll add this to the normal list don&apos;t
          worry lol)
        </span>
      </div>
    </div>
  )
}

export default Bounty
