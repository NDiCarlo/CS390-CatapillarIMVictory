// App.js

import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);

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
          setData(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

    return (
        <div>
            <h1>Data from Backend</h1>
            <ul>
            {data.map(item => (
              <li key={item._id}>{item.UserName} {item.Password} {item.Country} {item.Email}</li>))}
            </ul>
        </div>
    );
}

export default App;
