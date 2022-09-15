import React from 'react'
import './header.css'
import pattern from '../../assets/bg-pattern-intro-desktop.svg'

const Header = () => {
  return (
    <div className='blogr__header section__padding'>
      <div className='blogr__header-main'>
        <h1>A modern publishing platform</h1>
        <p>Grow you audience and build your online brand</p>

        <div className='button-container'>        
          <button type='button' className='blogr__header_button-free'>Star for free</button>
          <button type='button' className='blogr__header_button-learn'>Learn More</button>
        </div>
      </div>

    </div>
  )
}

export default Header