import { useState } from 'react'
import './App.css'
import pattern from './assets/bg-pattern-intro-desktop.svg'

import {Footer, Future, Header, Infrasctructure, Nav, Section} from './container'
function App() {

  return (
    <div className="App">
        <div className='header-background'  style={{backgroundImage: `url(${pattern})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat',
                                                    height: 'fit-content',
                                                    backgroundColor: 'hsl(353, 100%, 62%)',
                                                    borderRadius: '0 0 0 70px'}}>
          <Nav />
          <Header />
        </div>

        <Future />
        <Infrasctructure />
        <Section />
        <Footer />
    </div>
  )
}

export default App
