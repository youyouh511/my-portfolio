import { useState } from 'react'

import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import About from './sections/about/About'
import Work from './sections/work/Work'
import Education from './sections/education/Education'
import Projects from './sections/projects/Projects'

function App() {
  console.log('App render'); //sanity check

  return (
    <div className='app'>
      <Header />
      <main>
        <About />
        <Education />
        <Projects />
        <Work />
      </main>
      <Footer />
      
    </div>
  )
}

export default App
