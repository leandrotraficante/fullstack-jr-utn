import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div style={{backgroundColor:'blue'}}>
            <h3>Header</h3>
            <Link style={{margin: 5, padding: 5, color:'white', backgroundColor:'grey'}} to="/">HOME</Link>
            <Link style={{margin: 5, padding: 5, color:'white', backgroundColor:'grey'}} to="Page1">PAGE 1</Link>
            <Link style={{margin: 5, padding: 5, color:'white', backgroundColor:'grey'}} to="Page2">PAGE 2</Link>
            <Link style={{margin: 5, padding: 5, color:'white', backgroundColor:'grey'}} to="Page3">PAGE 3</Link>
        </div>
    );
}

export default Header;