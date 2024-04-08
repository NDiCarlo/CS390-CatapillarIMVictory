// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav style={{ backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'space-between', padding: '15px', fontSize: '1.2rem' }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/checkout" style={{ color: 'white', textDecoration: 'none' }}>Checkout</Link></li>
                <li><Link to="/orders" style={{ color: 'white', textDecoration: 'none' }}>Orders</Link></li> {/* New link for Orders page */}
            </ul>
        </nav>
    );
}

export default Navigation;
