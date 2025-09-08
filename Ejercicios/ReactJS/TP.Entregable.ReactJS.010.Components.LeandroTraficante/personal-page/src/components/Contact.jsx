import React from 'react';

function Contact() {
    return (
        <div style={{
            backgroundColor: '#e8e8e8',
            padding: 40,
            textAlign: 'center'
        }}>
            <h2 style={{ 
                color: '#404040', 
                marginBottom: 30,
                fontSize: 28
            }}>
                Contacto
            </h2>
            <form style={{
                maxWidth: 400,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 15
            }}>
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    style={{
                        padding: 12,
                        fontSize: 16,
                        border: '1px solid #ccc',
                        borderRadius: 4
                    }}
                />
                <input 
                    type="email" 
                    placeholder="Correo electrónico" 
                    style={{
                        padding: 12,
                        fontSize: 16,
                        border: '1px solid #ccc',
                        borderRadius: 4
                    }}
                />
                <textarea 
                    placeholder="Mensaje" 
                    rows="4"
                    style={{
                        padding: 12,
                        fontSize: 16,
                        border: '1px solid #ccc',
                        borderRadius: 4,
                        resize: 'vertical'
                    }}
                />
                <button 
                    type="submit"
                    style={{
                        padding: 12,
                        fontSize: 16,
                        backgroundColor: '#404040',
                        color: 'white',
                        border: 'none',
                        borderRadius: 4,
                        cursor: 'pointer'
                    }}
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default Contact;