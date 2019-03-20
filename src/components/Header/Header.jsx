import React from 'react';
import Head_style from "./Header.module.css";
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderButtom from './HeaderButtom/HeaderButtom';

const Header = (props) =>{
    return(
        <div className={Head_style.Header}>
            <HeaderTop/>
            <HeaderButtom buttonEdit={props.buttonEdit} roomData={props.roomData}/>
        </div>
    );
}
export default Header;