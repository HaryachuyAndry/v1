import React from 'react';
import NavB_style from './Navbar.module.css'
import Rooms from './rooms/Rooms';
import Charts from './charts/Charts';
import Control from './control/Control';
import Scenary from './scenery/Scenery';
import ClimateRooms from './climate_rooms/Climate_Rooms';

const Navbar = () =>{
    return(
        <div className={NavB_style.Navbar}>
            <Rooms/>
            <ClimateRooms/>
            <Charts/>
            <Scenary/>
            <Control/>
        </div>
    );
}
export default Navbar;