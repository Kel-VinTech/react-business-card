import React from "react";
import Logo from "../logo512.png"


const Navbar = () => {
    return (
        <header className="nav_bar row">
            <nav className="nav">
                <img className="logo"  src={Logo} alt="Logo" />
                <h1>ReactFacts</h1>
            </nav>
            <h2>React Course</h2>
            
        </header>
    )
}

export default Navbar;