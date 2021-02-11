import React from 'react';

const SingleMessage = props =>{
    return(
        <li>{props.message}<button onClick={props.delete}>X</button></li>
    )
}

export default SingleMessage;