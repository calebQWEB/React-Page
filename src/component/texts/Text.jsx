import React from 'react'
import './text.css'

const Text = (props) => {
  return (
    <div  className='blogr__text'>
      <h1>{props.header}</h1>
      <p>{props.text}</p>
    </div>
  )
}

export default Text