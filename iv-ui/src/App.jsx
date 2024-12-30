import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home'
import Contact from './Components/Contact';
import Book from './Pages/Booking';
import SuccessPage from "./Components/Success";
import Login from './Pages/Login';
import AdminDashboard from './Pages/Dashboard';
import MessageList from './Pages/Msg';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Firebase authentication listener using onAuthStateChanged
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update state when user logs in or out
    });

    return () => unsubscribe(); // Clean up the listener on component unmount
  }, []);

  return (
    <Router>
      <Header />
      {/* Routes to different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/book" element={<Book />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/admin" element={<Login />} />
        {/* Protected Route for Admin */}
        <Route 
        path="/msg" 
        element={user ? <MessageList /> : <Navigate to="/admin" />} 
        />
        {/* Protected Route for Admin Dashboard */}
        <Route
          path="/dashboard"
          element={user ? <AdminDashboard /> : <Navigate to="/admin" />}
        />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
