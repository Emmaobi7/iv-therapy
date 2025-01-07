import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className="container mt-5">
      {/* Section 1: Key Benefits */}
      <div className="row align-items-center mb-5 service">
        <div className="col-md-6">
          <h2 className="center-mobile">Why Choose IV Wellness?</h2>
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
        <Link to="/energy-booster">
          <div className="card h-100  s-card">
            <img
              src="https://infuselife.com/wp-content/uploads/2023/01/energy-boost.png"
              className="card-img-top"
              alt="Energy Boost"
            />
            <div className="card-body">
              <h5 className="card-title">Energy Booster IV Drip</h5>
              <p className="card-text">Recharge your body with our energy-boosting IV.</p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
        <Link to="/immune-booster">
          <div className="card h-100  s-card">
            <img
              src="https://infuselife.com/wp-content/uploads/2023/02/immune-boost.png"
              className="card-img-top"
              alt="Immunity Boost"
            />
            <div className="card-body">
              <h5 className="card-title">Immune Booster Drip</h5>
              <p className="card-text">Strengthen your immune system naturally.</p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
        <Link to="/skin-glow">
          <div className="card h-100  s-card">
            <img
              src="https://infuselife.com/wp-content/uploads/2023/02/beauty-glow.png"
              className="card-img-top"
              alt="Hydration Therapy"
            />
            <div className="card-body">
              <h5 className="card-title">(Beauty and Glow)Skin Glow</h5>
              <p className="card-text">Quick recovery for your mind and body.</p>
            </div>
          </div>
        </Link>
        </div>
      </div>



      <div className="row">
        <div className="col-md-4 mb-4">
        <Link to="/vitamin-c">
          <div className="card h-100 s-card">
            <img
              src="https://infuselife.com/wp-content/uploads/2023/02/beauty-glow.png"
              className="card-img-top"
              alt="Energy Boost"
            />
            <div className="card-body">
              <h5 className="card-title">(Beauty and Glow)Vitamin C</h5>
              <p className="card-text">Restore your natural radiance and promote overall skin health</p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
        <Link to="/anti-aging">
          <div className="card h-100 s-card">
            <img
              src="https://infuselife.com/wp-content/uploads/2023/02/beauty-glow.png"
              className="card-img-top"
              alt="Immunity Boost"
            />
            <div className="card-body">
              <h5 className="card-title">(Beauty and Glow)Anti-Aging</h5>
              <p className="card-text">Reduce wrinkles and restore a youthful glow</p>
            </div>
          </div>
        </Link>
        </div>
        <div className="col-md-4 mb-4">
        <Link to="/w-loss">
          <div className="card h-100 s-card">
            <img
              src="https://infuselife.com/wp-content/uploads/2023/10/weight-los.png"
              className="card-img-top"
              alt="Hydration Therapy"
            />
            <div className="card-body">
              <h5 className="card-title">Weight Loss</h5>
              <p className="card-text">Enhance your weight loss journey.</p>
            </div>
          </div>
        </Link>
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
