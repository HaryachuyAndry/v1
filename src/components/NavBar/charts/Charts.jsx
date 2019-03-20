import React from 'react';
import Charts_style from './Charts.module.css';
import {NavLink} from "react-router-dom";

const Charts = () =>{
    return(
        <div className={Charts_style.charts}>
           <NavLink to="/charts" activeClassName={Charts_style.active}> Графіки </NavLink>
        </div>
    );
}

export default Charts; 