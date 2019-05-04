import { combineReducers } from 'redux'
import {tempRoomsReducer}  from "./Content/climateRoms/reducers"
import {seneryOutput} from './Content/scenery/reducers'
import rooms from './rooms/rooms';

export default  combineReducers ({
    scenary: seneryOutput,
    tempRoom: tempRoomsReducer,
    rooms
}); 