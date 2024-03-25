// App.js
import React, { useState, useEffect } from 'react';
import CartDropdown from './CartDropdown'; // Import CartDropdown component
import './App.css'; // Import CSS file for styling

function App() {
    const [data, setData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            console.log(jsonData); // Log received data
            setData(jsonData.map(item => ({ ...item, quantity: 0 }))); // Add 'quantity' property to each item
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const addToCart = (item) => {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.structure_id === item.structure_id);
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity++;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemToRemove) => {
        const updatedCartItems = cartItems.filter(item => item !== itemToRemove);
        setCartItems(updatedCartItems);
    };

    const adjustQuantity = (item, increment) => {
        const updatedCartItems = [...cartItems];
        const itemToUpdateIndex = updatedCartItems.findIndex(cartItem => cartItem.structure_id === item.structure_id);
        updatedCartItems[itemToUpdateIndex].quantity += increment;

        if (updatedCartItems[itemToUpdateIndex].quantity <= 0) {
            updatedCartItems.splice(itemToUpdateIndex, 1); // Remove item if quantity is zero
        }
        setCartItems(updatedCartItems);
    };

    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
    };

    return (
        <div className="container">
            <div className="cart-dropdown">
                <button onClick={toggleCartVisibility} className="cart-button">
                    Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                </button>
                {cartVisible && <CartDropdown cartItems={cartItems} removeFromCart={removeFromCart} adjustQuantity={adjustQuantity} />}
            </div>
            <h1>Data from Backend</h1>
            <div className="main-content">
                <div className="structure-list">
                    <h2>Structure Listing</h2>
                    <ul>
                        {data.map(item => (
                            <li key={item.structure_id}>
                                ID: {item.structure_id}, Type: {item.structure_type}, User ID: {item.user_id}, Tags: {item.tags.join(', ')}
                                <button onClick={() => addToCart(item)} style={{ marginLeft: '10px' }}>Add to Cart</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
