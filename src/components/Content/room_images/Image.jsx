import React from 'react';
import { Route } from 'react-router-dom';
import imageStyle from './image.module.css';

const ImgRoom = (props) => {
  const dataImage = props.dataRoom.map(roomImg => <Route exact path={`/rooms${roomImg.path}`} component={roomImg.nameImg} />);

  return (
    <div className={imageStyle.imageRoom}>
      {dataImage}
    </div>
  );
};

export default ImgRoom;
