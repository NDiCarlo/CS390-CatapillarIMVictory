// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ cartItemCount }) {
    return (
        <nav style={{ backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'space-between', padding: '15px', fontSize: '1.2rem' }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}>
                <li><Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>Home</Link></li>
                <li><Link to="/orders" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>Orders</Link></li>
            </ul>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}>
                <li style={{ marginLeft: 'auto' }}><Link to="/checkout" style={{ color: 'white', textDecoration: 'none' }}>🛒 {cartItemCount > 0 && `(${cartItemCount})`}</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
