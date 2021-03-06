import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navstyle">
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to ="/about"
                        className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                            About 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" 
                        className={window.location.pathname === "projects" ? "nav-link active" : "nav-link"}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact"
                        className={window.pathname === "contact" ? "nave-link active" : "nav-link"}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
