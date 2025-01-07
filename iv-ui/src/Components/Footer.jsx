import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer pt-4">
      <div className="container">
        <div className="row">
          {/* Branding and Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Adhore Beauty</h5>
            <p>
              Chase Way, Grays, UK<br />
              Phone: +44 7921836576<br />
              
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/book" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/book" className="text-light text-decoration-none">Book now</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <div>
              <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
              {/* <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a> */}
              <a href="https://www.instagram.com/adhorebeauty" target="blank" className="text-light me-3"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center py-3">
          <p className="m-0">&copy; 2025 Adhore Beauty. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
