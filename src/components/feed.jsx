import React from 'react';
import Colors from './colors';

function Feed(props) {
    const ShowAlert = () => {
        alert('Hiciste Click')
    }
    return (
        <div style={style.feed}>
            <img src={props.img} alt="" height="200"/>
            <h3>{props.title}</h3>
            <p>{props.detail}</p>
            <Colors show={ShowAlert} color={props.color}></Colors>
        </div>
    );
};

const style = {
    feed: {
        backgroundColor: '#eee',
        border: '2px solid black',
        margin: '10px',
        padding: '10px',
    }
}

export default Feed;