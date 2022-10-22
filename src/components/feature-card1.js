import React from 'react'

import PropTypes from 'prop-types'

import './feature-card1.css'

const FeatureCard1 = (props) => {
  return (
    <div className={`feature-card1-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card1-text">{props.title}</h2>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card1-image"
      />
    </div>
  )
}

FeatureCard1.defaultProps = {
  title: 'October 2022',
  image_alt: 'image',
  rootClassName: '',
  image_src:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia0.giphy.com%2Fmedia%2F93j3soUou1gaHJpY4Q%2Fgiphy.gif&f=1&nofb=1&ipt=173566f1602377b769a18407e61c9b00c8b725e386e44a587712880a7138f749&ipo=images',
}

FeatureCard1.propTypes = {
  title: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard1
