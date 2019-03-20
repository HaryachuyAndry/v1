import React from 'react';
import MenuEdit_Style from "./menuEdit.module.css";
import edit_img from "./ImageEdit/add_elemts.png";

const MenuEdit = () =>{
    return(
        <div className={MenuEdit_Style.edit}>
            <img src={edit_img}/>
        </div>
    );
}
export default MenuEdit;