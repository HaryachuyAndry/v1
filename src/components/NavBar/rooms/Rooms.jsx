import React from 'react';
import Rooms_style from './Rooms.module.css'
import {NavLink} from "react-router-dom";
const Rooms = () =>{
    return(
        <div className={Rooms_style.rooms}>
          <NavLink to="/rooms" activeClassName={Rooms_style.active}>Кімнати</NavLink>
        </div>
    );
}
export default Rooms;
 