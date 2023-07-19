import React from 'react';
import { useState, useEffect } from 'react';


const Saludo = ({ greeting }) => {
  const [color, setColor] = useState('#333'); 

  useEffect(() => {
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let newColor = '#';
      for (let i = 0; i < 6; i++) {
        newColor += letters[Math.floor(Math.random() * 16)];
      }
      return newColor;
    };

    const interval = setInterval(() => {
      const newColor = getRandomColor();
      setColor(newColor);
    }, 2000);

    
    return () => clearInterval(interval);
  }, []); 

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    background: color,
  };

  const greetingStyle = {
    fontSize: '24px',
    color: '#fff', 
  };

  return (
    <div style={containerStyle}>
      <h2 style={greetingStyle}>{greeting}</h2>
    </div>
  );
};

export default Saludo;