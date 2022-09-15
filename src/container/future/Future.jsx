import React from 'react'
import './future.css'
import Text from '../../component/texts/Text'
import circle from '../../assets/illustration-editor-desktop.svg'


const Future = () => {
  return (
    <div className='blogr__future section__padding'>

      <h1>Designed for the future</h1>

      <div className='blogr__future-flex-container'>
        <div className='blogr__future-text-Container'>
          <Text header= 'Introducing an extensible editor'
                text='Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown.Extensibility with plugins and themes provide easy ways to add functionslity or change the looks of a blog.'/>

          <Text header='Robust content management'
                text='Flexible content management enables usets to easily move through posts.Increase the usability of you blog by adding customized categories, sections, format, or flow. With this functionality, you"re in full control'/>
        </div>

          <img src={circle} className='blogr__future-image' alt='circle-pattern'/>
      </div>
    </div>
  )
}

export default Future