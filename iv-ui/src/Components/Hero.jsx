import React from 'react';
import '../Styles/HeroSection.css';  // Import a separate CSS file for styling
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>Rejuvenate Your Body and Mind</h1>
        <p>Experience revitalizing IV therapy tailored to your wellness needs.</p>
        {/* <a href="/book" className="cta-button custom-button">Book Your Session</a> */}
        <Link to="/book" className="text-decoration-none">
          <button className="cta-button  custom-button">Book Your Session</button>
        </Link>
      </div>
      <div className="hero-right">
        {/* <img src="https://www.khromdermatology.com/wp-content/uploads/2023/07/intravenous-therapy-wide-2.jpg" alt="IV Therapy" /> */}
      </div>
    </section>
  );
}

export default HeroSection;
