import React from 'react';
import Room_style from "./room.module.css";
import {NavLink} from "react-router-dom";

const Room = (props) =>{
    return(
        <div className={Room_style.room}>
            <NavLink to={'/rooms/'+props.id} activeClassName={Room_style.activeBroom} >{props.nameRoom}</NavLink>
        </div>
    );
}
export default Room;