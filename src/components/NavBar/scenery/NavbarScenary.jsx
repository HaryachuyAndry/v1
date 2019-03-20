import React from 'react';
import NavB_style from './../Navbar.module.css'
import {Route} from "react-router-dom";

const NavbarScenary = () =>{
    return(
        <div className={NavB_style.Navbar}>
                <Route path="/scenary" render={asdf} />
        </div>
    );
}

export default NavbarScenary ;
