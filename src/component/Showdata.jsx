import React, { useEffect } from 'react';
// import img from './images/1.png';

const Showdata = (props) => {
    // const img = require(`./images/${props.d.image.replace("C:\\fakepath\\", "")}`).default;

    return (
        <div>
            <img src={props.d.imageUrl} height="200" width="200"/>
            <p>Name : {props.d.name}</p>
            <p>Email : {props.d.email}</p>
            <p>City : {props.d.city}</p>
            <p>Number : {props.d.number}</p>
        </div>
    );
};

export default Showdata;