import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackButton from "../Components/BackButton"

const AgingDetail = () => {
  return (
    <Container className="py-5" style={{ maxWidth: "1200px" }}>
      <BackButton />
      <Row className="align-items-center">
        {/* Image Section */}
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src="https://bioinst.com/wp-content/uploads/2024/04/iv-therapy-anti-aging.jpg"
            alt="Beauty and Glow Anti-Aging IV drip"
            className="img-fluid rounded"
          />
        </Col>

        {/* Details Section */}
        <Col md={6}>
          <h1 className="mb-3">Skin Glowing Therapy</h1>
          <p className="text-muted mb-4">Price: £99.99</p>
          <p>
          Turn back the clock with the Anti-Aging IV Drip, a powerful blend of antioxidants, vitamins, and minerals designed to rejuvenate your skin and combat signs of aging. This treatment enhances skin elasticity, reduces wrinkles, and promotes a youthful, radiant complexion. By nourishing your body from within, it helps repair cellular damage and supports long-term skin vitality.

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
          The Anti-Aging IV Drip is a powerful blend of antioxidants, vitamins, and nutrients 
  designed to rejuvenate your skin, reduce wrinkles, and restore a youthful glow. 
  This treatment boosts collagen production, protects against free radical damage, 
  and enhances skin elasticity, leaving you feeling refreshed and radiant.
          </p>
        </Col>
      </Row>


      <Row className="mt-5">
  <Col>
    <h3>Description</h3>
    <p>
      The Anti-Aging IV Drip is specially formulated to combat the signs of aging 
      and rejuvenate your skin. Packed with a potent blend of antioxidants, vitamins, 
      and essential nutrients, this treatment targets fine lines, wrinkles, and loss 
      of elasticity while promoting a youthful glow and improving overall skin health.
    </p>

    <h5>Composition:</h5>
    <ul>
      <li>Glutathione 600mg</li>
      <li>Alpha-Lipoic Acid (Thiotic Acid) 300mg</li>
      <li>Vitamin C 1g</li>
      <li>Collagen Peptides 500mg</li>
    </ul>

    <h5>Main Indication:</h5>
    <p>Rejuvenates skin and slows aging processes.</p>

    <h5>Additional Benefits:</h5>
    <ul>
      <li>Reduces the appearance of fine lines and wrinkles.</li>
      <li>Boosts collagen production for firmer, more elastic skin.</li>
      <li>Protects against oxidative stress and free radical damage.</li>
      <li>Improves hydration and skin texture for a youthful appearance.</li>
      <li>Enhances cellular repair and detoxification.</li>
    </ul>

    <h5>Protocol:</h5>
    <p>
      Dilute the components with 0.9% NaCl solution. Add all ingredients to a 250ml 
      NaCl bag and administer through a single IV drip infusion.
    </p>

    <h5>Duration of Infusion:</h5>
    <p>40-50 minutes.</p>

    <h5>Treatment Plan:</h5>
    <ul>
      <li>1 IV drip per week for 10-12 weeks.</li>
      <li>Maintenance: 1 IV drip every 2-3 weeks.</li>
    </ul>

    <h5>Storage:</h5>
    <p>Store in a cool, dry place (1-30°C). Protect from light and heat.</p>

    <h5>Set Contains:</h5>
    <ul>
      <li>Glutathione 600mg</li>
      <li>Alpha-Lipoic Acid (Thiotic Acid) 300mg</li>
      <li>Vitamin C 1g</li>
      <li>Collagen Peptides 500mg</li>
      <li>NaCl 250ml bag</li>
      <li>IV infusion set - single chamber</li>
      <li>1x IV butterfly</li>
      <li>1x dressing</li>
      <li>1x drawing needle</li>
      <li>1x 10ml syringe</li>
      <li>1x tourniquet</li>
      <li>1x antiseptic wipe</li>
    </ul>
    <p><strong>*Gloves to be purchased separately.</strong></p>

    <p>
      <em>
        All pictures shown are for illustration purposes only. Actual products may 
        vary due to product enhancement.
      </em>
    </p>
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

export default AgingDetail;
