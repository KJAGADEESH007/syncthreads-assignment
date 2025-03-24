import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <img src="https://res.cloudinary.com/dbhg0qzls/image/upload/v1742790013/Screenshot_2025-03-23_091305_sszwfk.png" 
           alt="Logo" className="logo" />

      <nav className="nav-menu">
        <Link to="/login" className={`nav-item ${location.pathname === "/login" ? "active" : ""}`}>Login</Link>
        <Link to="/dashboard" className={`nav-item ${location.pathname === "/dashboard" ? "active" : ""}`}>Dashboard</Link>
        <Link to="/map" className={`nav-item ${location.pathname === "/map" ? "active" : ""}`}>Map</Link>
      </nav>
    </header>
  );
};

export default Header;
