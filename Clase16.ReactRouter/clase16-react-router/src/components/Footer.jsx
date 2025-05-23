import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer(props) {
    const navigate = useNavigate();

    const navToHome = () => {
        navigate('/')
    };

    return (
        <div style={{backgroundColor:'red'}}>
            <h3>Footer</h3>
            <hr />
            <button onClick={() => {
                navToHome()
            }}>Back to Home</button>
        </div>
    );
}

export default Footer;