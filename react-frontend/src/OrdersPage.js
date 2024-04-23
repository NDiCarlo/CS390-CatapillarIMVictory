import React, { useState } from 'react';

function OrdersPage() {
    const [userId, setUserId] = useState('');
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:5000/api/orders?user_id=${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch orders');
            }
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error searching orders:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Orders Page</h1>
            <h2>Recent Orders</h2>
            <div>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter User ID"
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {loading && <p>Loading...</p>}
            <ul>
                {orders.map((order) => (
                    <li key={order.order_id}>
                        Order ID: {order.order_id}, User ID: {order.user_id}, Structures: {order.structures.join(', ')}, Status: {order.status}, Date Submitted: {order.date_submitted}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrdersPage;
