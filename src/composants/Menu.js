import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Menu.css';
import logo from '../assets/PizzaLogo.png';

function Menu() {
    return (
        <nav>
            <img src={logo} alt="Logo" className="logo" style={{ height: '40px' }} />

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/order">order</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;
