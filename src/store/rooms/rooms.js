import { defaultRooms } from '../../constants/rooms';
import { ADD_ROOM } from './actions';
import Room from '../../helpers/room';

const initialState = {
  rooms: defaultRooms.map(r => new Room(r.id, r.nameRoom)),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROOM: {
      const { rooms } = state;
      const id = rooms.length > 0 ? rooms[rooms.length - 1].id + 1 : 1;
      rooms.push(new Room(id, action.payload));
      return {
        ...state,
        rooms,
      };
    }
    default: return state;
  }
};
