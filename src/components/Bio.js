import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './fcc-logo.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render () {
    const { author, description } = this.props

    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5)
        }}
      >
        <img
          src={profilePic}
          alt={`FCC Manila`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2)
          }}
        />
        <div>
          <p style={{ marginBottom: 0 }}>
            <strong>{author}</strong>
          </p>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default Bio
