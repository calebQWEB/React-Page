import React from 'react'
import './dropdown.css'

const Dropdown = (props) => {
  return (
    <li className='sublinks'><a href='#' className='sublinks-text'>{props.text}</a></li>
  )
}

export default Dropdown