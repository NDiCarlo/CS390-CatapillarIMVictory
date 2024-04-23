// Navigation.js

import React from 'react';
import CartDropdown from './CartDropdown.js';
import { Link } from 'react-router-dom';
import logo from './CATLogo.png'; 

function Navigation({ cartItemCount }) {
    return (
        <nav className="navigation">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
            </div>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}>
                <li><Link to="/login" style={{ color: 'black', textDecoration: 'none', marginRight: '20px' }}>Login</Link></li>
                <li><Link to="/orders" style={{ color: 'black', textDecoration: 'none', marginRight: '20px' }}>Orders</Link></li>
                <li style={{ marginLeft: 'auto' }}><Link to='/checkout' style={{ color: 'black', textDecoration: 'none' }}>Checkout {cartItemCount > 0 && `(${cartItemCount})`} Items</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;