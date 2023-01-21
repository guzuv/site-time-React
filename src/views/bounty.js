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
        <h3 className="bounty-text BigCard-Heading">mc bounty!</h3>
        <span className="bounty-text01">
          <span className="bounty-text02">
            objective: get a diamond pickaxe (have exactly 58 dirt beside it).
          </span>
          <br></br>
          <span>
            reward:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="bounty-text05">30 Robux</span>
          <br></br>
          <span>
            expires in: 9/1/2023! (claimed by @959922152600113152
            &quot;luke&quot;)
          </span>
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
          <span className="bounty-text12">
            SEND THE WHOLE SCREEN, INCLUDING GUZUV.GITHUB.IO!
          </span>
          <br></br>
        </span>
      </div>
      <div className="bounty-card-content1">
        <h3 className="bounty-text14 BigCard-Heading">Bounty!</h3>
        <span className="bounty-text15">
          <span className="bounty-text16">
            objective: get 69 score in flappy bird!
          </span>
          <br></br>
          <span>reward: 25 Robux (not joking)</span>
          <br></br>
          <span>
            expires in: 9/1/2023! (claimed by @959922152600113152
            &quot;luke&quot;)
          </span>
          <br></br>
          <span>SEND PROOF WITH &quot;want a game?&quot; button!</span>
          <br></br>
          <a
            href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.9dZVX0M51h5mYVfjfDXh3AHaD1%26pid%3DApi&amp;f=1&amp;ipt=98df4859400b0c94967ebb3c678ebaad57caebb2790566fdd7cd0df70e6715e1&amp;ipo=images"
            target="_blank"
            rel="noreferrer noopener"
            className="bounty-link1"
          >
            how do i send proof?
          </a>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Bounty
