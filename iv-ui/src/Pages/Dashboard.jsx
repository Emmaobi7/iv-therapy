import React, { useState, useEffect } from 'react';
import { Table, Button, Form, InputGroup, FormControl, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [bookingCount, setBookingCount] = useState(0);
  const [selectedBooking, setSelectedBooking] = useState(null); // State to hold selected booking details for the modal
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  // Fetch bookings data
  const fetchBookings = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.get(`${apiUrl}/api/all-bookings`);
      const data = response.data.bookings;
      setBookings(data);
      setBookingCount(data.length); 
      setFilteredBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Filter bookings by status
  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
    const filtered = bookings.filter(
      (booking) =>
        (e.target.value === '' || booking.status === e.target.value) &&
        (dateFilter === '' || booking.date.includes(dateFilter))
    );
    setFilteredBookings(filtered);
  };

  // Filter bookings by date
  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
    const filtered = bookings.filter(
      (booking) =>
        (statusFilter === '' || booking.status === statusFilter) &&
        (e.target.value === '' || booking.date.includes(e.target.value))
    );
    setFilteredBookings(filtered);
  };

  // Fetch booking details when the "Details" button is clicked
  const handleShowDetails = async (id) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.get(`${apiUrl}/api/bookings/${id}`);
      setSelectedBooking(response.data.booking); // Set the selected booking details
      setShowModal(true); // Show the modal
    } catch (error) {
      console.error('Error fetching booking details:', error);
    }
  };

  // Close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBooking(null); // Clear selected booking details
  };





  const handleBookingStatusChange = async (id, newStatus) => {
    try {
      
      // Call API to update booking status
      const apiUrl = import.meta.env.VITE_API_URL;
      setStatusUpdating(true);
      await axios.put(`${apiUrl}/api/bookings/${id}/status`, {
        status: newStatus,  // Sending the new status in the request body
      });
  
      // Update UI locally
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === id ? { ...booking, status: newStatus } : booking
        )
      );
      setFilteredBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === id ? { ...booking, status: newStatus } : booking
        )
      );
      setStatusUpdating(false);
      alert("Status updated successfully")
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };
  




  const handleSearch = (e) => {
    e.preventDefault();
    
    if (phone.trim() === '') {
      console.log('Please enter a phone number to search.');
      return;
    }

    const foundBooking = bookings.filter((booking) => booking.phone.includes(phone));

    if (foundBooking.length > 0) {
      console.log('Booking found:', foundBooking);
      setFilteredBookings(foundBooking);
    } else {
      console.log('No bookings found for this phone number.');
      alert("no bookings found for this number")
      setFilteredBookings(bookings);
    }
  };




  return (
    <div className="container mt-5">
      <h2 className="text-center">Admin Dashboard</h2>

      
      {/* Booking Metrics */}
      <div className="mb-4">
        <h5>Total Bookings: {bookingCount}</h5>
        <Link to="/msg" className="text-decoration-none">
          <FaEnvelope size={24} />
        </Link>
        <Form onSubmit={handleSearch}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Phone</InputGroup.Text>
          <FormControl
            type="text"
            placeholder="Search by Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </InputGroup>

        <Button variant="" className="custom-button" type="submit">
          Search
        </Button>
      </Form>
      </div>

      {/* Filter Options */}
      <div className="d-flex justify-content-between mb-4">
        <div className="d-flex gap-2">
          <Form.Select
            aria-label="Status Filter"
            value={statusFilter}
            onChange={handleStatusFilterChange}
          >
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="Completed">Completed</option>
          </Form.Select>

          <InputGroup>
            <InputGroup.Text>Date</InputGroup.Text>
            <FormControl
              type="date"
              value={dateFilter}
              onChange={handleDateFilterChange}
            />
          </InputGroup>
        </div>
      </div>

      {/* Bookings Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5" className="text-center">Loading...</td>
            </tr>
          ) : (
            filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.phone}</td>
                <td>{new Date(booking.date).toLocaleDateString()}</td>
                <td>
                  <span
                    className={`badge ${booking.status === 'Completed' ? 'bg-success' : 'bg-warning'}`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => handleShowDetails(booking._id)}
                  >
                    View Details
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* Modal for Booking Details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBooking ? (
            <div>
              <h5>Name: {selectedBooking.name}</h5>
              <p>Phone: {selectedBooking.phone}</p>
              <p>Date: {new Date(selectedBooking.date).toLocaleDateString()}</p>
              <p>Status: {selectedBooking.status}</p>
              <p>Cart Items:</p>
              <ul>
                {selectedBooking.cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
              <p>Total Price: ${selectedBooking.totalPrice}</p>
            </div>
          ) : (
            <p>Loading details...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
        <Button
                    variant="primary"
                    onClick={() => handleBookingStatusChange(selectedBooking._id, 'Completed')}
                    //disabled={selectedBooking === 'Completed'}
                  >
                    {statusUpdating ? 'updating...' : "Mark as Completed"}
                  </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
