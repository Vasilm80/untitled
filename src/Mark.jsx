import React from 'react';

export default function Mark(img,name) {
    return (
    <div className='mark'>

        <img src={img}></img>
        <p>{name}</p>
    </div>)
}