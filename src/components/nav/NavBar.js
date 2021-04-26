import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/paints">Paints</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/bases">Vinyl Bases</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/carpets">Carpets</Link>
            </li>
        </ul>
    )
}