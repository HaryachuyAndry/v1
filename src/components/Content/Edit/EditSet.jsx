import React from 'react';
import Edit_style from './Edit_style.module.css';
import addFile from './imgEdit/add_elemets.png';
import addRoom from './imgEdit/add_room.png';
import deleteRoom from './imgEdit/delete_room.png';
import editImgRoom from './imgEdit/edit_img_room.png';
import renameRoom from './imgEdit/rename_room.png';


const EditSet = (props) =>{
 
    return(
            <div className={Edit_style.Edit }  >
                <img src={addFile} alt="" onClick={props.Addroom} className={Edit_style.icon}/>
                <img src={addRoom} alt="" onClick={props.Addroom}className={Edit_style.icon}/>
                <img src={deleteRoom} alt="" onClick={props.Addroom}className={Edit_style.icon}/>
                <img src={editImgRoom} alt="" onClick={props.Addroom}className={Edit_style.icon}/>
                <img src={renameRoom} alt="" onClick={props.Addroom}className={Edit_style.icon}/>
            </div>
    );  
}

export default EditSet; 