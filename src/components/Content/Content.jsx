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
    <Route path="/rooms" exact render={() => <ImgRoom dataRoom={props.dataRoom} />} />
    <Route path="/charts" exact render={() => <ChartsContent />} />
    <Route path="/scenery" exact render={() => <SceneryContainer />} />
    <EditSet Addroom={props.Addroom} />
  </div>
);

export default Content;
