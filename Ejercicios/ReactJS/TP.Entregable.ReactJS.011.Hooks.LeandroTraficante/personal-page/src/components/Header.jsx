import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{
      backgroundColor: '#404040',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ 
        color: 'white', 
        margin: 0, 
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        Personal Page
      </h1>
      <nav style={{ 
        display: 'flex', 
        gap: '30px',
        alignItems: 'center'
      }}>
        <Link 
          to='/' 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Home
        </Link>
        <Link 
          to='/services' 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Servicios
        </Link>
        <Link 
          to='/gallery' 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Galería
        </Link>
        <Link 
          to='/contact' 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Contacto
        </Link>
        <Link 
          to='/convert' 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Conversor
        </Link>
        <Link 
          to='/projects' 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Proyectos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
