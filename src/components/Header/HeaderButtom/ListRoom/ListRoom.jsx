import React from 'react';
import ListRoom_Style from "./ListRoom.module.css"
import Room from './Room/room';


const ListRoom = (props) =>{
    
    let listroom = props.roomData.map( addRom => <Room id={addRom.id} nameRoom={addRom.nameRoom} />);

    return(
        <div className={ListRoom_Style.listroom}>
            {listroom}
        </div>
    );
}
export default ListRoom;