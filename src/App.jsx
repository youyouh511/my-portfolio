import { useState } from 'react'

import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import About from './sections/about/About'
import Education from './sections/education/Education'
import Projects from './sections/projects/Projects'
import Work from './sections/work/Work'
import Publications from './sections/publications/Publications'

function App() {
  console.log('App render'); //sanity check

  return (
    <div className='app'>
      <Header />
      <main>
        <About />
        <hr className='divider'/>
        <Education />
        <hr className='divider'/>
        <Projects />
        <hr className='divider'/>
        <Work />
        <hr className='divider'/>
        <Publications />
      </main>
      <Footer />
      
    </div>
  )
}

export default App
