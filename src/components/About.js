import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./About.css";

function About() {
  return (
    <>
    <section className='about-nav'>
      <Navbar />
      </section>
      <h1>About</h1>
      <Footer />
    </>
  )
}

export default About