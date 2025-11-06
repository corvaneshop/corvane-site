import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // 🔹 dosya adını kendi yüklediğinle eşleştir (örneğin corvane-logo.png)

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/">
                    <img src={logo} alt="Corvane Logo" className="nav-logo-img" />
                </Link>
            </div>

            <ul className="nav-links">
                <li>
                    <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/games" className={location.pathname === "/games" ? "active" : ""}>
                        Games
                    </Link>
                </li>
                <li>
                    <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
