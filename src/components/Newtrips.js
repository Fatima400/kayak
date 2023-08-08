import React from 'react';
import './newtrips.css'; // Import your CSS file

const TripsComponent = () => {
  const Trips = [
    // Your updated Trips data here
  ];

  const scrollToNextCard = () => {
    const scrollContainer = document.getElementById('tours');
    scrollContainer.scrollLeft += scrollContainer.clientWidth;
  };

  const scrollToPrevCard = () => {
    const scrollContainer = document.getElementById('tours');
    scrollContainer.scrollLeft -= scrollContainer.clientWidth;
  };

  return (
    <section>
      <h1 className="tours-title">NEW TRIPS ARE COMING</h1>
      <div className="scrollable-container">
        <div id="tours" className="cards-container">
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
        <div className="scroll-buttons">
          <button onClick={scrollToPrevCard}>Previous</button>
          <button onClick={scrollToNextCard}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default TripsComponent;
