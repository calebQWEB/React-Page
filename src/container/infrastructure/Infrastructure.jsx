import React from 'react'
import './infrastructure.css'
import Text from '../../component/texts/Text'
import infraCircle from '../../assets/bg-pattern-circles.svg'
import phones from '../../assets/illustration-phones.svg'

const Infrastructure = () => {
  return (
    <div className='blogr__infra section__padding' style={{backgroundImage: `url(${infraCircle})`,
                                                            backgroundSize: ' 50%, auto',
                                                            backgroundPosition: 'left',
                                                            backgroundRepeat: 'no-repeat',
                                                            height: 'fit-content',
                                                            backgroundColor: 'rgb(44, 45, 63)',
                                                            borderRadius: '0 70px 0 70px'}}>
      <div className='blogr__infra-container'>
          <div className='blogr__infra-images'>
            <img src={phones} className='phones' alt='phones'/>
          </div>
      </div>

      <div className='blogr__infra-text'>
          <h1>State of the Art Infrastruture</h1>
          <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no mather where your reaers are, keeping your competitive</p>
      </div>

    </div>
  )
}

export default Infrastructure