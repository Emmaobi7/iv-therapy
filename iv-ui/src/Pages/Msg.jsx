import React, { useState, useEffect } from "react";
import { Modal, Button, ListGroup, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch messages on component mount
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL; // Ensure this environment variable is set
        const response = await axios.get(`${apiUrl}/api/msg`);
        setMessages(response.data.msg); // Adjust according to API response structure
      } catch (err) {
        console.error("Error fetching messages:", err);
        setError("Failed to fetch messages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // Handle opening the modal
  const handleOpenModal = (message) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setSelectedMessage(null);
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <h2>Messages</h2>
      <Link to="/dashboard" className="text-decoration-none">
        <Button className="custom-button mb-2 mt-2">Back to dashboard</Button>
      </Link>
      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && (
        <ListGroup>
          {messages.map((message) => (
            <ListGroup.Item
              key={message.id}
              action
              onClick={() => handleOpenModal(message)}
            >
              <strong>{message.sender}</strong> - {message.email}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      {/* Message Details Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Message Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMessage && (
            <>
              <p>
                <strong>Sender:</strong> {selectedMessage.sender}
              </p>
              <p>
                <strong>Phone:</strong> {selectedMessage.phone}
              </p>
              <p>
                <strong>Email:</strong> {selectedMessage.email}
              </p>
              <p>
                <strong>Message:</strong> {selectedMessage.message}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MessageList;
