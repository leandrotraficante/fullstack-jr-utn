import React from 'react';
import reactLogo from '../assets/react.svg'; 

function Header() {
  return (
    <div
      style={{
        backgroundColor: '#404040',
        width: 500,
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 25,
      }}
    >
      <img
        src={reactLogo}
        alt='React logo'
        style={{ width: 70}}
      />
      <h3 style={{ color: 'white' }}>Calculadora</h3>
    </div>
  );
}

export default Header;
