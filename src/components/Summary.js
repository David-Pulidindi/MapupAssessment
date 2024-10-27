import React from 'react';

const Summary = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }


  const totalEVs = data.length; 
  const uniqueMakes = [...new Set(data.map(item => item.Make))].length;
  const uniqueModels = [...new Set(data.map(item => item.Model))].length;
  const uniqueStates = [...new Set(data.map(item => item.State))].length;

  return (
    <div className="summary">
      <h2>Electric Vehicle Summary</h2>
      <p>Total EVs: {totalEVs}</p>
      <p>Unique Makes: {uniqueMakes}</p>
      <p>Unique Models: {uniqueModels}</p>
      <p>Unique States: {uniqueStates}</p>
    </div>
  );
};

export default Summary;
