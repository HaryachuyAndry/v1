import React from 'react';
import Content_style from './Content.module.css'
import ImgRoom from './room_images/Image';
import TempRoom from './temp_room/temp_room';
import {Route} from "react-router-dom";
import ChartsContent from './Charts-content/charts_content';
import EditSet from './Edit/EditSet';
import SceneryContainer from './Scenery/sceneryContainer';

const Content = (props) =>{
    return(
            <div className={Content_style.Content}>
                <Route path="/climate" render={() => <TempRoom/>}/>
                <Route path="/rooms" render={() =><ImgRoom dataRoom={props.dataRoom}/>}/> 
                <Route path="/charts" render={() =><ChartsContent/>}/> 
                <Route path="/scenery" render={() =><SceneryContainer/>}/> 
                <EditSet  Addroom={props.Addroom}/>
            </div>
    );  
}

export default Content; 