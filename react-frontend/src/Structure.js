import React from 'react';
import { useParams } from 'react-router-dom';

const PlaceholderPage = () => {
    // Extract the structure ID from the URL
    const { id } = useParams();

    return (
        <div>
            <h2>Structure Details</h2>
            <p>This is a placeholder for structure with ID: {id}</p>
            {/* Add backend integration here */}
        </div>
    );
};

export default PlaceholderPage;