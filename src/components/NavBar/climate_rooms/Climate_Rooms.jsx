import React from 'react';
import Climate_Rooms_style from './Climate_Rooms.module.css'
import {NavLink} from "react-router-dom";

const ClimateRooms = () =>{
    return(
        <div className={Climate_Rooms_style.C_rooms}>
        <NavLink to="/climate" activeClassName={Climate_Rooms_style.active}> Клімат кімнат</NavLink>
        </div>
    );
}
export default ClimateRooms;
