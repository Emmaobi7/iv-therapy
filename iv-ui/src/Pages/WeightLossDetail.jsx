import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const WeightLossDetail = () => {
  return (
    <Container className="py-5" style={{ maxWidth: "1200px" }}>
      <Row className="align-items-center">
        {/* Image Section */}
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src="https://www.drbnaples.com/wp-content/themes/yootheme/cache/97/DRB_Blogs_Q3_September_Weight-Loss-Through-Peptides-97d68548.jpeg"
            alt="Weight Loss/Skinny Iv therapy"
            className="img-fluid rounded"
          />
        </Col>

        {/* Details Section */}
        <Col md={6}>
          <h1 className="mb-3">Weight Loss IV Drip</h1>
          <p className="text-muted mb-4">Price: £99.99</p>
          <p>
          Achieve your weight loss goals with the Skinny IV Drip. This fast-acting, vitamin-packed infusion helps regulate sleep, mood, and appetite cycles while converting fat into energy. With benefits lasting up to a week, it’s the perfect companion for your fitness and wellness routine.

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
          The Skinny IV Drip is a powerful metabolism booster designed to enhance your weight loss journey. Packed with essential nutrients, this treatment promotes fat burning, energy production, and overall wellness.

          </p>
        </Col>
      </Row>



      <Row className="mt-5">
  <Col>
    <h3>Description</h3>
    <p>
      Raise your metabolism and get the weight loss results you want with the help of a Skinny IV Drip. 
      This vitamin injection stimulates your natural metabolism to help burn fat while regulating sleep, 
      mood, and appetite cycles. Fast to administer and with benefits that last up to a week, Skinny Drip 
      is the perfect addition to your weight loss and fitness regimen.
    </p>

    <h5>Composition:</h5>
    <ul>
      <li>Liponex-300 Thioctic Acid Tromethaminne 475.4mg/12ml 1v</li>
      <li>Cartinex L-Carnitine 1g/5ml 1v</li>
      <li>L-Arginex Larginine 10ml/5000mg 1v</li>
    </ul>

    <h5>Main Indication:</h5>
    <p>Rapid Metabolism Booster</p>

    <h5>Additional Benefits:</h5>
    <ul>
      <li>Rapidly converts fat into energy</li>
      <li>Formulated for weight loss and enhanced energy levels</li>
      <li>Stimulates metabolism</li>
      <li>Improves mood and balances hormone levels</li>
      <li>Boosts muscle recovery and prevents fatigue</li>
    </ul>

    <h5>Protocol:</h5>
    <p>
      Add 1 vial of Liponex 12ml, 1 vial of L-Arginex, and 1 vial of Cartinex to a 250ml NaCl 0.9% bag. 
      No need for dilution.
    </p>

    <h5>Duration of Infusion:</h5>
    <p>40 minutes</p>

    <h5>Be Aware:</h5>
    <p>
      Should be combined with a balanced diet and exercise. 
      Optional combination: Add Glutathione 600mg/1200mg as a separate IV push.
    </p>

    <h5>Treatment Plan:</h5>
    <ul>
      <li>1 IV drip per week for 12 weeks, then switch to a maintenance plan</li>
      <li>Maintenance Plan: 1 IV drip every 2 weeks ongoing</li>
    </ul>

    <h5>Storage:</h5>
    <p>Store in a cool, dry place (1-30°C). Protect from light.</p>

    <h5>Set Contains:</h5>
    <ul>
      <li>Liponex-300 Thioctic Acid Tromethaminne 475.4mg/12ml 1v</li>
      <li>Cartinex L-Carnitine 1g/5ml 1v</li>
      <li>L-Arginex Larginine 10ml/5000mg 1v</li>
      <li>NaCl 250ml bag</li>
      <li>IV infusion set - single chamber</li>
      <li>1x IV butterfly</li>
      <li>1x dressing</li>
      <li>1x drawing needle</li>
      <li>1x 10ml syringe</li>
      <li>1x tourniquet</li>
      <li>1x antiseptic wipe</li>
    </ul>
    <p>
      <strong>*Gloves to be purchased separately.</strong>
    </p>
    <p>
      <em>
        All pictures shown are for illustration purposes only. Actual products may 
        vary due to product enhancement.
      </em>
    </p>
  </Col>
</Row>

    </Container>
  );
};

export default WeightLossDetail;
