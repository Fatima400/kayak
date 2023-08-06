import React from "react";

import "./Home.css";
import Footer from "./Footer"
import Navbar from "./Navbar"
// read in database
import Trips from "../data/data.json";
import ContactForm from './ContactForm';

function Home() {
  return (
    <div>
      <section id="home-hero" className="home-hero">
        <Navbar/>
        <h1 className="home-hero-text">
          <h3>Empowering Youth</h3>
          <h5>...one paddle at a time...</h5>
          <button>SEE  TOURS </button>
        </h1>
        <div className="home-hero-image"></div>
      </section>

      <section id="benefits">
        <h1> TRIPS BENEFITS</h1>
        <div className="benefits-cards">
          <div className="benefits-card">
           <h2>Friendship</h2>
           <p>Shared adventures foster lasting bonds and create unforgettable memories</p>
          </div>
          <div className="benefits-card" >
          <h2>Nature</h2>
          <p>An immersive outdoor experience that fosters a deep appreciation for the environment</p>

          </div>
          <div className="benefits-card"  >
          <h2>Life skills</h2>
          <p>Learn teamwork, communication, and resilience through hands-onkayaking challenges</p>

          </div>
          <div className="benefits-card"> 
          <h2>Confidence</h2>
          <p>Master kayaking to boost self-trust and readiness to tackle new challenges</p>

          </div>
        </div>
      </section>

      <section id="about">
        <div className="about-imag"></div>
        <div className="about-text"> 
        <h1>About us</h1>
      
        <p>loremdüpovjjjjjjeoijferiojvoiernvhjrvhjbrehjvbre</p>
        </div>
    
      </section>

      <section id="tours">
        <h1>Trips and upcoming trips</h1>

        {Trips &&
          Trips.map((trip) => {
            return (
              <div key={trip.id}>
                {/* images from URL */}
                <img src={trip.URL} alt="trip" />
                {/* text on overlay banner */}
                <div>
                  {trip.name} {trip.date}
                </div>
              </div>
            );
          })}
          
      </section>

      <section id="reviews">
        <h1>WHAT PARENTS SAY ABOUT OUR PROJECT</h1>
         <p>‘’As a parent, seeing my child's growth through PaddleXplorer has been an absolute joy. The unique blend of outdoor adventure and character development has boosted his confidence immensely. He made great friends and learned invaluable life skills - all while having a ton of fun on the water. I couldn't recommend PaddleXplorer more!’’</p>
          
      </section>



      <section id="contact">
        <h1 className="contact-h">Contact form</h1>
        <ContactForm />
     

      </section>

  <Footer/>
    </div>
  );
}

export default Home;