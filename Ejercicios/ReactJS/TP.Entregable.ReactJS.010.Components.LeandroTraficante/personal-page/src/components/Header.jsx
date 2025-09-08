import React from 'react';

function Header() {
  return (
    <div
      style={{
        backgroundColor: '#404040',
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 25,
      }}
    >
      <h1 style={{ color: 'white' }}>Personal Page</h1>
    </div>
  );
}

export default Header;
