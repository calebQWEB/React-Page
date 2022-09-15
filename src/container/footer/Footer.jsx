import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='blogr__footer section__padding'>
        <div className='blogr__footer-container'>

          <div className='footer-image'>
            <img src={logo} alt='logo'/>
          </div>


          <div className='blogr__footer-text'>
              <h4>Product</h4>
              <ul>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Marketplace</li>
                <li>Features</li>
                <li>Intergrations</li>
              </ul>
          </div>
          
          <div className='blogr__footer-text'>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className='blogr__footer-text'>
              <h4>Connect</h4>
              <ul>
                <li>Contact</li>
                <li>Newsletter</li>
                <li>LinkedIn</li>
              </ul>
          </div>
          
        </div>
    </div>
  )
}

export default Footer