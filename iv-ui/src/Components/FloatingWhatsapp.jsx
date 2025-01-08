import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaWhatsapp, FaCopy } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const whatsappNumber = "+44 7921836576"; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber.replace("+", "")}`; // WhatsApp link generator

  const copyToClipboard = () => {
    navigator.clipboard.writeText(whatsappNumber);
    alert("WhatsApp number copied to clipboard!");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <Button
        variant="success"
        className="position-fixed rounded-circle"
        style={{ bottom: "20px", right: "20px", zIndex: 1000, padding: "10px 15px" }}
        onClick={handleShow}
        title="Contact us on WhatsApp"
      >
        <FaWhatsapp size={40} />
      </Button>

      {/* WhatsApp Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Contact Us on WhatsApp</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p className="mb-3">{whatsappNumber}</p>
          <Button
            variant="outline-secondary"
            className="me-2"
            onClick={copyToClipboard}
            title="Copy WhatsApp Number"
          >
            <FaCopy className="me-2" /> Copy Number
          </Button>
          <Button
            variant="success"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open WhatsApp
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FloatingWhatsApp;
