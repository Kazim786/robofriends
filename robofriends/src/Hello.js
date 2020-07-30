//Example component

import React from 'react';

function Hello(props){
    return (
    <div className= 'Hello'>
        <img src= "data:image/jpeg;base64,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" alt = "Madinah"></img>
        <h1 class= "f1 tc">Hi i am your first component</h1>
        <p>{props.haq}</p>
    </div>

)}

export default Hello;