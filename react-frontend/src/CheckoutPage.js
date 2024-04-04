import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutPage({ cartItems }) {
    return (
        <div>
            <h2>Checkout</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.structure_id}>
                        ID: {item.structure_id}, Type: {item.structure_type}, Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default CheckoutPage;
