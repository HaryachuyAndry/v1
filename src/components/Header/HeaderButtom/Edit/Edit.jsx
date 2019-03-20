import React from 'react';
import Edit_Style from "./Edit.module.css"
import { buttonEdit } from '../../../../redux/state';

const Edit = (props) =>{
    return(
        <div className={Edit_Style.edit}>
            <img src="https://cdn3.iconfinder.com/data/icons/block/32/box_edit-512.png" alt="asdfasd" onClick={buttonEdit}/>
        </div>
    );
}
export default Edit;