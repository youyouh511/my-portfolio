import { useState } from 'react'

import './App.css'

import Header from './components/header/Header'
import About from './sections/about/About'

function App() {
  console.log('App render'); //sanity check

  return (
    <div className='app'>
      <Header />
      <About />
    </div>
  )
}

export default App
