import React from "react";
import "./Home.css";
import Footer from "./Footer"
import Navbar from "./Navbar"

import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';



import Trips from '../data/data.json'

function Home() {


  return (
    <div>
      <section id="home-hero" className="home-hero">
        <Navbar />
        <h1 className="home-hero-text">
          <h3>Empowering Youth</h3>
          <h5>...one paddle at a time...</h5>
          <Link  to="/Tours" className="tours-link">SEE TOURS</Link>
          {/* <button>SEE  TOURS </button> */}
        </h1>
        <div className="home-hero-image"></div>
      </section>

      <section >
        <h1 className="mission-titel">OUR MISSION</h1>

        <div id="mission">
          <div className="mission-imag"></div>

          <div className="mission-text">


            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
              sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
              Vestibulum lacinia arcu eget nulla.
            </p>
            <div> <Link to="/About" className="mission-link">READ MORE</Link></div>

          </div>



        </div>

      </section>
      <section id="benefits">
        <h1> TRIPS BENEFITS</h1>
        <div className="benefits-cards">
          <div className="benefits-card">
            <div className="benefits-imag"></div>
            <h2>Friendship</h2>
            <p>Shared adventures foster lasting bonds and create unforgettable memories</p>
          </div>
          <div className="benefits-card" >
            <div className="benefits-imag"></div>
            <h2>Nature</h2>
            <p>An immersive outdoor experience that fosters a deep appreciation for the environment</p>

          </div>
          <div className="benefits-card"  >
            <div className="benefits-imag"></div>
            <h2>Life skills</h2>
            <p>Learn teamwork, communication, and resilience through hands-onkayaking challenges</p>

          </div>
          <div className="benefits-card">
            <div className="benefits-imag"></div>
            <h2>Confidence</h2>
            <p>Master kayaking to boost self-trust and readiness to tackle new challenges</p>

          </div>
        </div>
      </section>

      
      <section >
        <h1 className="tours-titel">NEW TRIPS ARE COMING</h1>
      <div id="tours">
        {Trips &&
          Trips.map((trip) => {
            return (
              
              <div className="trip-card" key={trip.id}>
                {/* images from URL */}
                <img className="trip-img" src={trip.URL} alt="trip" />
                {/* text on overlay banner */}
                <div>
                  {trip.name} {trip.date}
                </div>
              </div>
            );
          })}
      </div>
      </section>
  


      <section id="reviews">
        <h1 className="reviews-titel">WHAT PARENTS SAY ABOUT OUR PROJECT</h1>
        <p className="reviews-text">‘’As a parent, seeing my child's growth through PaddleXplorer has been an absolute joy. The unique blend of outdoor adventure and character development has boosted his confidence immensely. He made great friends and learned invaluable life skills - all while having a ton of fun on the water. I couldn't recommend PaddleXplorer more!’’</p>

      </section>



      <section id="contact">
        <h1 className="contact-h">CONTACT US</h1>
        <p className="contact-p">Ready to embark on an unforgettable adventure? Contact us today to book <br /> your child's spot on our next kayaking journey.   </p>
        <ContactForm />

      </section>

      <Footer />
    </div>
  );
}

export default Home;