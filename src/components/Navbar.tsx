import React from 'react';
import {NavLink} from "react-router-dom";
export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper grey darken-3">
                <NavLink to="/" className="brand-logo">SukhrobDev</NavLink>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">List of deadlines</NavLink></li>
                    <li><NavLink to="/about">About us</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};
