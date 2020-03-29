import React from "React";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return () {
        <nav className="navbar navbar-expand-lg navebar-light bg-light">
            <Link className="navbar-brand" to="/"> 
            Bethan James
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to ="/"
                        className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                            About 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" 
                        className={window.location.pathname === "/" || window.location.pathname === "projects" ? "nav-link active" : "nav-link"}
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    }
}
