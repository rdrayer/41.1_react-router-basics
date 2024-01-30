import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink to="/snack1">Snack1</NavLink>
            <NavLink to="/snack2">Snack2</NavLink>
            <NavLink to="/snack3">Snack3</NavLink>
        </nav>
        
    );
}

export default NavBar;