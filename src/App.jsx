import { useState } from 'react'

import './App.css'

import Header from './components/header/Header'
import About from './sections/about/About'
import Work from './sections/work/Work'
import Education from './sections/education/Education'

function App() {
  console.log('App render'); //sanity check

  return (
    <div className='app'>
      <Header />
      <main>
        <About />
        <Work />
        <Education />
      </main>
      
    </div>
  )
}

export default App
