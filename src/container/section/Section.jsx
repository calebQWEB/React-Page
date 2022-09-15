import React from 'react'
import './section.css'
import Text from '../../component/texts/Text'
import laptop from '../../assets/illustration-laptop-desktop.svg'

const Section = () => {
  return (
    <div className='blogr__section'>

      <div className='blogr__section-image_container'>
        <img src={laptop} className='laptop'/>
      </div>

      <div className='blogr__section-text'>
          <Text header='Free, open, simple'
                text='Blogr is a free and open source appliction backed by a large community of helpful developers. it supports features such as code syntax highlightin, RSS feeds, social media integratio, thirs-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.'/>

          <Text header='Powerful tooling'
                text='Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.'/>
      </div>
    </div>
  )
}

export default Section