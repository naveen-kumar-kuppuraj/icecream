
import React, { useState } from 'react';

const ConsumerDetails = () => {
  const [sno, setSno] = useState('');
  const [consumer, setConsumer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSno(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:8080/ConsumerController/Read/${sno}`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`Consumer with ID ${sno} not found.`);
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Consumer Data:', data);
      setConsumer(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Find Consumer Details</h1>


      <form onSubmit={handleSubmit}>
        <label>
          Enter Consumer ID:
          <input
            type="number"
            value={sno}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Get Consumer Details</button>
      </form>


      {loading && <p>Loading consumer details...</p>}


      {error && <p>Error: {error}</p>}


      {consumer && (
        <div>
          <h2>Consumer Details</h2>
          <p><strong>ID:</strong> {consumer.id}</p>
          <p><strong>Name:</strong> {consumer.name}</p>
          <p><strong>Email:</strong> {consumer.email}</p>
          <p><strong>Mobile:</strong> {consumer.mobile}</p>
          <p><strong>Address:</strong> {consumer.address}</p>
          <p><strong>Message:</strong> {consumer.message}</p>

        </div>
      )}


      {!loading && !consumer && !error && sno && (
        <p>No consumer found with ID {sno}</p>
      )}
    </div>
  );
};

export default ConsumerDetails;
