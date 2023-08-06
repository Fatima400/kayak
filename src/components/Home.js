import React from "react";

import "./Home.css";
import Footer from "./Footer"
import Navbar from "./Navbar"
// read in database
import Trips from "../data/data.json";

function Home() {
  return (
    <div>
      <section id="home-hero" className="home-hero">
        <Navbar/>
        <h1 className="home-hero-text">
          <h3>Empowering Youth</h3>
          <h5>...one paddle at a time...</h5>
        </h1>
        <div className="home-hero-image"></div>
      </section>

      <section id="benefits">
        <h1>Benefits</h1>
      </section>

      <section id="about">
        <h1>About us</h1>
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

      <section id="contact">
        <h1>Contact form</h1>
      </section>

  <Footer/>
    </div>
  );
}

export default Home;