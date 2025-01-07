import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../Styles/testimonial.css"


const TestimonialCarousel = () => {
  return (
    <div className="container my-5">
        <h2 className="text-center mb-4 sec-heading ">What are our clients saying?</h2>
      <div className="row align-items-center">
        {/* Static Image on the Left */}
        <div className="col-lg-4 col-md-5 col-sm-12 mb-4 mb-md-0">
          <img
            src="https://corrheal.com/wp-content/uploads/2023/03/Untitled-design-33-1024x1024.png" // Replace with your actual image path
            alt="Testimonial Image"
            className="img-fluid rounded"
            style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Carousel for Testimonials */}
        <div className="col-lg-8 col-md-7 col-sm-12">
          <Carousel controls={true} indicators={false} interval={3000} fade>
            {/* Testimonial Item 1 */}
            <Carousel.Item>
              <div className="testimonial p-3 mb-5 shadow-sm rounded bg-light">
              <p className="text-center">
                  "I couldn't have asked for a better experience. The team went above and beyond to help me with every step of the process. I will definitely be recommending this service to everyone I know!"
                </p>
                <h5 className="text-center text-primary">Sarah Mitchell</h5>
                <div className="text-center">
                  {/* Golden stars */}
                  <span className="text-warning">★★★★★</span>
                </div>
              </div>
            </Carousel.Item>

            {/* Testimonial Item 2 */}
            <Carousel.Item>
              <div className="testimonial p-3 mb-5 shadow-sm rounded bg-light">
              <p className="text-center">
                  "Absolutely fantastic! From start to finish, everything was seamless. The customer support was prompt, friendly, and knowledgeable. I felt truly valued and appreciated. Definitely a 5-star experience!"
                </p>
                <h5 className="text-center text-primary">James Anderson</h5>
                <div className="text-center">
                  {/* Golden stars */}
                  <span className="text-warning">★★★★★</span>
                </div>
              </div>
            </Carousel.Item>

            {/* Testimonial Item 3 */}
            <Carousel.Item>
              <div className="testimonial p-3 mb-5 shadow-sm rounded bg-light">
              <p className="text-center">
                  "This is hands down the best service I've used. The team was extremely professional and attentive to all my needs. They made everything so easy and stress-free. I wouldn't hesitate to use them again."
                </p>
                <h5 className="text-center text-primary">Mark Thompson</h5>
                <div className="text-center">
                  {/* Golden stars */}
                  <span className="text-warning">★★★★★</span>
                </div>
              </div>
            </Carousel.Item>



            <Carousel.Item>
              <div className="testimonial p-3 mb-5 shadow-sm rounded bg-light">
              <p className="text-center">
                  "From the first consultation to the final result, I was blown away by the level of service. I can tell they genuinely care about their clients. If you’re looking for a reliable service, look no further!"
                </p>
                <h5 className="text-center text-primary">Emily Clark</h5>
                <div className="text-center">
                  {/* Golden stars */}
                  <span className="text-warning">★★★★★</span>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
