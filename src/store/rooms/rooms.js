import { rooms } from '../../constants/rooms';
import Room from '../../helpers/room';

const initialState = {
    rooms: rooms.map(r => new Room(r.id, r.nameRoom)),
}

export default (state = initialState, action) => {
    switch(action.type){
        // case '': {

        // }
        default: return state;
    }
}