import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackButton from "../Components/BackButton"

const EnergyBoostDetail = () => {
  return (
    <Container className="py-5" style={{ maxWidth: "1200px" }}>
      <BackButton />
      <Row className="align-items-center">
        {/* Image Section */}
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src="https://www.stadiamedspa.com/wp-content/uploads/2023/11/ivinfusion-stadia-med-spa-san-antonio.jpg"
            alt="Energy boost iv therapy"
            className="img-fluid rounded"
          />
        </Col>

        {/* Details Section */}
        <Col md={6}>
          <h1 className="mb-3">Energy Booster IV Drip</h1>
          <p className="text-muted mb-4">Price: £50</p>
          <p>
          Recharge your energy and combat fatigue with the Energy Booster IV Therapy. Packed with B vitamins, magnesium, and L-Carnitine, it revitalizes your body, enhances focus, and restores vitality.

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
          The Energy Booster IV Therapy is designed to recharge your body, enhance energy levels, and combat fatigue. Infused with a powerful blend of B vitamins, magnesium, and L-Carnitine, this therapy supports optimal energy metabolism, promotes mental clarity, and revitalizes both body and mind. Perfect for those with demanding schedules or anyone needing an energy reset, this treatment restores vitality and ensures you feel your best.

          </p>
        </Col>
      </Row>


      <Row className="mt-5">
        <Col>
        <h3>ENERGY</h3>
        <p>
            Contains a blend of our signature hydration drip and vitamins B, Magnesium, and L-Carnitine, 
            which helps maintain normal energy-yielding metabolism and helps reduce tiredness and fatigue.
        </p>

        <h5>Composition:</h5>
        <ul>
            <li>B12 2ml</li>
            <li>Vitamin B Complex 2ml</li>
            <li>Thiamine hydrochloride 10 mg</li>
            <li>Riboflavin sodium phosphate 5.53 mg</li>
            <li>Nicotinamide 40 mg</li>
            <li>Dexpanthenol 6 mg</li>
            <li>Pyridoxine hydrochloride 4 mg</li>
            <li>Biotin 500 μg</li>
            <li>Cyanocobalamin 8 μg</li>
            <li>Magnesium Sulfate Hydrate 500mg/5mL</li>
            <li>L-Carnitine 1g/5ml</li>
        </ul>

        <h5>Main Indication:</h5>
        <p>
            B vitamins are essential for the body’s ability to convert energy from nutrients and also aid 
            the body in the effective use of energy. This drip includes a high dose of these valuable vitamins.
        </p>

        <h5>Additional Benefits:</h5>
        <ul>
            <li>Includes magnesium to break down glucose into energy.</li>
            <li>Addresses fatigue, anxiety, and irritability caused by magnesium deficiency.</li>
            <li>L-Carnitine rapidly converts fat into energy.</li>
        </ul>

        {/* <h5>Protocol:</h5>
        <p>
            Add B12, Vitamin B Complex, Magnesium, and L-Carnitine to a 250ml NaCl 0.9% bag.
        </p> */}

        <h5>Duration of Infusion:</h5>
        <p>30-40 minutes.</p>

        <h5>Be Aware:</h5>
        <p>Administering this in the evening might cause sleeping problems.</p>

        <h5>Combination Treatments/Add-ons:</h5>
        <p>Vitamin C 10g/20ml.</p>

        <h5>Maintainance Plan:</h5>
        <ul>
            <li>We advise every 2-3 weeks</li>
            {/* <li>Maintenance plan: 1 IV drip every 2 weeks ongoing.</li> */}
        </ul>

        {/* <h5>Storage:</h5>
        <p>Store in a cool, dry place (1-30°C). Protect from light.</p> */}

        <h5>Volume:</h5>
        <p>250ml NaCl 0.9% bag.</p>

        {/* <h5>Set Contains:</h5>
        <ul>
            <li>B12 2ml</li>
            <li>Vitamin B Complex 2ml</li>
            <li>Magnesium Sulfate Hydrate 500mg/5mL</li>
            <li>L-Carnitine 1g/5ml</li>
            <li>NaCl 0.9% 250ml bag</li>
            <li>1x IV infusion set (single chamber)</li>
            <li>1x IV butterfly</li>
            <li>1x dressing</li>
            <li>1x drawing needle</li>
            <li>1x 10ml syringe</li>
            <li>1x tourniquet</li>
            <li>1x antiseptic wipe</li>
        </ul> */}

        {/* <p>
            <em>All pictures shown are for illustration purposes only. Actual products may vary due to product enhancement.</em>
        </p> */}
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

export default EnergyBoostDetail;
