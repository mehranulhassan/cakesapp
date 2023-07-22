import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WeddingCake() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('//ap') 
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
      <p>My name is mehran</p>
    </div>
  );
}

export default WeddingCake;
