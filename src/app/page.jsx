import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Goals from './components/Goals'
import Contact from './components/Contact'

const page = () => {
  return (
    <section className='w-full h-auto relative'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Goals />
      <Contact />
    </section>
  )
}

export default page