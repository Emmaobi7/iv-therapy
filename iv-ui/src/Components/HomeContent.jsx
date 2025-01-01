import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className="container mt-5">
      {/* Section 1: Key Benefits */}
      <div className="row align-items-center mb-5 service">
        <div className="col-md-6">
          <h2>Why Choose IV Wellness?</h2>
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle-fill text-primary"></i> Boost your energy levels in just one session.</li>
            <li><i className="bi bi-check-circle-fill text-primary"></i> Professional and personalized IV treatments.</li>
            <li><i className="bi bi-check-circle-fill text-primary"></i> Convenient and relaxing environment.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img
            src="https://carolinamedassoc.com/wp-content/uploads/2023/02/iv-drip-vitamin-infusion-therapy-iv-drip-vitamin-infusion-therapy-saline-bag-211493332.jpg"
            alt="Relaxing Environment"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Section 2: Services Overview */}
      <div className="text-center mb-5">
        <h2 className="sec-heading ">Our Services</h2>
        <p>Explore our range of IV therapy treatments tailored to your needs.</p>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm s-card">
            <img
              src="https://infuselife.com/wp-content/uploads/2023/01/energy-boost.png"
              className="card-img-top"
              alt="Energy Boost"
            />
            <div className="card-body">
              <h5 className="card-title">Energy Boost IV</h5>
              <p className="card-text">Recharge your body with our energy-boosting IV.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm s-card">
            <img
              src="https://infuselife.com/wp-content/uploads/2023/02/immune-boost.png"
              className="card-img-top"
              alt="Immunity Boost"
            />
            <div className="card-body">
              <h5 className="card-title">Immunity Boost IV</h5>
              <p className="card-text">Strengthen your immune system naturally.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm s-card">
            <img
              src="https://infuselife.com/wp-content/uploads/2023/02/beauty-glow.png"
              className="card-img-top"
              alt="Hydration Therapy"
            />
            <div className="card-body">
              <h5 className="card-title">Hydration Therapy</h5>
              <p className="card-text">Quick recovery for your mind and body.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Call-to-Action */}
      <div className="text-center mt-5">
        <h2>Ready to Rejuvenate?</h2>
        <p>No waiting—choose your slot today and feel better instantly!</p>
        
        <Link to="/book" className="text-decoration-none">
          <button className="btn btn-lg custom-button">Book Your Session Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
