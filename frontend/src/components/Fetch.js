import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Container() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    async function apiFetch() {
      try {
        const { data } = await axios('http://localhost:5000/');
        setMessage(data.message);
      } catch (error) {
        console.error(error.stack);
      }
    }
    apiFetch();
  });
  return (
    <div>
      {message ? <p>{message}</p> : <p>Fetch component is loaded...</p>}
    </div>
  );
}

export default Container;
