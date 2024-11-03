import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const shouldShowNavbarAndFooter = location.pathname !== '/jobs';

  return (
    <div className="text-white bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen">
      {shouldShowNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      {shouldShowNavbarAndFooter && <Footer />}
    </div>
  );
}

export default App;
