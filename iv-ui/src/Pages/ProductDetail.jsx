import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackButton from "../Components/BackButton"

const ProductDetail = () => {
  return (
    <Container className="py-5" style={{ maxWidth: "1200px" }}>
      <BackButton/>
      <Row className="align-items-center">
        {/* Image Section */}
        <Col md={6} className="mb-4 mb-md-0">
          <img
            src="https://glowskin.co.za/wp-content/uploads/2023/02/Glowskin-Skin-treatments.png"
            alt="Skin glow iv drip"
            className="img-fluid rounded"
          />
        </Col>

        {/* Details Section */}
        <Col md={6}>
          <h1 className="mb-3">Skin Glowing Therapy</h1>
          <p className="text-muted mb-4">Price: £50</p>
          <p>
            Experience the ultimate skin rejuvenation with our Skin Glowing
            Therapy. This treatment is designed to bring out your natural
            radiance, reduce imperfections, and leave your skin feeling
            refreshed and vibrant.
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
            Our Skin Glowing Therapy combines advanced techniques with
            top-quality ingredients to deliver unparalleled results. Suitable
            for all skin types, this therapy targets dullness, uneven texture,
            and dryness to leave you glowing like never before.
          </p>
        </Col>
      </Row>



    <Row className="mt-5">
        <Col>
            <h3>Description</h3>
            <p>
            Considered the number one choice of spas and skin clinics worldwide, Snow
            White Skin Whitening is the highest quality, high-dose Glutathione skin
            whitening formula available today, with the addition of Tranexamic Acid
            (Melanin reducing agent) 250mg every two weeks.
            </p>

            <h5>Composition:</h5>
            <ul>
            <li>Glutathione 600mg</li>
            <li>Thiotic Acid Liponex 300mg /12ml</li>
            <li>Asconex Vitamin C 10g / 20ml</li>
            </ul>

            <h5>Main Indication:</h5>
            <p>Suppresses Melanin. Skin Lightening.</p>

            <h5>Additional Benefits:</h5>
            <ul>
            <li>The most powerful whitening antioxidant IV drip.</li>
            <li>Powerful anti-aging for skin and internal health.</li>
            <li>Improves liver functions, lowers inflammation, and boosts energy.</li>
            <li>Restores collagen and balances the body.</li>
            </ul>

            {/* <h5>Protocol:</h5>
            <p>
            Dilute Glutathione 600mg with 10ml NaCl 0.9%. Add Glutathione, Vit C
            10g/20ml, and Thiotic Acid 300mg/12ml to a 250ml NaCl 0.9% bag and
            administer.
            </p> */}

            <h5>Duration of Infusion:</h5>
            <p>40 minutes.</p>

            <h5>Be Aware:</h5>
            <p>
            Addition of Tranexamic Acid 250mg should not be administered more often
            than every fortnight.
            </p>

            <h5>Maintainance Plan:</h5>
        <ul>
            <li>We advise every 2-3 weeks</li>
            {/* <li>Maintenance plan: 1 IV drip every 2 weeks ongoing.</li> */}
        </ul>

            {/* <h5>Storage:</h5>
            <p>Store in a cool, dry place (1-30°C). Protect from light.</p> */}

            <h5>Volume:</h5>
            <p>250ml 0.9% NaCl bag.</p>

            {/* <h5>Set Contains:</h5>
            <ul>
            <li>Glutathione 600mg</li>
            <li>Thiotic Acid Liponex 300mg /12ml</li>
            <li>Asconex Vitamin C 10g / 20ml</li>
            <li>NaCl 10ml</li>
            <li>Nacl 250ml bag</li>
            <li>IV infusion set - single chamber</li>
            <li>1x IV butterfly</li>
            <li>1x dressing</li>
            <li>1x drawing needle</li>
            <li>1x 10ml syringe</li>
            <li>1x tourniquet</li>
            <li>1x antiseptic wipe</li>
            </ul> */}
            {/* <p><strong>*Gloves to be purchased separately.</strong></p>

            <p>
            <em>
                All pictures shown are for illustration purposes only. Actual products
                may vary due to product enhancement.
            </em>
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

export default ProductDetail;
