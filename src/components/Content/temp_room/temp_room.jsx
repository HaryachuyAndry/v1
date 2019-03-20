import React from "react";
import Temp_room_style from "./temp_room.module.css"

const TempRoom = () => {
    return(
        <div className={Temp_room_style.temp_room}>
            <div className={Temp_room_style.roomT}>Кімната 1</div>                        
            <div className={Temp_room_style.roomT}>Кімната 2</div>                        
            <div className={Temp_room_style.roomT}>Кімната 3</div>
                                    
        </div>
    );
}

export default TempRoom;