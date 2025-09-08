import React from 'react';

function Footer() {
    return (
        <div style={{
            backgroundColor: '#404040',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 25,
            fontStyle:"italic"}}>
            <p style={{ color: 'white' }}>&copy; Leandro Traficante - All rights reserved 2025</p>
            <p style={{ color: 'white' }}>leandrotraficante@gmail.com</p>
        </div>
    );
}

export default Footer;

