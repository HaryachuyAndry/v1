import React from 'react';
import HeaderButtom_style from './HeaderButtom.module.css';
import ListRoom from './ListRoom/ListRoom';
import Edit from './Edit/Edit';

const HeaderButtom = (props) =>{
    return(
        <div className={HeaderButtom_style.HeadButtom}>
            <ListRoom roomData={props.roomData}/>
            <Edit buttonEdit={props.buttonEdit}/>
        </div>
    );
}
export default HeaderButtom;