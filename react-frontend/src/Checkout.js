// Checkout.js
import React from 'react';

function Checkout({ cartItems }) {
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
            <button onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
}

export default Checkout;
