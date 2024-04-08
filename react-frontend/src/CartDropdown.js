// CartDropdown.js
import React from 'react';
import Cart from './Cart';
import { Link } from 'react-router-dom'; // Import Link for routing

function CartDropdown({ cartItems, removeFromCart, adjustQuantity }) {
    return (
        <div className="dropdown-content">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} adjustQuantity={adjustQuantity} />
            <Link to="/checkout">
                <button>Checkout</button>
            </Link>
        </div>
    );
}

export default CartDropdown;
