import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Modal, Alert, Spinner } from "react-bootstrap";
import { jsPDF } from "jspdf";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const BookingPage = () => {
 
  const navigate = useNavigate();
  const [services] = useState([
    { id: 1, name: "IV Drip Therapy", category: "Health", price: 50 },
    { id: 2, name: "Vitamin C Boost", category: "Health", price: 50 },
    { id: 3, name: "Hydration Therapy", category: "Wellness", price: 50 },
    { id: 4, name: "Energy Booster", category: "Wellness", price: 50 },
    { id: 5, name: "Anti-Aging IV Drip", category: "Wellness", price: 50},
    { id: 6, name: "Weight Loss IV Drip", category: "Health", price: 50},
    { id: 7, name: "Immune IV Drip", category: "Health", price: 50},
  ]);

  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: "", phone: "+44", date: "" });
  const [bookingComplete, setBookingComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleAddToCart = (service) => {
    setCart((prevCart) => [...prevCart, service]);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const apiUrl = import.meta.env.VITE_API_URL;

    alert("By continuing, a copy of your confirmation slip will be automatically downloaded to you device")

    setLoading(true);
    setSubmissionError("");
    try {
      const response = await axios.post(`${apiUrl}/api/bookings`, {
        ...userDetails,
        cart,
        totalPrice: cart.reduce((total, item) => total + item.price, 0),
      });

      if (response.status === 201) {
        setBookingComplete(true);
        // setCart([]);
        // setUserDetails({ name: "", phone: "+44", date: "" });
        setShowModal(false);
        handleDownloadPDF();
        navigate("#confirm");
        // Scroll to the element with ID "confirm"
        const element = document.getElementById("confirm");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      
      }
    } catch (error) {
      console.log(error)
      setSubmissionError(
        error.response?.data?.message || "An error occurred during submission."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/Initial-IV-Therapy-Consent-Form.pdf'; // Path to the PDF in the public folder
    link.download = 'Adhorebeauty-IV-Therapy-Consent-Form.pdf'; // Name of the downloaded file
    link.click();
  };

  const filteredServices =
    filter === "All" ? services : services.filter((s) => s.category === filter);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="text-center sec-heading">Book Now</h1>
        </Col>
      </Row>

      <Row>
        <Col md={8} className="mb-4">
          <h2>Services</h2>
          <Form.Group controlId="filterCategory" className="mb-3">
            <Form.Label>Filter by Category</Form.Label>
            <Form.Select value={filter} onChange={handleFilterChange}>
              <option value="All">All</option>
              <option value="Health">Health</option>
              <option value="Wellness">Wellness</option>
            </Form.Select>
          </Form.Group>

          <Row>
            {filteredServices.map((service) => (
              <Col key={service.id} sm={12} md={6} lg={4} className="mb-3">
                <div className="p-3 border no-border rounded">
                  <h5>{service.name}</h5>
                  <p>Price: £{service.price}</p>
                  <Button
                    variant=""
                    className="custom-button"
                    onClick={() => handleAddToCart(service)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Col>

        <Col md={4}>
          <h2>Cart</h2>
          <div className="p-3 border no-border rounded">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="list-unstyled">
                {cart.map((item, index) => (
                  <li key={index} className="d-flex justify-content-between mb-2">
                    <span>{item.name}</span>
                    <span>£{item.price}</span>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemoveFromCart(index)}
                    >
                      Remove
                    </Button>
                  </li>
                ))}
              </ul>
            )}
            <h5>Total: £{totalPrice}</h5>
            <Button
              variant="success"
              className="mt-3"
              onClick={handleShowModal}
              disabled={cart.length === 0}
            >
              Continue
            </Button>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" />
              <p>Submitting your booking...</p>
            </div>
          ) : (
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={userDetails.date}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!loading && (
            <>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={!userDetails.name || !userDetails.phone || !userDetails.date}
              >
                Submit Booking
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>

      {submissionError && (
        <Alert variant="danger" className="mt-4">
          {submissionError}
        </Alert>
      )}

      {bookingComplete && (
        <div className="mt-4 p-3 border rounded text-center" id="confirm">
          <h3>Booking Successful!</h3>
          <p>Your booking has been successfully submitted.</p>
          <Button variant="primary" onClick={handleDownloadPDF}>
            Download Confirmation PDF
          </Button>
        </div>
      )}
    </Container>
  );
};

export default BookingPage;
