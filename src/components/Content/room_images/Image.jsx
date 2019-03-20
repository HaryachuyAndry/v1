import React from 'react';
import image_style from './image.module.css';
import {Route} from "react-router-dom";


const ImgRoom = (props) => {

    let dataImage = props.dataRoom.map( roomImg => <Route exact path={`/rooms${roomImg.path}`} component={roomImg.nameImg}/> )

    return(
            <div className={image_style.imageRoom}>
                {dataImage}
            </div>
    );
}

export default ImgRoom;