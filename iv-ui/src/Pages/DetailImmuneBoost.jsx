import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackButton from "../Components/BackButton"

const ImmuneBoostDetail = () => {
  return (
    <Container className="py-5" style={{ maxWidth: "1200px" }}>
      <BackButton />
      <Row className="align-items-center">
        {/* Image Section */}
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src="https://skin111.com/uploads/image/1669040693file_3684_283_2533.jpeg"
            alt="immune boost iv therapy"
            className="img-fluid rounded"
          />
        </Col>

        {/* Details Section */}
        <Col md={6}>
          <h1 className="mb-3">Immune Booster Drip</h1>
          <p className="text-muted mb-4">Price: £50</p>
          <p>
          Recharge your body with this Myers cocktail-based IV therapy, packed with
      essential vitamins and minerals. It boosts energy levels, enhances immune
      function, and improves focus, leaving you feeling refreshed and revitalized.
          </p>
          <Link to="/book" className="text-decoration-none">
         
            <Button
                className="btn btn-lg custom-button"
            >
            Book Now
          </Button>
          </Link>
        </Col>
      </Row>

      {/* Description Section */}
      <Row className="mt-5">
        <Col>
          <h3>About This Therapy</h3>
          <p>
          This IV therapy blends vitamin C, B vitamins, and key minerals to
      improve overall wellness. Perfect for boosting energy, reducing fatigue,
      and supporting the immune system.
          </p>
        </Col>
      </Row>


      <Row className="mt-5">
  <Col>
    <h3>Description</h3>
    <p>
    This is a cocktail designed to replenish the essential minerals and vitamins in your body.

This drip is formulated based on the well known Myers cocktail, as it contains specific quantities of especially chosen ingredients that work synergistically to recharge your body. The combination of vitamin C, Bs and minerals is known to improve your immune system function and stimulate the energy centres of each and every cell in your body. Furthermore, the correct doses of each ingredient is chosen carefully to ensure the most potent effect of the infusion. It can boost your energy levels and keep you alert, thus leaving you feeling productive and recharged.

    </p>

    <h5>Benefits:</h5>
    <ul>
      <li>Boosts energy and physical performance.</li>
      <li>Enhances immune system function.</li>
      <li>Reduces tension and supports cognition.</li>
      <li>Aids tissue repair and pain relief.</li>
    </ul>

    <h5>Ingredients:</h5>
    <ul>
      <li>L-ascorbic acid</li>
      <li>Magnesium chloride</li>
      <li>Calcium chloride</li>
      <li>Thiamine (B1)</li>
      <li>Riboflavin (B2)</li>
      <li>Nicotinamide (B3)</li>
      <li>D-Panthenol (B5)</li>
      <li>Pyridoxine (B6)</li>
      <li>Folic acid (B9)</li>
      <li>Hydroxocobalamin (B12)</li>
    </ul>

    <h5>Administration:</h5>
    <p>
      Subject to consultation. Administered intravenously, diluted in 0.9% NaCl
      solution. Please ensure adequate hydration for a smooth procedure.
    </p>
    <p>
      <strong>Duration of procedure:</strong> 30-45 minutes.
      
    </p>
    <p><strong>Best for improving overall energy, cellular level and improve in physical performance</strong></p>
  </Col>
</Row>

<Link to="/book" className="text-decoration-none">
         
            <Button
                className="btn btn-lg custom-button"
            >
            Book Now
          </Button>
          </Link>



    </Container>
  );
};

export default ImmuneBoostDetail;
