import React from 'react';
import { Route } from 'react-router-dom';
import ContentStyle from './Content.module.css';
import ImgRoom from './room_images/Image';
import TempRoom from './temp_room/temp_room';

import ChartsContent from './Charts-content/charts_content';
import EditSet from './Edit/EditSet';
import SceneryContainer from './Scenery/sceneryContainer';

const Content = props => (
  <div className={ContentStyle.Content}>
    <Route path="/climate" exact render={() => <TempRoom />} />
    <Route path="/rooms" exact render={() => <ImgRoom bgUrl="rooms_bg.jpg" />} />
    <Route path="/rooms/1" exact render={() => <ImgRoom bgUrl="room1.jpg" />} />
    <Route path="/rooms/2" exact render={() => <ImgRoom bgUrl="room2.jpg" />} />
    <Route path="/rooms/3" exact render={() => <ImgRoom bgUrl="room3.jpg" />} />
    <Route path="/rooms/4" exact render={() => <ImgRoom bgUrl="room4.jpg" />} />
    <Route path="/rooms/5" exact render={() => <ImgRoom bgUrl="room5.jpg" />} />
    <Route path="/charts" exact render={() => <ChartsContent />} />
    <Route path="/scenery" exact render={() => <SceneryContainer />} />
    <EditSet Addroom={props.Addroom} />
  </div>
);

export default Content;
