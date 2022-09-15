import React, { useState } from 'react'
import './nav.css'
import logo from '../../assets/logo.svg'
import Dropdown from '../../component/dropdown/Dropdown'
import lightDropDown from '../../assets/icon-arrow-light.svg'
import darkDropDown from '../../assets/icon-arrow-dark.svg'
import hambuger from '../../assets/icon-hamburger.svg'
import close from '../../assets/icon-close.svg'



const Nav = () => {
  const [dropOpen, setDropOpen] = useState(false)
  const [navMenu, setNavMenu] = useState(false)

  const dropClick = () => {
    setDropOpen(prevState => !prevState)
  }

  const navClick = () => {
    setNavMenu(prevState => !prevState)
  }

  return (
    <div className='blogr__nav'>
      <img src={logo}/>
      <ul className='blogr__nav-links'>
        <li><a href='#' className='navLinks'>Product</a></li>
        <li><a href='#' className='navLinks'>Company</a></li>

        <li><a href='#'  className='navLinks' onClick={dropClick}>Connect</a>
          <img src={lightDropDown} className='dropdown-icon'/>

        {dropOpen &&  (<ul className='blogr__nav-sublinks scale-up-ver-top'>
                        <Dropdown text= "Contact"/>
                        <Dropdown text= "Newletter"/>
                        <Dropdown text= "Linkedin"/>
                      </ul>
        )}
        </li>
      </ul>

      <div className='blogr__cta'>
        <p>Login</p>
        <button type='button'>Sign up</button>
      </div>

      <div className='blogr__nav-menu'>
        {navMenu? 
          <img src={close} onClick={navClick} className='close'/>:
          <img src={hambuger} onClick={navClick} className='hamburger'/>
          }
          
        {navMenu && (
          <div className='blogr__nav-menu_container scale-up-center'>
            <ul className='blogr__nav-menu-links'>
              <li><a href='#' className='navLinks1'>Product</a></li>
              <li><a href='#' className='navLinks1'>Company</a></li>
      
              <li><a href='#'  className='navLinks1' onClick={dropClick}>Connect</a>
                <img src={darkDropDown} className='dropdown-icon-dark'/>
      
              {dropOpen &&  (<ul className='blogr__nav-menu_sublinks scale-up-ver-top'>
                              <Dropdown text= "Contact"/>
                              <Dropdown text= "Newletter"/>
                              <Dropdown text= "Linkedin"/>
                            </ul>
              )}
              </li>
            </ul>
      
            <div className='blogr__cta1'>
              <p>Login</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav