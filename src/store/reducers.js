import { combineReducers } from 'redux'
import {tempRoomsReducer}  from "./Content/climateRoms/reducers"
import {seneryOutput} from './Content/scenery/reducers'

export default  combineReducers ({
    scenary: seneryOutput,
    tempRoom: tempRoomsReducer
}); 