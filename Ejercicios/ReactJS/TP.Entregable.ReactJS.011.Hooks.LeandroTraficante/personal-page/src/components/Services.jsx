import React from 'react';

const Services = () => {
    return (
        <div style={{
            padding: 40,
            textAlign: 'center'
        }}>
            <h2 style={{ 
                color: '#404040', 
                marginBottom: 30,
                fontSize: 28
            }}>
                Servicios
            </h2>
            <ul style={{
                listStyle: 'none',
                padding: 0,
                maxWidth: 400,
                margin: '0 auto'
            }}>
                <li style={{ 
                    color: '#404040', 
                    marginBottom: 10,
                    fontSize: 16
                }}>• Desarrollo Web</li>
                <li style={{ 
                    color: '#404040', 
                    marginBottom: 10,
                    fontSize: 16
                }}>• Desarrollo React</li>
                <li style={{ 
                    color: '#404040', 
                    marginBottom: 10,
                    fontSize: 16
                }}>• Consultoría Técnica</li>
                <li style={{ 
                    color: '#404040', 
                    marginBottom: 10,
                    fontSize: 16
                }}>• Mantenimiento de Sitios</li>
                <li style={{ 
                    color: '#404040', 
                    marginBottom: 10,
                    fontSize: 16
                }}>• Optimización SEO</li>
            </ul>
        </div>
    );
};

export default Services;