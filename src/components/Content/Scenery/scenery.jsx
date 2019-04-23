import React from 'react';


const Scenery = (props) =>{
    
    return(
            <div >
                <p>{props.element1}</p>
                <p>{props.element2}</p>
                <input onChange={(event) => {props.outSceneryelement1(event.target.value)}} type="text"/>
            </div>
    );  
}

export default Scenery; 