import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={containerStyle}>
      <h2 style={greetingStyle}>{greeting}</h2>
    </div>
  );
};

// Estilos
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '200px',
  background: '#f2f2f2',
};

const greetingStyle = {
  fontSize: '24px',
  color: '#333',
};

export default ItemListContainer;