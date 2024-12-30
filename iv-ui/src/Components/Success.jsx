import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SuccessPage = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1>Booking Successful!</h1>
          <p>Thank you for booking with us. A confirmation message has been sent to your phone.</p>
          <p>Next steps:</p>
          <ul>
            <li>Prepare for your appointment on the selected date.</li>
            <li>Bring your confirmation details.</li>
            <li>Contact us if you need to reschedule.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessPage;
