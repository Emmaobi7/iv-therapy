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
import ProductDetail from './Pages/ProductDetail';
import EnergyBoostDetail from './Pages/DetailEnergyBooster';
import ImmuneBoostDetail from './Pages/DetailImmuneBoost';
import WeightLossDetail from './Pages/WeightLossDetail';
import AgingDetail from './Pages/Detail-Aging';
import  VitamincDetail from './Pages/Detail-Vitaminc';

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
        <Route path="/skin-glow" element={<ProductDetail/>} />
        <Route path="/energy-booster" element={<EnergyBoostDetail/>} />
        <Route path="/immune-booster" element={<ImmuneBoostDetail/>} />
        <Route path="/w-loss" element={<WeightLossDetail/>}/>
        <Route path="/anti-aging" element={<AgingDetail/>} />
        <Route path="/vitamin-c" element={<VitamincDetail/>} />
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
