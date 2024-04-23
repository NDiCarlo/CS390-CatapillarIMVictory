// Navigation.js
import React from 'react';
import CartDropdown from './CartDropdown.js';
import { Link } from 'react-router-dom';
import logo from './CATLogo.png'; // Import the logo image

function Navigation({ cartItemCount }) {
    return (
        <nav style={{ backgroundColor: '#ffc400', color: 'black', display: 'flex', justifyContent: 'space-between', padding: '10px', fontSize: '1.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/">
                    <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '20px' }} /> {/* Make the logo a link */}
                </Link>
            </div>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}>
                <li><Link to="/login" style={{ color: 'black', textDecoration: 'none', marginRight: '20px' }}>Login</Link></li>
                <li><Link to="/orders" style={{ color: 'black', textDecoration: 'none', marginRight: '20px' }}>Orders</Link></li>
                <li style={{ marginLeft: 'auto' }}><Link to='/checkout' style={{ color: 'black', textDecoration: 'none' }}>Cart 🛒 {cartItemCount > 0 && `(${cartItemCount})`}</Link></li>
            </ul>
        </nav>
    );
}


export default Navigation;
