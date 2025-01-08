import React from "react";
import { Button } from "react-bootstrap";
import { FaWhatsapp, FaCopy } from "react-icons/fa";

const WhatsAppSection = () => {
  const whatsappNumber = "++44 7921836576"; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber.replace("+", "")}`; // WhatsApp link generator

  const copyToClipboard = () => {
    navigator.clipboard.writeText(whatsappNumber);
    alert("WhatsApp number copied to clipboard!");
  };

  return (
    <section className="text-center py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <h2 className="text-success mb-4 ">Message Us on WhatsApp</h2>

        {/* WhatsApp Number */}
        <p className="mb-3">
          <strong>WhatsApp Number:</strong> {whatsappNumber}
        </p>

        {/* Buttons */}
        <div>
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
            <FaWhatsapp className="me-2" /> Open WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
