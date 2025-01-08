import React, { useState } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import WhatsAppSection from "./MessageUsWhatsaap";
import axios from "axios";

const MessageForm = () => {
  const [formData, setFormData] = useState({
    sender: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.post(`${apiUrl}/api/messages`, formData); // Replace with your API endpoint
      setSuccess(true);
      setFormData({ sender: "", email: "", message: "", phone: "" });
      alert("We have received your message, we will get back ASAP");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 sec-heading">Send a Message</h2>
      {success && <Alert variant="success">Message sent successfully!</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formSender" className="mb-3">
          <Form.Label>Sender Name</Form.Label>
          <Form.Control
            type="text"
            name="sender"
            placeholder="Enter your name"
            value={formData.sender}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formSender" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="" className="custom-button" type="submit" disabled={loading}>
          {loading ? <Spinner as="span" animation="border" size="sm" /> : "Message Us"}
        </Button>
      </Form>

      <div className="d-flex align-items-center my-4">
        <hr className="flex-grow-1" />
        <span className="mx-3 text-muted">or</span>
        <hr className="flex-grow-1" />
      </div>
      <WhatsAppSection />
    </div>
  );
};

export default MessageForm;
