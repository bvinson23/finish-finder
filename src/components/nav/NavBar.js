import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaBars } from "react-icons/fa";
import { useDetectOutsideClick } from "../../modules/Helpers"

export const NavBar = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return (
        <div className="menu-container">
            <div className="logo">
                <img src={"FinishFinderLogoSmall.png"} alt="Finish Finder"></img>
            </div>
            <button onClick={onClick} className="menu-trigger">
                <span><FaBars /></span>
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
                <ul>
                    <li><Link className="navbar__link" to="/">Home</Link></li>
                </ul>
                <ul>
                    <li><Link className="navbar__link" to="/paints">Paints</Link></li>
                </ul>
                <ul>
                    <li><Link className="navbar__link" to="/bases">Vinyl Bases</Link></li>
                </ul>
                <ul>
                    <li><Link className="navbar__link" to="/carpets">Carpets</Link></li>
                </ul>
                <ul>
                    <li><Link className="navbar__link" to="/login">Logout</Link></li>
                </ul>
            </nav>
        </div>
    )
}