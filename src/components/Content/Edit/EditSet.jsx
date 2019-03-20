import React from 'react';
import Edit_style from './Edit_style.module.css';
import addFile from './imgEdit/add_file.png';


const EditSet = (props) =>{
 
    return(
            <div className={Edit_style.Edit} >
                <img src={addFile} alt="" onClick={props.Addroom}/>
            </div>
    );  
}

export default EditSet; 