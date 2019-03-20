import React from 'react';
import Scenery_style from './Scenery.module.css';
import {NavLink} from 'react-router-dom';
const Scenary = () =>{
    return(
        <div className={Scenery_style.scenery}>
            <NavLink to="/scenary" activeClassName={Scenery_style.active}>Сценарії</NavLink>
        </div>
    );
}

export default Scenary;